# Legal Record Verification Workflow

- Year: loaded from `INTERNSHIP_YEAR`; confirmation required
- Duration: confirmation required
- Role: loaded from `INTERNSHIP_ROLE`; confirmation required
- Context: Moladin engineering internship; Veriflo project
- Public product: [Veriflo](https://veriflo.co.id/)
- Publication: Portfolio case study; public product website available

## Problem and intended users

Public legal information is distributed across sources with inconsistent formats, availability, access patterns, and evidence files. Name-only matching also creates a false-positive risk for reviewers comparing evidence across several sources.

## Why the problem mattered

Reviewers need visible provenance, confidence, and uncertainty. An unavailable source or ambiguous identity match must not appear more conclusive than the evidence supports.

## Responsibilities and contributed components

- Contributed orchestration across SIPP, Hukum Online, and Putusan MA child-provider checks
- Implemented and documented parent/child job lifecycle, status aggregation, and partial-failure recovery
- Improved robustness for dynamic pages, access challenges, authenticated sessions, OTP handling, and document retrieval
- Added LLM-first identity matching, redacted-party handling, fuzzy fallback metadata, and exact-match safeguards
- Normalized result presentation while preserving source provenance

## Research and investigation

Studied how several public sources structure searches, case numbers, result pages, access challenges, authenticated downloads, and evidence files. Investigated ambiguous-name and redacted-party scenarios before defining confidence behavior.

## High-level technical approach

A legal_check request creates a parent job and independent child jobs for selected sources. Each child normalizes status and evidence, AI-assisted identity scoring adds confidence metadata where appropriate, and the parent aggregates results without treating missing data as proof of absence.

## Technologies

Python, REST APIs, asynchronous orchestration, LLM identity matching, browser automation, session recovery, and automated validation.

## Decisions and trade-offs

Keeping source failures visible and using conservative AI/fallback matching leaves more work for human review, but reduces the risk of presenting a weak identity match as certain.

## Challenge and solution

Dynamic pages, access gates, expired sessions, inconsistent formats, and same-name records were addressed through resilient navigation, session recovery, LLM confidence scoring, exact-match checks, and graceful partial results.

## Testing and outcome

Work included targeted smoke checks, failure-path verification, and repeated source-edge-case investigation.

## Privacy, security, and ethics

Because public legal records can contain personal information, the workflow keeps provenance and uncertainty visible and supports human review rather than automated legal judgment.

## Learning and future improvements

AI can improve reviewer triage, but reliable verification still requires provenance, conservative identity handling, and graceful degradation. Future work includes representative validation, data-minimization and retention review, clearer uncertainty explanations, and confirmation of the exact reviewer audience.
