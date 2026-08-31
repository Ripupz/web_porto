import ProjectVisual from "@/app/components/ProjectVisual";
import {
  CONFIDENTIAL_NOTICE,
  getProject,
  getProjectSlugs,
} from "@/app/data/projects";
import { getProfile } from "@/app/lib/profile";
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(getProfile(), slug);
  return project
    ? {
        title: `${project.title} · Case Study`,
        description: project.summary,
      }
    : {};
}

function StorySection({ title, children, className = "" }) {
  return (
    <section className={`case-section ${className}`}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const profile = getProfile();
  const project = getProject(profile, slug);

  if (!project) notFound();

  return (
    <main className="case-study-shell">
      <header className="case-study-nav">
        <Link href="/#works">← All projects</Link>
        <span>{profile.fullName || "Portfolio"}</span>
      </header>

      <article>
        <section className="case-hero">
          <div className="case-hero__copy">
            <p className="case-kicker">Project {project.order} of 5 · {project.eyebrow}</p>
            <h1>{project.title}</h1>
            <p className="case-summary">{project.summary}</p>

            {project.confidential ? (
              <div className="confidential-banner">{CONFIDENTIAL_NOTICE}</div>
            ) : null}

            <dl className="case-meta">
              <div><dt>Year</dt><dd>{project.year}</dd></div>
              <div><dt>Role</dt><dd>{project.role}</dd></div>
              <div><dt>Context</dt><dd>{project.context}</dd></div>
              <div><dt>Status</dt><dd>{project.status}</dd></div>
              <div className="case-meta__wide"><dt>Publication</dt><dd>{project.publication}</dd></div>
            </dl>

            <ul className="case-tags" aria-label="Technologies">
              {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>

            {project.github ? (
              <a className="case-primary-link" href={project.github} target="_blank" rel="noopener noreferrer">
                View public repository ↗
              </a>
            ) : null}
            {project.sourceNote ? <p className="case-source-note">{project.sourceNote}</p> : null}
          </div>
          <ProjectVisual slug={project.slug} />
        </section>

        <div className="case-story-grid">
          <StorySection title="Problem understanding">
            <p>{project.story.problem}</p>
            <h3>Intended users</h3>
            <p>{project.story.users}</p>
            <h3>Why it mattered</h3>
            <p>{project.story.why}</p>
          </StorySection>

          <StorySection title="My responsibilities">
            <ul>{project.story.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
          </StorySection>

          <StorySection title="Components I contributed">
            <ul>{project.story.contributions.map((item) => <li key={item}>{item}</li>)}</ul>
          </StorySection>

          <StorySection title="Research & investigation">
            <p>{project.story.research}</p>
          </StorySection>

          <StorySection title="Technical approach">
            <p>{project.story.approach}</p>
          </StorySection>

          <StorySection title="Decisions & trade-offs">
            <p>{project.story.decisions}</p>
          </StorySection>

          <StorySection title="Challenge & problem-solving">
            <p>{project.story.challenge}</p>
          </StorySection>

          <StorySection title="Testing & validation">
            <p>{project.story.testing}</p>
          </StorySection>

          <StorySection title="Safe outcome">
            <p>{project.story.outcome}</p>
          </StorySection>

          <StorySection title="Privacy, security & ethics">
            <p>{project.story.privacy}</p>
          </StorySection>

          <StorySection title="Learning">
            <p>{project.learning}</p>
          </StorySection>

          <StorySection title="Future improvements">
            <p>{project.story.future}</p>
          </StorySection>
        </div>
      </article>

      <footer className="case-footer">
        <Link href="/#works">Back to selected projects</Link>
        <span>No proprietary source code or real records are included.</span>
      </footer>
    </main>
  );
}
