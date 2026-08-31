# Document Authenticity Detection System

- Year: loaded from `INTERNSHIP_YEAR`; confirmation required
- Duration: confirmation required
- Role: loaded from `INTERNSHIP_ROLE`; confirmation required
- Context: Moladin engineering internship; Veriflo project
- Public product: [Veriflo](https://veriflo.co.id/)
- Publication: Portfolio case study; public product website available

## Problem and intended users

Document reviewers need assistive indications of digital manipulation or AI generation while retaining final judgment.

## Why the problem mattered

An automated observation cannot prove that a document is genuine or fake. Overconfident wording could lead to unfair or unsafe decisions.

## Responsibilities and contributed components

- Designed an incremental API and processing workflow for document analysis
- Implemented strict file intake and structured status/result behavior
- Contributed temporary-file handling, cleanup, and preview access controls
- Integrated vision-assisted observations behind a validated result contract
- Added verification for success, failure, and repeat-delivery behavior

## Research and investigation

Investigated manipulation indicators, model-output failure modes, ambiguous file formats, reviewer needs, and the privacy implications of retaining original files and generated previews.

## High-level technical approach

The system validates an uploaded file, processes it through a controlled workflow, converts analysis observations into a strict structured result, and presents evidence for human review rather than a binary verdict.

## Technologies

Python, secure file processing, vision-assisted analysis, structured validation, and automated tests.

## Decisions and trade-offs

Conservative language and traceable findings reduce false certainty. Strict contracts and cleanup add complexity but make failure handling safer and more diagnosable.

## Challenge and solution

Input formats and model responses can vary. Bounded intake, validated output structure, repeat-safe delivery, and cleanup on success and failure reduce that uncertainty.

## Testing and outcome

The reviewed notes support application-level automated workflow verification. Labeled-data calibration, reviewer validation, and end-to-end staging evidence were not confirmed complete, so the case study makes no accuracy or production claim.

## Privacy, security, and ethics

Uploaded documents may contain personal data, so the workflow emphasizes controlled access, cleanup, and human review.

## Learning and future improvements

Responsible AI depends on product language, evidence, privacy, and failure handling as much as model output. Future work includes representative-data calibration, reviewer usability testing, retention review, and end-to-end validation.
