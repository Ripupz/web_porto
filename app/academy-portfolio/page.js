import ProjectVisual from "@/app/components/ProjectVisual";
import { getProjects } from "@/app/data/projects";
import { getContactLine, getProfile, getStudentLine } from "@/app/lib/profile";

export const dynamic = "force-dynamic";

function PdfField({ label, children }) {
  return (
    <div className="pdf-field">
      <dt>{label}</dt>
      <dd>{children}</dd>
    </div>
  );
}

function ShortList({ items, limit = 4 }) {
  return <ul>{items.slice(0, limit).map((item) => <li key={item}>{item}</li>)}</ul>;
}

export default function AcademyPortfolioPage() {
  const profile = getProfile();
  const projects = getProjects(profile);
  const owner = profile.fullName || "[Add PORTFOLIO_FULL_NAME to .env]";
  const student = getStudentLine(profile) || "[Add university, status, and semester to .env]";
  const contact = getContactLine(profile) || "[Add email and phone to .env]";

  return (
    <main className="academy-document">
      {projects.map((project) => (
        <section className="academy-page" key={project.slug}>
          <header className="academy-page__header">
            <div>
              <p>{project.eyebrow}</p>
              <h1>{project.title}</h1>
            </div>
            <span>Project {project.order} of 5</span>
          </header>

          <div className="academy-page__body">
            <div className="academy-page__meta">
              <dl>
                <PdfField label="Year accomplished">{project.year}</PdfField>
                <PdfField label="Role / position">{project.role}</PdfField>
                <PdfField label="Context">{project.context}</PdfField>
                <PdfField label="Publication">{project.publication}</PdfField>
                {project.publicProductUrl ? (
                  <PdfField label="Public product">
                    <a href={project.publicProductUrl}>{project.publicProductName} · veriflo.co.id</a>
                  </PdfField>
                ) : null}
                <PdfField label="Status">{project.status}</PdfField>
              </dl>
              <div className="pdf-tech">
                <strong>Tools & approach</strong>
                <ul>{project.technologies.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </div>

            <div className="academy-page__story">
              <section className="pdf-summary">
                <h2>Project description</h2>
                <p>{project.summary}</p>
              </section>

              <div className="pdf-story-columns">
                <section>
                  <h2>Problem & research</h2>
                  <p>{project.story.problem}</p>
                  <p>{project.story.research}</p>
                </section>
                <section>
                  <h2>Effective problem-solving</h2>
                  <p>{project.story.approach}</p>
                  <p>{project.story.challenge}</p>
                </section>
              </div>

              <ProjectVisual slug={project.slug} compact />

              <div className="pdf-bottom-grid">
                <section>
                  <h2>My contribution</h2>
                  <ShortList items={project.story.responsibilities} limit={3} />
                </section>
                <section>
                  <h2>Validation & outcome</h2>
                  <p>{project.story.testing}</p>
                  <p>{project.story.outcome}</p>
                </section>
                <section>
                  <h2>Learning & responsibility</h2>
                  <p>{project.learning}</p>
                  <p>{project.story.privacy}</p>
                </section>
              </div>
            </div>
          </div>

          <footer className="academy-page__footer">
            <div><strong>{owner}</strong><span>Your name</span></div>
            <div><strong>{student}</strong><span>University · status · semester</span></div>
            <div><strong>{contact}</strong><span>Contact information</span></div>
            <div><span>Portfolio Submission for</span><strong>Apple Developer Academy Indonesia</strong></div>
          </footer>
        </section>
      ))}
    </main>
  );
}
