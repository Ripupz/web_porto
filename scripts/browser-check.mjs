import { readFileSync, writeFileSync } from "node:fs";

const browserHost = process.env.CDP_HOST || "http://127.0.0.1:9222";
const siteHost = process.env.SITE_HOST || "http://127.0.0.1:4173";
const runAxe = process.env.RUN_AXE === "1";
const captureScreenshots = process.env.CAPTURE_SCREENSHOTS === "1";

const routes = [
  "/",
  "/projects/digital-auction-platform",
  "/projects/document-authenticity-detection",
  "/projects/legal-record-verification",
  "/projects/stuggy",
  "/projects/cars-identifier",
  "/academy-portfolio",
];

const delay = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

async function createTab() {
  const response = await fetch(`${browserHost}/json/new?about:blank`, {
    method: "PUT",
  });
  if (!response.ok) throw new Error(`Cannot create Chromium tab: ${response.status}`);
  return response.json();
}

class CdpClient {
  constructor(webSocketUrl) {
    this.id = 0;
    this.pending = new Map();
    this.listeners = new Map();
    this.socket = new WebSocket(webSocketUrl);
  }

  async connect() {
    await new Promise((resolve, reject) => {
      this.socket.addEventListener("open", resolve, { once: true });
      this.socket.addEventListener("error", reject, { once: true });
    });

    this.socket.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      if (message.id) {
        const pending = this.pending.get(message.id);
        if (!pending) return;
        this.pending.delete(message.id);
        if (message.error) pending.reject(new Error(message.error.message));
        else pending.resolve(message.result);
        return;
      }

      const listeners = this.listeners.get(message.method) || [];
      listeners.forEach((listener) => listener(message.params));
    });
  }

  send(method, params = {}) {
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.socket.send(JSON.stringify({ id, method, params }));
    });
  }

  on(method, listener) {
    const listeners = this.listeners.get(method) || [];
    listeners.push(listener);
    this.listeners.set(method, listeners);
  }

  once(method, timeout = 10000) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(
        () => reject(new Error(`Timed out waiting for ${method}`)),
        timeout,
      );
      this.on(method, (params) => {
        clearTimeout(timer);
        resolve(params);
      });
    });
  }

  close() {
    this.socket.close();
  }
}

async function evaluate(client, expression) {
  const result = await client.send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  if (result.exceptionDetails) {
    throw new Error(result.exceptionDetails.text || "Browser evaluation failed");
  }
  return result.result.value;
}

async function navigate(client, url, width, height) {
  await client.send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width < 600,
  });
  const loaded = client.once("Page.loadEventFired");
  await client.send("Page.navigate", { url });
  await loaded;
  await delay(650);
}

const auditExpression = `(() => {
  const html = document.documentElement;
  const body = document.body;
  const accessibleName = (element) =>
    element.getAttribute('aria-label') ||
    element.getAttribute('title') ||
    element.textContent.trim() ||
    Array.from(element.querySelectorAll('img')).map((image) => image.alt).join(' ').trim();
  const internalHashes = Array.from(document.querySelectorAll('a[href^="#"]'))
    .map((anchor) => anchor.getAttribute('href'))
    .filter((href) => href && href !== '#' && !document.querySelector(href));
  return {
    title: document.title,
    horizontalOverflow: Math.max(html.scrollWidth, body.scrollWidth) - html.clientWidth,
    imagesWithoutAlt: document.querySelectorAll('img:not([alt])').length,
    genericImageAlts: Array.from(document.images).filter((image) => image.alt.trim().toLowerCase() === 'tool').length,
    unnamedButtons: Array.from(document.querySelectorAll('button')).filter((button) => !accessibleName(button)).length,
    emptyLinks: Array.from(document.querySelectorAll('a')).filter((anchor) => !accessibleName(anchor)).length,
    brokenHashTargets: internalHashes,
    overflowElements: Array.from(document.querySelectorAll('body *'))
      .map((element) => ({
        element: element.tagName.toLowerCase(),
        className: typeof element.className === 'string' ? element.className.slice(0, 100) : '',
        left: Math.round(element.getBoundingClientRect().left),
        right: Math.round(element.getBoundingClientRect().right),
      }))
      .filter((item) => item.left < -1 || item.right > html.clientWidth + 1)
      .slice(0, 8),
    h1Count: document.querySelectorAll('h1').length,
    mainCount: document.querySelectorAll('main').length,
  };
})()`;

