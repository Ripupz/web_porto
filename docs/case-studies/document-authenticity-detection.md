# Document Authenticity Detection System

- Year: loaded from `INTERNSHIP_YEAR`; confirmation required
- Duration: confirmation required
- Role: loaded from `INTERNSHIP_ROLE`; confirmation required
- Context: Moladin engineering internship; Veriflo project
- Public product: [Veriflo](https://veriflo.co.id/)
- Publication: Portfolio case study; public product website available

## Problem and intended users

Document reviewers need AI-assisted signals for digital manipulation, content inconsistencies, and AI-generated artifacts while retaining final judgment.

## Why the problem mattered

AI output cannot prove that a document is genuine or fake. Overconfident wording, unvalidated model responses, or unclear evidence could lead to unfair or unsafe decisions.

## Responsibilities and contributed components

- Designed the authenticated multipart API, scan lifecycle, and reviewer-facing result contract
- Implemented strict file validation for PDFs and common image formats using extension, MIME, and magic-byte checks
- Integrated multimodal AI analysis over rendered document pages and bounded supplemental PDF text
- Converted AI candidates into validated structured findings with deterministic backend scoring and escalation rules
- Contributed private storage handling, temporary-file cleanup, preview access controls, and repeat-safe result delivery

## Research and investigation

Investigated manipulation indicators, model-output failure modes, ambiguous file formats, reviewer needs, and the privacy implications of retaining original files and generated previews.

## High-level technical approach

The system validates one uploaded file, stores it privately, renders analyzable pages, sends page evidence to a multimodal AI model, validates the model response against a strict schema, then derives risk scores and reviewer actions in backend code before persisting the result.

## Technologies

Python, secure file processing, multimodal AI analysis, structured validation, deterministic scoring, private object storage, and automated tests.

## Decisions and trade-offs

AI is the main analysis engine, but backend validation, deterministic scoring, and conservative language keep it from becoming an unchecked binary judge. Strict contracts and cleanup add complexity but make failures safer and more diagnosable.

## Challenge and solution

Input formats and model responses can vary. Bounded intake, page coverage checks, schema validation, a limited repair pass for invalid model output, repeat-safe delivery, and cleanup on success and failure reduce that uncertainty.

## Testing and outcome

Regression coverage exists for scoring, schema validation, model-adapter behavior, processor completion, database projection, and failure handling. Labeled-data calibration, reviewer validation, and full staging evidence were still pending, so the case study makes no production-accuracy claim.

## Privacy, security, and ethics

Uploaded documents may contain personal data, so the workflow emphasizes controlled access, cleanup, and human review.

## Learning and future improvements

Responsible AI depends on model design, evidence grounding, deterministic validation, privacy controls, and careful product language together. Future work includes representative-data calibration, reviewer usability testing, retention review, and end-to-end validation.
