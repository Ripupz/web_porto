"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import ProjectVisual from "./ProjectVisual";

export default function Work({ projects }) {
  const [terminalActive, setTerminalActive] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <section id="works" className="project-showcase scroll-mt-20 px-5 py-24 text-white sm:px-[8%]" aria-labelledby="work-title">
      <motion.div initial={false} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.15 }} className="mx-auto max-w-7xl">
        <motion.div
          className={`project-heading ${terminalActive ? "project-heading--active" : ""}`}
          initial={reduceMotion ? false : { opacity: 0.18, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <div className="project-ascii" aria-hidden="true">
            <span className="project-ascii__fragment project-ascii__fragment--one">{">_ ./portfolio --projects=5"}</span>
            <span className="project-ascii__fragment project-ascii__fragment--two">{"0101 0011 1010 // BUILD"}</span>
            <span className="project-ascii__fragment project-ascii__fragment--three">{"[ SYSTEM::READY ]"}</span>
            <span className="project-ascii__fragment project-ascii__fragment--four">{"{ learn(); build(); iterate(); }"}</span>
            <span className="project-ascii__fragment project-ascii__fragment--five">{"<five_projects />"}</span>
          </div>

          <div className="project-heading__content">
            <h2 id="work-title" className="text-center text-4xl font-Ovo sm:text-5xl">
              Five projects, one learning journey
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-center leading-7 text-slate-300 font-Ovo">
              Each case study makes my role, process, outcome, and learning visible,
              with links to public products and repositories where available.
            </p>
            <motion.button
              type="button"
              className={`project-terminal-line ${terminalActive ? "project-terminal-line--active" : ""}`}
              aria-pressed={terminalActive}
              aria-label={terminalActive ? "Set project archive to standby" : "Activate project archive animation"}
              onClick={() => setTerminalActive((active) => !active)}
              whileHover={reduceMotion ? undefined : { scale: 1.04 }}
              whileTap={reduceMotion ? undefined : { scale: 0.96 }}
            >
              <span aria-hidden="true">$</span>
              {terminalActive ? "project archive online" : "initialize project archive"}
              <i aria-hidden="true">{terminalActive ? "✓" : "•••"}</i>
            </motion.button>
          </div>
        </motion.div>

        <div className="project-grid mb-14 mt-10 grid grid-cols-1 gap-7 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              className="project-card min-w-0 overflow-hidden rounded-3xl border border-white/15 bg-white text-slate-900 shadow-2xl"
              initial={reduceMotion ? false : { opacity: 0.16, y: 42 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.62, delay: reduceMotion ? 0 : (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={reduceMotion ? undefined : { y: -8, scale: 1.006 }}
              whileTap={reduceMotion ? undefined : { scale: 0.985 }}
            >
              <ProjectVisual slug={project.slug} compact />
              <div className="p-6 sm:p-8">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                    {String(project.order).padStart(2, "0")} · {project.year}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">{project.title}</h3>
                <p className="mt-4 leading-7 text-slate-700">{project.summary}</p>

                <dl className="mt-6 grid grid-cols-1 gap-4 border-y border-slate-200 py-5 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="font-semibold text-slate-900">Role</dt>
                    <dd className="mt-1 text-slate-600">{project.role}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-slate-900">Context</dt>
                    <dd className="mt-1 text-slate-600">{project.context}</dd>
                  </div>
                </dl>

                <div className="mt-5 grid gap-4 text-sm sm:grid-cols-3">
                  <div>
                    <h4 className="font-semibold text-emerald-800">Process</h4>
                    <p className="mt-1 leading-6 text-slate-600">{project.process}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-800">Outcome</h4>
                    <p className="mt-1 leading-6 text-slate-600">{project.outcome}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-800">Learning</h4>
                    <p className="mt-1 leading-6 text-slate-600">{project.learning}</p>
                  </div>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
                  {project.technologies.map((technology) => (
                    <li key={technology} className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-900">
                      {technology}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link href={`/projects/${project.slug}`} className="project-action rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white">
                    Case Study
                  </Link>
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-action rounded-full border border-slate-400 px-5 py-2.5 text-sm font-semibold">
                      GitHub
                    </a>
                  ) : null}
                  {project.publicProductUrl ? (
                    <a
                      href={project.publicProductUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action rounded-full border border-slate-400 px-5 py-2.5 text-sm font-semibold"
                    >
                      {project.publicProductName}
                    </a>
                  ) : null}
                </div>
                {project.publicProductNote ? (
                  <p className="mt-3 text-xs leading-5 text-slate-500">{project.publicProductNote}</p>
                ) : null}
                {project.sourceNote ? <p className="mt-3 text-xs leading-5 text-slate-500">{project.sourceNote}</p> : null}
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
