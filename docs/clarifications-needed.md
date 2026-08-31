# Clarifications Needed Before Final PDF or Publication

Enter personal answers only in the ignored local `.env`. Do not add them to this file, an issue, a commit, or chat.

## Required `.env` fields

- `PORTFOLIO_FULL_NAME`
- `PORTFOLIO_EMAIL`
- `PORTFOLIO_PHONE`
- `PORTFOLIO_UNIVERSITY`
- `PORTFOLIO_STATUS`
- `PORTFOLIO_SEMESTER`
- `INTERNSHIP_ROLE`
- `INTERNSHIP_YEAR`

Optional portrait URLs can be supplied through `PORTFOLIO_PROFILE_IMAGE_URL` and `PORTFOLIO_ABOUT_IMAGE_URL`. Do not recommit personal image files.

Keep `INTERNSHIP_COMPANY` blank. The approved Moladin internship and Veriflo project attribution is supplied by the public project data instead.

The portfolio owner clarified on 2026-08-31 that Moladin is the internship company and Veriflo is the project name. The owner approved displaying that attribution on all three internship projects and linking `https://veriflo.co.id/`, while leaving `INTERNSHIP_COMPANY` unchanged.

## Project facts that need confirmation

- Internship duration for each of the three internship projects
- Whether one internship role title applies to all three projects
- Exact intended-user wording for each internship project
- Team context beyond “team project,” if a safe description is desired
- Which Stuggy screens or Figma frames the applicant personally designed
- How Stuggy was manually tested and whether any user feedback exists
- CarsIdentifier dataset provenance, training split, evaluation method, and any verified metric
- Whether the CarsIdentifier repository has a public demo URL

## Security action before restoring the Stuggy GitHub link

Remove hard-coded connection values from the public repository, rotate them where necessary, commit a safe environment-variable implementation, and verify that public history does not retain an active credential.
