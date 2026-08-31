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
      label="Infographic showing three auction-review requests tracked independently through mixed outcomes"
    >
      <div className={`auction-infographic ${compact ? "auction-infographic--compact" : ""}`}>
        <div className="auction-infographic__header">
          <div>
            <small>Veriflo · multi-record review</small>
            <strong>Independent request lifecycle</strong>
          </div>
          <span>3 example records</span>
        </div>

        <div className="auction-infographic__flow" aria-hidden="true">
          <div><span>01</span><small>Submit batch</small><strong>3 records</strong></div>
          <i>→</i>
          <div><span>02</span><small>Track separately</small><strong>3 states</strong></div>
          <i>→</i>
          <div><span>03</span><small>Recover precisely</small><strong>1 retry</strong></div>
        </div>

        <div className="auction-infographic__body">
          <div className="auction-records">
            <div className="auction-record auction-record--success">
              <span>A</span>
              <div><small>Example record</small><strong>Evidence ready</strong></div>
              <em>Completed</em>
            </div>
            <div className="auction-record auction-record--neutral">
              <span>B</span>
              <div><small>Example record</small><strong>No matching result</strong></div>
              <em>Reviewed</em>
            </div>
            <div className="auction-record auction-record--warning">
              <span>C</span>
              <div><small>Example record</small><strong>Retry required</strong></div>
              <em>Recoverable</em>
            </div>
          </div>

          <div className="auction-outcome">
            <small>Design principle</small>
            <strong>One issue does not erase other results</strong>
            <ul>
              <li>Per-item status</li>
              <li>Partial success preserved</li>
              <li>Targeted recovery</li>
            </ul>
          </div>
        </div>

        <div className="auction-infographic__footer">
          <span>Explicit states</span>
          <span>No-result ≠ failure</span>
          <span>Retry only what failed</span>
        </div>
      </div>
      <p className="visual-caption">Submit → track independently → preserve results → recover precisely</p>
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
        <div className="document-findings">
          <small>Analysis summary</small>
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
      label="Infographic showing an example identity reviewed across three public-information sources with conservative matching"
    >
      <div className={`legal-infographic ${compact ? "legal-infographic--compact" : ""}`}>
        <div className="legal-infographic__header">
          <div className="legal-infographic__mark">◇</div>
          <div>
            <small>Veriflo · identity evidence review</small>
            <strong>Multi-source verification map</strong>
          </div>
          <span>Example profile</span>
        </div>

        <div className="legal-infographic__body">
          <div className="legal-evidence-column">
            <div className="legal-subject-card">
              <span className="legal-avatar">SP</span>
              <div><small>Example subject</small><strong>Sample Person</strong><em>Identity requires review</em></div>
              <b>3 sources</b>
            </div>

            <div className="legal-source-grid">
              <div className="legal-source-card legal-source-card--match">
                <span>A</span><div><small>Public source</small><strong>Possible record</strong></div><em>Review</em>
              </div>
              <div className="legal-source-card legal-source-card--clear">
                <span>B</span><div><small>Public source</small><strong>No confident match</strong></div><em>Checked</em>
              </div>
              <div className="legal-source-card legal-source-card--missing">
                <span>C</span><div><small>Public source</small><strong>Evidence unavailable</strong></div><em>Partial</em>
              </div>
            </div>
          </div>

          <div className="legal-review-panel">
            <small>Reviewer summary</small>
            <strong>Human verification required</strong>
            <p>One possible record needs identity review before it can inform a decision.</p>
            <ul>
              <li>Provenance retained</li>
              <li>Ambiguity stays visible</li>
              <li>Missing data is not absence</li>
            </ul>
          </div>
        </div>

        <div className="legal-infographic__footer">
          <span>Independent checks</span>
          <span>Conservative matching</span>
          <span>Graceful partial results</span>
        </div>
      </div>
      <p className="visual-caption">Collect evidence → preserve provenance → surface uncertainty → support human review</p>
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