async function run() {
  const tab = await createTab();
  const client = new CdpClient(tab.webSocketDebuggerUrl);
  const browserErrors = [];
  await client.connect();
  await Promise.all([
    client.send("Page.enable"),
    client.send("Runtime.enable"),
    client.send("Log.enable"),
  ]);

  if (runAxe) {
    await client.send("Page.addScriptToEvaluateOnNewDocument", {
      source: readFileSync("node_modules/axe-core/axe.min.js", "utf8"),
    });
  }

  client.on("Runtime.exceptionThrown", (event) => {
    browserErrors.push(event.exceptionDetails?.text || "Uncaught browser exception");
  });
  client.on("Log.entryAdded", ({ entry }) => {
    if (entry.level === "error") browserErrors.push(entry.text);
  });
  client.on("Runtime.consoleAPICalled", (event) => {
    if (event.type === "error") {
      browserErrors.push(event.args.map((argument) => argument.value || argument.description).join(" "));
    }
  });

  const audits = [];
  const axeResults = [];
  for (const route of routes) {
    for (const viewport of [
      { name: "desktop", width: 1440, height: 900 },
      { name: "mobile", width: 390, height: 844 },
    ]) {
      await navigate(client, `${siteHost}${route}`, viewport.width, viewport.height);
      audits.push({ route, viewport: viewport.name, ...(await evaluate(client, auditExpression)) });
      if (runAxe && viewport.name === "desktop") {
        const violations = await evaluate(
          client,
          `axe.run(document, { resultTypes: ['violations'] }).then((result) =>
            result.violations.map((violation) => ({
              id: violation.id,
              impact: violation.impact,
              help: violation.help,
              nodes: violation.nodes.length,
              targets: violation.nodes.slice(0, 4).map((node) => node.target),
            })))`,
        );
        axeResults.push({ route, violations });
      }
    }
  }

  await navigate(client, `${siteHost}/`, 390, 844);
  const menu = await evaluate(
    client,
    `(async () => {
      const openButton = document.querySelector('button[aria-label="Open navigation menu"]');
      if (!openButton) return { found: false };
      openButton.click();
      await new Promise((resolve) => setTimeout(resolve, 420));
      const panel = document.getElementById('mobile-menu');
      const openState = {
        expanded: openButton.getAttribute('aria-expanded'),
        hidden: panel.getAttribute('aria-hidden'),
        transform: getComputedStyle(panel).transform,
      };
      const closeButton = panel.querySelector('button[aria-label="Close navigation menu"]');
      closeButton.click();
      await new Promise((resolve) => setTimeout(resolve, 420));
      return {
        found: true,
        openState,
        closedExpanded: openButton.getAttribute('aria-expanded'),
        closedHidden: panel.getAttribute('aria-hidden'),
      };
    })()`,
  );

  if (captureScreenshots) {
    for (const viewport of [
      { name: "desktop", width: 1440, height: 1100 },
      { name: "mobile", width: 390, height: 1200 },
    ]) {
      await navigate(client, `${siteHost}/`, viewport.width, viewport.height);
      await evaluate(
        client,
        `document.getElementById('works').scrollIntoView({ block: 'start' }); true`,
      );
      await delay(700);
      const screenshot = await client.send("Page.captureScreenshot", {
        format: "png",
        fromSurface: true,
      });
      writeFileSync(
        `/tmp/portfolio-projects-${viewport.name}.png`,
        Buffer.from(screenshot.data, "base64"),
      );
    }
  }

  client.close();
  console.log(JSON.stringify({ audits, menu, browserErrors, axeResults, captureScreenshots }, null, 2));
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
