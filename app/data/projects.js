export const CONFIDENTIAL_NOTICE =
  "Confidential Internship Project — details and visuals have been anonymized or reconstructed to protect proprietary information.";

export const CONFIDENTIAL_PUBLICATION =
  "Not public — confidential internship project";

const confidentialMeta = (profile) => ({
  year: profile.internshipYear || "Year pending confirmation",
  role: profile.internshipRole || "Internship role pending confirmation",
  context: "Confidential work assignment · team project",
});

const projectDefinitions = [
  {
    slug: "digital-auction-platform",
    title: "Digital Auction Platform",
    eyebrow: "Reliable, traceable review workflows",
    confidential: true,
    status: "Implemented workflow · sanitized case study",
    technologies: [
      "Python",
      "REST APIs",
      "Asynchronous processing",
      "Automated validation",
    ],
    summary:
      "A confidential workflow that helps reviewers submit multiple auction-related checks and follow each item from request to an understandable result without losing successful work when another item fails.",
    process:
      "Mapped the submission-to-result lifecycle, separated processing state from result meaning, and designed independent task handling with targeted retries.",
    outcome:
      "Produced a more traceable, fault-isolated flow with clearer failure and no-result behavior. No confidential usage or business metrics are claimed.",
    learning:
      "Reliability improves when each request has explicit state, evidence, and recovery behavior instead of being hidden inside one all-or-nothing batch.",
    story: {
      problem:
        "A review interface can receive several records at once, while each record may complete, return no matching result, or fail independently. Treating the entire submission as one transaction makes partial progress difficult to understand and recover.",
      users:
        "The notes describe an internal review workflow. The exact user group and job title require confirmation before publication.",
      why:
        "Review work needs an auditable path from input to result. Ambiguous status or discarded partial successes can create duplicate effort and weaken confidence in the output.",
      responsibilities: [
        "Mapped and documented the master-log and result lifecycle.",
        "Contributed independent multi-item submission and progress behavior.",
        "Separated processing failures from valid no-result outcomes.",
        "Added defensive validation for unreadable or misleading source pages.",
        "Defined retry and recovery behavior without publishing real auction data.",
      ],
      contributions: [
        "Per-item status and result tracking",
        "Fault-isolated multi-item submission",
        "Duplicate-prevention and targeted retry considerations",
        "Layered source and context validation",
        "Sanitized operational documentation",
      ],
      research:
        "I traced the complete request, status, and result path; reviewed how partial failures reached the interface; and investigated cases where a technically reachable page did not contain a valid listing.",
      approach:
        "Each submitted item becomes an independently tracked unit. The workflow records progress separately from the meaning of the returned result, validates the source at several layers, and exposes enough state for the interface to retry only what needs recovery.",
      decisions:
        "The design favors fault isolation over all-or-nothing batching. That preserves successful work but requires deliberate duplicate prevention, progress aggregation, and clear retry rules in the interface.",
      challenge:
        "External pages can be reachable yet empty, misleading, or no longer valid. The solution combined basic reachability checks, readable-content checks, context checks, and conservative result wording.",
      testing:
        "Validation covered lifecycle and failure paths plus representative page states. Exact environments, records, endpoints, and test counts remain confidential.",
      outcome:
        "The implemented flow made independent progress and recovery easier to reason about. This case study intentionally makes no production-scale, revenue, or accuracy claim.",
      privacy:
        "No real auction record, certificate, customer, source URL, internal rule, or company identifier is used. The visual is a reconstruction with dummy labels only.",
      future:
        "Confirm the intended-user wording, extend representative failure testing, and evaluate reviewer-facing explanations without exposing source-specific rules.",
    },
  },
  {
    slug: "document-authenticity-detection",
    title: "Document Authenticity Detection System",
    eyebrow: "Assistive signals for careful human review",
    confidential: true,
    status: "Implementation-stage system · no production claim",
    technologies: [
      "Python",
      "Private file processing",
      "Vision-assisted analysis",
      "Automated tests",
    ],
    summary:
      "A confidential document-review system that surfaces indications of digital manipulation or AI generation while keeping the final judgment with a human reviewer.",
    process:
      "Designed the intake and status contract, strict file checks, private processing lifecycle, structured findings, cleanup behavior, and reviewer-safe wording.",
    outcome:
      "Established and test-validated the core backend workflow. End-to-end staging calibration and user validation were still pending in the reviewed notes.",
    learning:
      "For uncertain AI signals, product language, traceable evidence, privacy controls, and failure handling matter as much as the model response.",
    story: {
      problem:
        "Reviewers need help spotting potential manipulation in uploaded documents, but a model output cannot prove that a document is genuine or fake.",
      users:
        "The notes describe a private reviewer workflow. The exact reviewer role and document category require confirmation before publication.",
      why:
        "False certainty can harm people and decisions. The system therefore needed to surface useful signals without presenting an automated verdict as fact.",
      responsibilities: [
        "Designed an incremental API and processing workflow for a private document scan.",
        "Implemented strict file intake and structured status/result behavior.",
        "Contributed private artifact handling, temporary-file cleanup, and preview access patterns.",
        "Integrated vision-assisted analysis behind a validated output contract.",
        "Added automated verification for success, failure, and repeat-delivery paths.",
      ],
      contributions: [
        "Single-document intake and validation",
        "Asynchronous scan lifecycle",
        "Reviewer-oriented findings and explanations",
        "Private preview and cleanup safeguards",
        "Structured outputs and resilient error states",
      ],
      research:
        "I investigated manipulation indicators, model-output failure modes, file-format ambiguity, reviewer needs, and the privacy consequences of retaining original documents and generated previews.",
      approach:
        "The system validates the file, processes it in a private workflow, converts model observations into a strict structured result, and presents indications and evidence for human review rather than a binary truth claim.",
      decisions:
        "The central trade-off was usefulness versus certainty. Conservative language and structured evidence reduce overclaiming, while strict contracts and cleanup add engineering work but make failures safer and more diagnosable.",
      challenge:
        "Document formats and model responses can be inconsistent. The workflow added bounded input handling, validated output structure, repeat-safe result delivery, and cleanup on both success and failure.",
      testing:
        "The reviewed notes record automated workflow verification. A production-quality accuracy claim is not made because labeled-data calibration and end-to-end staging validation were not evidenced as complete.",
      outcome:
        "The core private scan workflow and reviewer-oriented result contract were implemented and verified at the application level. No confidential metric or deployment claim is included.",
      privacy:
        "Uploaded documents may contain sensitive personal data. The public case study uses no real document, identity, prompt, storage path, endpoint, or model configuration, and explicitly preserves human review.",
      future:
        "Complete representative-data calibration, end-to-end validation, reviewer usability testing, retention review, and clear escalation guidance for uncertain findings.",
    },
  },
  {
    slug: "legal-record-verification",
    title: "Legal Record Verification Workflow",
    eyebrow: "Evidence aggregation with identity safeguards",
    confidential: true,
    status: "Iterated professional workflow · sanitized case study",
    technologies: [
      "Python",
      "REST APIs",
      "Asynchronous orchestration",
      "Confidence-based matching",
    ],
    summary:
      "A confidential workflow that coordinates checks across multiple public legal-information sources, normalizes inconsistent responses, and helps reviewers distinguish stronger identity matches from ambiguous ones.",
    process:
      "Investigated source behavior, built provider orchestration and status aggregation, improved recovery from dynamic-page failures, and added conservative identity-matching safeguards.",
    outcome:
      "Created a documented, resilient verification flow with clearer provenance and failure behavior. No client, case, document, or confidential performance metric is disclosed.",
    learning:
      "Publicly available data is still sensitive; reliable verification requires provenance, conservative matching, and a visible path for human review.",
    story: {
      problem:
        "Relevant public legal records are spread across sources with different formats, availability, and search behavior. Matching by name alone can also produce harmful false positives.",
      users:
        "The workflow supports internal review work. The exact user group, decision context, and legal interpretation boundaries require confirmation before publication.",
      why:
        "Reviewers need consistent evidence and clear uncertainty. Silent source failures or weak identity matches can make an incomplete result look more conclusive than it is.",
      responsibilities: [
        "Contributed orchestration across multiple independent information sources.",
        "Implemented and documented job lifecycle, status aggregation, and failure recovery.",
        "Improved robustness for dynamic pages, access challenges, and document retrieval.",
        "Added confidence-aware identity matching and exact-match safeguards.",
        "Normalized result presentation while keeping source provenance visible.",
      ],
      contributions: [
        "Independent source checks and parent aggregation",
        "Conservative identity-confidence metadata",
        "Dynamic-page and document-retrieval resilience",
        "Clear terminal status and partial-failure behavior",
        "Operational notes and repeatable debugging guidance",
      ],
      research:
        "I studied how several public sources structure searches, case references, result pages, access challenges, and downloadable evidence. I also examined ambiguous-name and redacted-party scenarios before defining confidence behavior.",
      approach:
        "Independent source checks run through a shared lifecycle, normalize their status and evidence, attach conservative identity confidence, and aggregate into a reviewer-facing view without treating missing data as proof of absence.",
      decisions:
        "The workflow keeps source-specific failures visible and uses conservative fallback matching. This can leave more items for human review, but it reduces the risk of presenting a weak identity match as certain.",
      challenge:
        "Dynamic pages, access gates, inconsistent formats, and same-name records created reliability and false-match risks. The solution combined resilient navigation, exact-match checks, confidence metadata, and graceful partial results.",
      testing:
        "Work included targeted smoke checks, failure-path verification, and repeated investigation of source-specific edge cases. Real case data, access details, and test metrics are excluded.",
      outcome:
        "The resulting workflow became more diagnosable and cautious about identity. The case study does not claim legal completeness, production coverage, or automated legal judgment.",
      privacy:
        "Legal records can contain personal and sensitive information even when publicly accessible. No real name, case, document, court record, client, or internal decision rule appears in this portfolio.",
      future:
        "Confirm the reviewer audience, expand representative validation, formalize data-minimization and retention checks, and test how uncertainty explanations affect reviewer decisions.",
    },
  },
  {
    slug: "stuggy",
    title: "Stuggy",
    eyebrow: "A study companion built through team integration",
    confidential: false,
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
        "Authentication and forum content require responsible access rules and environment-managed connection values. Dummy names and tasks are used in all reconstructed visuals.",
      future:
        "Move all connection values to environment variables, add automated tests, validate accessibility and usability with students, and strengthen offline/error states.",
    },
  },
  {
    slug: "cars-identifier",
    title: "CarsIdentifier — Vehicle Recognition System",
    eyebrow: "An image classifier made usable through the web",
    confidential: false,
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
  const meta = confidentialMeta(profile);

  return projectDefinitions.map((project, index) => ({
    ...project,
    order: index + 1,
    publication: project.confidential
      ? CONFIDENTIAL_PUBLICATION
      : project.github || "Case study",
    ...(project.confidential ? meta : {}),
  }));
}

export function getProject(profile, slug) {
  return getProjects(profile).find((project) => project.slug === slug);
}

export function getProjectSlugs() {
  return projectDefinitions.map((project) => project.slug);
}
