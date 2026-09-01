const clean = (value) => (typeof value === "string" ? value.trim() : "");

export function getProfile() {
  const fullName = clean(process.env.PORTFOLIO_FULL_NAME);

  return {
    fullName,
    displayName: fullName || "Portfolio Owner",
    firstName: fullName ? fullName.split(/\s+/)[0] : "there",
    email: clean(process.env.PORTFOLIO_EMAIL),
    phone: clean(process.env.PORTFOLIO_PHONE),
    university: clean(process.env.PORTFOLIO_UNIVERSITY),
    status: clean(process.env.PORTFOLIO_STATUS),
    semester: clean(process.env.PORTFOLIO_SEMESTER),
    profileImageUrl: clean(process.env.PORTFOLIO_PROFILE_IMAGE_URL),
    aboutImageUrl: clean(process.env.PORTFOLIO_ABOUT_IMAGE_URL),
    linkedinUrl: clean(process.env.PORTFOLIO_LINKEDIN_URL),
    githubUrl: clean(process.env.PORTFOLIO_GITHUB_URL),
    instagramUrl: clean(process.env.PORTFOLIO_INSTAGRAM_URL),
    resumeUrl: clean(process.env.PORTFOLIO_RESUME_URL),
    internshipRole: clean(process.env.INTERNSHIP_ROLE),
    internshipYear: clean(process.env.INTERNSHIP_YEAR),
    // Intentionally not rendered. A company name requires separate publication approval.
    internshipCompany: clean(process.env.INTERNSHIP_COMPANY),
    location: clean(process.env.PORTFOLIO_LOCATION) || "JAKARTA, ID",
  };
}

export function getStudentLine(profile) {
  return [profile.university, profile.status, profile.semester]
    .filter(Boolean)
    .join(" · ");
}

export function getContactLine(profile) {
  return [profile.email, profile.phone].filter(Boolean).join(" · ");
}
