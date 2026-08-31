# Legal Record Verification Workflow

- Year: loaded from `INTERNSHIP_YEAR`; confirmation required
- Duration: confirmation required
- Role: loaded from `INTERNSHIP_ROLE`; confirmation required
- Context: Moladin engineering internship; Veriflo project
- Public product: [Veriflo](https://veriflo.co.id/)
- Publication: Portfolio case study; public product website available

## Problem and intended users

Public legal information is distributed across sources with inconsistent formats and availability. Name-only matching also creates a false-positive risk for reviewers comparing evidence across several sources.

## Why the problem mattered

Reviewers need visible provenance and uncertainty. An unavailable source or ambiguous identity match must not appear more conclusive than the evidence supports.

## Responsibilities and contributed components

- Contributed orchestration across independent public-information sources
- Implemented and documented job lifecycle, status aggregation, and recovery
- Improved robustness for dynamic pages, access challenges, and document retrieval
- Added confidence-aware identity matching and exact-match safeguards
- Normalized result presentation while preserving source provenance

## Research and investigation

Studied how several public sources structure searches, case references, result pages, access challenges, and downloadable evidence. Investigated ambiguous-name and redacted-party scenarios before defining confidence behavior.

## High-level technical approach

Independent source checks run through a shared lifecycle, normalize status and evidence, attach conservative identity confidence, and aggregate into a reviewer view without treating missing data as proof of absence.

## Technologies

Python, REST APIs, asynchronous orchestration, confidence-based matching, and automated validation.

## Decisions and trade-offs

Keeping source failures visible and using conservative fallback matching leaves more work for human review, but reduces the risk of presenting a weak identity match as certain.

## Challenge and solution

Dynamic pages, access gates, inconsistent formats, and same-name records were addressed through resilient navigation, exact-match checks, confidence metadata, and graceful partial results.

## Testing and outcome

Work included targeted smoke checks, failure-path verification, and repeated source-edge-case investigation.

## Privacy, security, and ethics

Because public legal records can contain personal information, the workflow keeps provenance and uncertainty visible and supports human review rather than automated legal judgment.

## Learning and future improvements

Reliable verification requires provenance, conservative identity handling, and graceful degradation. Future work includes representative validation, data-minimization and retention review, clearer uncertainty explanations, and confirmation of the exact reviewer audience.
