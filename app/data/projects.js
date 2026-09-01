const PUBLIC_PRODUCT_NAME = "Veriflo";
const PUBLIC_PRODUCT_URL = "https://veriflo.co.id/";
const PUBLIC_PRODUCT_NOTE =
  "Veriflo was the project I contributed to during my Moladin internship. Visit the public project website for context.";

const internshipMeta = (profile) => ({
  year: profile.internshipYear || "Year pending confirmation",
  role: profile.internshipRole || "Internship role pending confirmation",
  context: "Moladin engineering internship · Veriflo project",
  publicProductName: PUBLIC_PRODUCT_NAME,
  publicProductUrl: PUBLIC_PRODUCT_URL,
  publicProductNote: PUBLIC_PRODUCT_NOTE,
});

const projectDefinitions = [
  {
    slug: "digital-auction-platform",
    title: "Digital Auction Platform",
    eyebrow: "Reliable, traceable review workflows",
    internshipProject: true,
    status: "Implemented workflow",
    technologies: [
      "Python",
      "REST APIs",
      "Asynchronous processing",
      "Evidence validation",
    ],
    summary:
      "A fault-tolerant auction review workflow that lets reviewers submit multiple certificate checks, track each result independently, and retry only the records that fail.",
    process:
      "Mapped the submission-to-result lifecycle, separated execution status from evidence meaning, and designed per-record task handling with targeted retries.",
    outcome:
      "Produced a clearer operational flow where valid results are preserved, failed checks are recoverable, and no-result outcomes are not mistaken for system errors.",
    learning:
      "Reliable reviewer tools need explicit state, evidence, and recovery behavior for every record instead of hiding work inside one all-or-nothing batch.",
    story: {
      problem:
        "I worked on a multi-record review flow where every check could finish differently: completed with evidence, completed without a matching result, or interrupted by an error. The challenge was to preserve successful work and make each outcome understandable without forcing reviewers to restart the entire submission.",
      users:
        "Operational reviewers handling several auction-related checks in one submission and needing clear per-item status, evidence, and recovery options.",
      why:
        "When one unclear or failed item hides successful results, reviewers repeat work and lose trust in the workflow. Clear state and targeted recovery keep progress visible without implying that missing evidence is a negative result.",
      responsibilities: [
        "Mapped and documented the master-log and result lifecycle.",
        "Built independent submission and progress behavior for multiple certificate checks.",
        "Separated technical failures from valid no-result outcomes.",
        "Added layered validation for reachable but unreadable or misleading source pages.",
        "Defined targeted retry behavior so reviewers could recover failed rows without resubmitting completed work.",
      ],
      contributions: [
        "Per-item status and result tracking",
        "Fault-isolated multi-item submission",
        "Duplicate-prevention and targeted retry design",
        "Layered source, content, and context validation",
        "Operational workflow documentation",
      ],
      research:
        "I traced the complete request, status, and result path; reviewed how partial failures reached the interface; and investigated cases where a technically reachable page did not contain a valid listing.",
      approach:
        "Each submitted certificate becomes its own asynchronous job. The workflow records processing state separately from result meaning, validates source evidence at several layers, and exposes enough state for the interface to retry only what needs recovery.",
      decisions:
        "The design favors fault isolation over all-or-nothing batching. That preserves successful work but requires deliberate duplicate prevention, progress aggregation, and clear retry rules in the interface.",
      challenge:
        "External pages can be reachable yet empty, misleading, or no longer valid. The solution combined basic reachability checks, readable-content checks, context checks, and conservative result wording.",
      testing:
        "Validation covered lifecycle and failure paths plus representative page states.",
      outcome:
        "The implemented flow made independent progress and recovery easier to reason about. This case study intentionally makes no production-scale, revenue, or accuracy claim.",
      privacy:
        "The workflow keeps auction and customer information scoped to the review task while making status and recovery actions clear.",
      future:
        "Extend representative failure testing and evaluate reviewer-facing explanations without exposing source-specific rules.",
    },
  },
  {
    slug: "document-authenticity-detection",
    title: "Document Authenticity Detection System",
    eyebrow: "Assistive signals for careful human review",
    internshipProject: true,
    status: "Implementation-stage document analysis system",
    technologies: [
      "Python",
      "Secure file processing",
      "Multimodal AI analysis",
      "Structured validation",
      "Automated tests",
    ],
    summary:
      "An AI-assisted document integrity system that analyzes uploaded files for signs of digital manipulation, content inconsistencies, or AI-generated artifacts while keeping final judgment with a reviewer.",
    process:
      "Designed the upload, status, and result contract; enforced strict file validation; routed pages through multimodal AI analysis; and converted model output into structured, reviewer-safe findings.",
    outcome:
      "Established a test-validated backend workflow with deterministic scoring, private artifact handling, bounded model-repair behavior, and clear escalation states.",
    learning:
      "Responsible AI features depend on model design, evidence grounding, deterministic validation, privacy controls, and careful product language together.",
    story: {
      problem:
        "Reviewers need help spotting suspicious patterns in uploaded documents, but AI output cannot prove that a document is genuine or fake.",
      users:
        "Document reviewers assessing uploaded files for possible manipulation indicators.",
      why:
        "False certainty can harm people and decisions. The system therefore needed to surface useful signals without presenting an automated verdict as fact.",
      responsibilities: [
        "Designed the authenticated multipart API, scan lifecycle, and reviewer-facing result contract.",
        "Implemented strict file validation for PDFs and common image formats using extension, MIME, and magic-byte checks.",
        "Integrated multimodal AI analysis for rendered document pages and bounded supplemental PDF text.",
        "Converted AI candidates into validated structured findings with deterministic backend scoring and escalation rules.",
        "Contributed private storage handling, temporary-file cleanup, preview access controls, and repeat-safe result delivery.",
      ],
      contributions: [
        "Single-document intake and validation",
        "Asynchronous scan lifecycle",
        "Multimodal AI document analysis",
        "Deterministic risk scoring and escalation",
        "Private storage, preview, and cleanup safeguards",
        "Structured outputs and bounded model-failure handling",
      ],
      research:
        "I investigated manipulation indicators, model-output failure modes, file-format ambiguity, reviewer needs, and the privacy consequences of retaining original documents and generated previews.",
      approach:
        "The system validates one uploaded file, stores it privately, renders analyzable pages, sends page evidence to a multimodal model, validates the AI response against a strict schema, then derives risk scores and reviewer actions in backend code before persisting the result.",
      decisions:
        "The central trade-off was usefulness versus certainty. AI is the core analysis engine, but backend validation, deterministic scoring, and conservative language prevent the model from becoming an unchecked binary judge.",
      challenge:
        "Document formats and model responses can be inconsistent. The workflow added bounded input handling, page coverage checks, schema validation, a limited repair pass for invalid model output, repeat-safe result delivery, and cleanup on both success and failure.",
      testing:
        "Regression coverage exists for scoring, schema validation, model-adapter behavior, processor completion, database projection, and failure handling. The case study does not claim production accuracy because labeled-data calibration and full staging validation were still pending.",
      outcome:
        "The core scan workflow and reviewer-oriented result contract were implemented and verified at the application level.",
      privacy:
        "Uploaded documents may contain personal data, so the workflow emphasizes controlled access, cleanup, and human review.",
      future:
        "Complete representative-data calibration, end-to-end validation, reviewer usability testing, retention review, and clear escalation guidance for uncertain findings.",
    },
  },
  {
    slug: "legal-record-verification",
    title: "Legal Record Verification Workflow",
    eyebrow: "Evidence aggregation with identity safeguards",
    internshipProject: true,
    status: "Iterated professional workflow",
    technologies: [
      "Python",
      "REST APIs",
      "Asynchronous orchestration",
      "LLM identity matching",
      "Browser automation",
    ],
    summary:
      "An AI-assisted legal record verification workflow that orchestrates checks across several public information sources, normalizes inconsistent evidence, and helps reviewers distinguish strong identity matches from ambiguous ones.",
    process:
      "Built provider orchestration and status aggregation, improved browser-based recovery for dynamic sources, and added LLM-first identity matching with conservative fallback safeguards.",
    outcome:
      "Created a documented verification flow with clearer provenance, safer identity confidence, graceful partial results, and more diagnosable source failures.",
    learning:
      "AI can improve reviewer triage, but public-record workflows still need provenance, conservative confidence labels, and visible human-review paths.",
    story: {
      problem:
        "Relevant public legal records are spread across sources with different formats, availability, and search behavior. Matching by name alone can also produce harmful false positives.",
      users:
        "Reviewers who compare legal-record evidence across multiple public sources and need clear match confidence and source status.",
      why:
        "Reviewers need consistent evidence and clear uncertainty. Silent source failures or weak identity matches can make an incomplete result look more conclusive than it is.",
      responsibilities: [
        "Contributed orchestration across SIPP, Hukum Online, and Putusan MA child-provider checks.",
        "Implemented and documented parent/child job lifecycle, status aggregation, and partial-failure recovery.",
        "Improved robustness for dynamic pages, access challenges, authenticated sessions, OTP handling, and document retrieval.",
        "Added LLM-first identity matching, redacted-party handling, fuzzy fallback metadata, and exact-match safeguards.",
        "Normalized result presentation while keeping source provenance visible.",
      ],
      contributions: [
        "Independent source checks and parent aggregation",
        "LLM identity scoring with conservative fallback",
        "Dynamic-page, session, and document-retrieval resilience",
        "Case-number follow-up routing across sources",
        "Clear terminal status and partial-failure behavior",
        "Operational notes and repeatable debugging guidance",
      ],
      research:
        "I studied how several public sources structure searches, case numbers, result pages, access challenges, authenticated downloads, and evidence files. I also examined ambiguous-name and redacted-party scenarios before defining confidence behavior.",
      approach:
        "A legal_check request creates a parent job and independent child jobs for selected sources. Each child normalizes status and evidence, AI-assisted identity scoring adds confidence metadata where appropriate, and the parent aggregates results without treating missing data as proof of absence.",
      decisions:
        "The workflow keeps source-specific failures visible and uses conservative AI/fallback matching. This can leave more items for human review, but it reduces the risk of presenting a weak identity match as certain.",
      challenge:
        "Dynamic pages, access gates, expired sessions, inconsistent formats, and same-name records created reliability and false-match risks. The solution combined resilient navigation, session recovery, LLM confidence scoring, exact-match checks, and graceful partial results.",
      testing:
        "Validation included targeted smoke checks, failure paths, and repeated investigation of source-specific edge cases.",
      outcome:
        "The resulting workflow became more diagnosable and cautious about identity. The case study does not claim legal completeness, production coverage, or automated legal judgment.",
      privacy:
        "Because public legal records can contain personal information, the workflow keeps provenance and uncertainty visible and supports human review.",
      future:
        "Confirm the reviewer audience, expand representative validation, formalize data-minimization and retention checks, and test how uncertainty explanations affect reviewer decisions.",
    },
  },
  {
    slug: "stuggy",
    title: "Stuggy",
    eyebrow: "A study companion built through team integration",
    internshipProject: false,
    year: "2025",
    role: "Mobile app contributor",
    context: "Group project · multiple repository contributors",
    status: "Functional prototype",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Expo Router",
      "Supabase",
    ],
    summary:
      "A mobile study companion that brings planning, a Pomodoro timer, forum discussion, and score tracking into one student-focused experience.",
    process:
      "Worked from a shared Figma direction, integrated multiple feature branches, connected UI flows to shared data, and iterated on mobile navigation and stability.",
    outcome:
      "Delivered an end-to-end team prototype spanning authentication, planning, focus, discussion, and progress views; no adoption metric is claimed.",
    learning:
      "Cross-feature integration, dependency management, and clearly owned interfaces are essential when several people build one mobile product in parallel.",
    github: null,
    sourceNote:
      "Source link is temporarily withheld from this portfolio build pending credential cleanup in the public repository.",
    story: {
      problem:
        "Students often split schedules, focus timers, course scores, and peer discussion across separate tools, increasing friction when they try to plan and study consistently.",
      users:
        "Students who want one lightweight mobile space for planning tasks, focusing, reviewing progress, and asking peers for help.",
      why:
        "A connected workflow can reduce context switching and make the next useful study action easier to see.",
      responsibilities: [
        "Integrated the home dashboard and its upcoming-task, score, and discussion summaries.",
        "Implemented and iterated forum posting, editing, and deletion flows.",
        "Contributed score/statistics views and chart-package changes.",
        "Worked on login/sign-up screens and shared data connections.",
        "Resolved navigation, crash, Pomodoro, calendar, and dependency issues during integration.",
      ],
      contributions: [
        "Home dashboard integration",
        "Forum data and editing flows",
        "Score tracking and visualization",
        "Authentication screens",
        "Mobile stability and navigation fixes",
      ],
      research:
        "The team used a shared Figma prototype to align the study-planning journey and visual direction. Repository evidence does not identify ownership of individual design frames, so no personal design-ownership claim is made.",
      approach:
        "The Expo Router app organizes planning, focus, progress, and discussion as connected routes with shared navigation and data utilities. Iteration focused on getting separate contributions to behave as one coherent mobile flow.",
      decisions:
        "Using Expo accelerated cross-platform development, while a shared backend reduced setup time for authentication and data. Both choices increased the need for careful environment handling and integration testing.",
      challenge:
        "Parallel feature work produced navigation, package, rendering, and merge issues. Repeated branch integration, targeted UI fixes, and dependency changes stabilized the prototype.",
      testing:
        "Repository history shows repeated manual bug fixing and device-oriented UI iteration. No automated test suite or formal usability study is present, so the portfolio does not claim either.",
      outcome:
        "The group produced a connected prototype with the core study-planning, Pomodoro, forum, and score features visible in one app.",
      privacy:
        "Authentication and forum content require responsible access rules and environment-managed connection values. Interface examples avoid real account and forum content.",
      future:
        "Move all connection values to environment variables, add automated tests, validate accessibility and usability with students, and strengthen offline/error states.",
    },
  },
  {
    slug: "cars-identifier",
    title: "CarsIdentifier — Vehicle Recognition System",
    eyebrow: "An image classifier made usable through the web",
    internshipProject: false,
    year: "2025",
    role: "Machine learning & web developer",
    context: "Individual project · one repository contributor",
    status: "Working technical demo",
    technologies: ["Python", "PyTorch", "ResNet-50", "Flask", "JavaScript"],
    summary:
      "A Flask web demo that accepts a vehicle image and returns the label predicted by a ResNet-50-based classifier over the repository's 196-label vehicle list.",
    process:
      "Connected image preprocessing and model inference to an accessible upload interface, then documented the fixed-class limitation instead of treating every prediction as universally reliable.",
    outcome:
      "Turned a model checkpoint into an end-to-end upload-and-result experience. No accuracy metric is claimed because the repository contains no evaluation report.",
    learning:
      "A usable ML demo needs transparent scope, careful input handling, and uncertainty communication—not just a model that returns a label.",
    github: "https://github.com/Ripupz/vehicle-recognition",
    story: {
      problem:
        "A trained image classifier is difficult for non-technical users to evaluate without a simple way to submit an image and understand the returned label.",
      users:
        "Learners and developers exploring vehicle-image classification through a small web interface.",
      why:
        "Connecting inference to a visible interaction makes model behavior and limitations easier to inspect than a notebook-only demonstration.",
      responsibilities: [
        "Built the Flask application and prediction endpoint.",
        "Connected the ResNet-50-based model to a public 196-label mapping.",
        "Implemented image preprocessing and CPU inference.",
        "Created the drag-and-drop upload, preview, loading, and result interface.",
        "Documented the fixed-class limitation in the repository.",
      ],
      contributions: [
        "Model loading and preprocessing",
        "Flask inference endpoint",
        "196-label output mapping",
        "Accessible upload interaction",
        "Temporary-file cleanup after inference",
      ],
      research:
        "The project explored transfer-learning architecture integration and the practical steps needed to serve image classification through a lightweight Python web application.",
      approach:
        "The browser sends an uploaded image to Flask. The server resizes and normalizes it, runs the ResNet-50-based classifier, maps the highest-scoring output to one of 196 labels, and returns the label to the interface.",
      decisions:
        "Flask kept the serving layer small and understandable. Returning only the top label simplified the demo, but it also hides uncertainty and cannot reject an image outside the known label set.",
      challenge:
        "The model must use the same preprocessing and label order as training. The implementation centralizes both, while the interface validates that the selected file is an image.",
      testing:
        "The repository provides a manual upload flow but no automated test suite, held-out evaluation, confusion matrix, or accuracy report. The case study therefore makes no performance claim.",
      outcome:
        "The project demonstrates the complete path from browser upload to model inference and a readable result, while explicitly limiting the claim to known labels.",
      privacy:
        "Uploaded images are processed for inference and removed from temporary storage in the demo. It is not suitable for surveillance, identity decisions, or safety-critical vehicle identification.",
      future:
        "Add confidence display and open-set rejection, document dataset provenance and evaluation, sanitize filenames, avoid debug mode, and add automated API and interface tests.",
    },
  },
];

export function getProjects(profile) {
  const meta = internshipMeta(profile);

  return projectDefinitions.map((project, index) => ({
    ...project,
    order: index + 1,
    publication: project.internshipProject
      ? "Portfolio case study · Veriflo project at Moladin"
      : project.github || "Case study",
    ...(project.internshipProject ? meta : {}),
  }));
}

export function getProject(profile, slug) {
  return getProjects(profile).find((project) => project.slug === slug);
}

export function getProjectSlugs() {
  return projectDefinitions.map((project) => project.slug);
}
