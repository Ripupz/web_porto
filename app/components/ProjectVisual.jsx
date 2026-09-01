import Image from "next/image";

function VisualFrame({ children, compact, label, tone = "emerald" }) {
  return (
    <div
      className={`project-visual project-visual--${tone} ${compact ? "project-visual--compact" : ""}`}
      role="img"
      aria-label={label}
    >
      {children}
    </div>
  );
}

function AuctionVisual({ compact }) {
  return (
    <VisualFrame
      compact={compact}
      tone="amber"
      label="Auction record review workflow with independent status and recovery"
    >
      <div className="document-demo">
        <div className="document-sheet auction-sheet">
          <span className="document-sheet__stamp auction-stamp">BATCH</span>
          <div className="auction-mini-list">
            <div className="auction-mini-item">
              <span className="signal signal--green" />
              <div>
                <strong>Lot #482</strong>
                <small>Evidence ready</small>
              </div>
              <span className="auction-badge auction-badge--success">Ready</span>
            </div>
            <div className="auction-mini-item">
              <span className="signal signal--slate" />
              <div>
                <strong>Lot #483</strong>
                <small>No listing match</small>
              </div>
              <span className="auction-badge auction-badge--neutral">Preserved</span>
            </div>
            <div className="auction-mini-item">
              <span className="signal signal--amber" />
              <div>
                <strong>Lot #484</strong>
                <small>Retry required</small>
              </div>
              <span className="auction-badge auction-badge--warning">Retry</span>
            </div>
          </div>
          <div className="document-sheet__mark auction-mark">✓</div>
        </div>
        <div className="document-findings auction-findings">
          <small>Workflow summary</small>
          <br />
          <strong className="document-findings__title">Resilient batch processing</strong>
          <div><span className="signal signal--green" />Explicit state & evidence per item</div>
          <div><span className="signal signal--amber" />Targeted retries for failed requests</div>
          <div><span className="signal signal--slate" />Fault-isolated batch execution</div>
          <p>Replaces all-or-nothing batches with independent lifecycles, ensuring a single failure never erases completed results.</p>
        </div>
      </div>
    </VisualFrame>
  );
}

function DocumentVisual({ compact }) {
  return (
    <VisualFrame
      compact={compact}
      tone="violet"
      label="Document review workflow with example findings and a human review reminder"
    >
      <div className="document-demo">
        <div className="document-sheet">
          <span className="document-sheet__stamp">SAMPLE</span>
          <div className="document-sheet__title" />
          <div className="document-sheet__line wide" />
          <div className="document-sheet__line" />
          <div className="document-sheet__line short" />
          <div className="document-sheet__mark">?</div>
        </div>
        <div className="document-findings auction-findings">
        <small>Workflow summary</small>
        <br />
        <strong className="document-findings__title">AI-assisted auction finding</strong>
        <div><span className="signal signal--green" />Explicit per-item match evidence</div>
        <div><span className="signal signal--amber" />Targeted recovery for failed requests</div>
        <div><span className="signal signal--slate" />Fault-isolated batch execution</div>
        <p>Assists reviewers with AI-driven auction record matching, using independent lifecycles so a single failure never erases completed findings.</p>
      </div>
      </div>
    </VisualFrame>
  );
}

function LegalVisual({ compact }) {
  return (
    <VisualFrame
      compact={compact}
      tone="blue"
      label="Legal record verification map with multi-source checks and confidence signals"
    >
      <div className="document-demo">
        <div className="document-sheet legal-sheet">
          <span className="document-sheet__stamp legal-stamp">VERIFY</span>
          <div className="legal-mini-profile">
            <div className="legal-mini-avatar">SP</div>
            <div>
              <strong>Sample Person</strong>
              <small>3 source checks</small>
            </div>
          </div>
          <div className="legal-mini-list">
            <div className="legal-mini-item">
              <span className="signal signal--amber" />
              <span>Public source match</span>
            </div>
            <div className="legal-mini-item">
              <span className="signal signal--green" />
              <span>No adverse finding</span>
            </div>
            <div className="legal-mini-item">
              <span className="signal signal--slate" />
              <span>Source unavailable</span>
            </div>
          </div>
          <div className="document-sheet__mark legal-mark">◇</div>
        </div>
        <div className="document-findings legal-findings">
          <small>Verification summary</small>
          <br />
          <strong className="document-findings__title">Escalated for expert review</strong>
          <div><span className="signal signal--amber" />AI identity matching</div>
          <div><span className="signal signal--blue" />Resilient provider orchestration</div>
          <div><span className="signal signal--green" />Independent provider checks</div>
          <p>Normalizes inconsistent public data to help human reviewers safely distinguish ambiguous identity matches.</p>
        </div>
      </div>
    </VisualFrame>
  );
}

function StuggyVisual({ compact }) {
  return (
    <VisualFrame
      compact={compact}
      tone="mint"
      label="Stuggy mobile screens showing a study plan, Pomodoro timer, and forum post"
    >
      <span className="visual-label-badge">Product interface preview</span>
      <div className="stuggy-stage">
        <div className="phone phone--back">
          <small>Today</small>
          <strong>Study plan</strong>
          <div className="task"><i />Review chapter 4</div>
          <div className="task"><i />Practice quiz</div>
          <div className="score">Score trend <b>↗</b></div>
        </div>
        <div className="phone phone--front">
          <div className="frog-crop">
            <Image src="/stuggy.png" alt="" width={340} height={357} />
          </div>
          <small>Focus session</small>
          <strong className="timer">25:00</strong>
          <span className="visual-button">Start</span>
          <div className="forum-chip">Forum · “Any study tips?”</div>
        </div>
      </div>
    </VisualFrame>
  );
}

function CarsVisual({ compact }) {
  return (
    <VisualFrame
      compact={compact}
      tone="green"
      label="CarsIdentifier web interface for uploading a vehicle image and receiving a model label"
    >
      <span className="visual-label-badge">Public project screenshot</span>
      <div className="cars-screenshot">
        <Image
          src="/vehicle.png"
          alt="CarsIdentifier vehicle image upload interface"
          fill
          sizes={compact ? "(max-width: 1024px) 100vw, 50vw" : "100vw"}
        />
      </div>
      <p className="visual-caption">Upload → preprocess → classify → display known label</p>
    </VisualFrame>
  );
}

export default function ProjectVisual({ slug, compact = false }) {
  if (slug === "digital-auction-platform") return <AuctionVisual compact={compact} />;
  if (slug === "document-authenticity-detection") return <DocumentVisual compact={compact} />;
  if (slug === "legal-record-verification") return <LegalVisual compact={compact} />;
  if (slug === "stuggy") return <StuggyVisual compact={compact} />;
  return <CarsVisual compact={compact} />;
}