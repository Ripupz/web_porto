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

function DummyBadge() {
  return <span className="visual-dummy-badge">Reconstructed · dummy data</span>;
}

function AuctionVisual({ compact }) {
  return (
    <VisualFrame
      compact={compact}
      tone="amber"
      label="Reconstructed auction workflow showing three dummy requests tracked independently"
    >
      <DummyBadge />
      <div className="visual-window">
        <div className="visual-window__top">
          <span />
          <span />
          <span />
          <strong>Review queue</strong>
        </div>
        <div className="auction-grid">
          <div className="auction-input">
            <small>Dummy certificate</small>
            <strong>SAMPLE–001</strong>
            <span className="visual-button">Check record</span>
          </div>
          <div className="auction-status-list">
            <div><span>A</span><b>Completed</b><em>Evidence ready</em></div>
            <div><span>B</span><b>In review</b><em>Validating source</em></div>
            <div><span>C</span><b>Retry available</b><em>Other results preserved</em></div>
          </div>
        </div>
      </div>
      <p className="visual-caption">Independent progress · explicit states · targeted recovery</p>
    </VisualFrame>
  );
}

function DocumentVisual({ compact }) {
  return (
    <VisualFrame
      compact={compact}
      tone="violet"
      label="Reconstructed private document review screen with dummy findings and a human review reminder"
    >
      <DummyBadge />
      <div className="document-demo">
        <div className="document-sheet">
          <span className="document-sheet__stamp">SAMPLE</span>
          <div className="document-sheet__title" />
          <div className="document-sheet__line wide" />
          <div className="document-sheet__line" />
          <div className="document-sheet__line short" />
          <div className="document-sheet__mark">?</div>
        </div>
        <div className="document-findings">
          <small>Private scan summary</small>
          <strong className="document-findings__title">Human review recommended</strong>
          <div><span className="signal signal--amber" />Inconsistent visual pattern</div>
          <div><span className="signal signal--violet" />Metadata needs context</div>
          <div><span className="signal signal--green" />File checks completed</div>
          <p>Assistive signals—not a genuine/fake verdict.</p>
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
      label="Reconstructed legal-record verification flow using three anonymous public sources and conservative identity confidence"
    >
      <DummyBadge />
      <div className="legal-flow">
        <div className="legal-person">
          <span className="legal-avatar">SP</span>
          <div><small>Dummy subject</small><strong>Sample Person</strong></div>
        </div>
        <div className="legal-sources">
          <div><b>Public source A</b><span>Possible record</span></div>
          <div><b>Public source B</b><span>No confident match</span></div>
          <div><b>Public source C</b><span>Evidence unavailable</span></div>
        </div>
        <div className="legal-summary">
          <small>Reviewer summary</small>
          <strong>One item needs identity review</strong>
          <span>Provenance preserved</span>
          <span>Missing data is not proof of absence</span>
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
      label="Reconstructed Stuggy mobile screens showing a study plan, Pomodoro timer, and forum post with dummy data"
    >
      <span className="visual-dummy-badge">Reconstructed · no real user data</span>
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
      <span className="visual-dummy-badge">Public project screenshot</span>
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
