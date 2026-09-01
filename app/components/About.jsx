"use client";

import { assets, toolsData } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About({ profile }) {
  const info = [
    {
      icon: assets.code_icon,
      title: "Build",
      description: "Python, JavaScript, TypeScript, Next.js, and mobile development",
    },
    {
      icon: assets.edu_icon,
      title: "Education",
      description: profile.university || "University information is set at build time",
    },
    {
      icon: assets.project_icon,
      title: "Approach",
      description: "Research the problem, make trade-offs explicit, test, and communicate limits",
    },
  ];

  return (
    <section id="about" className="overflow-hidden scroll-mt-24 px-5 py-20 sm:px-[8%] lg:px-[12%]" aria-labelledby="about-title">
      <p className="mb-2 text-center text-lg font-Ovo">Introduction</p>
      <h2 id="about-title" className="text-center text-4xl font-Ovo sm:text-5xl">
        About my work
      </h2>

      <div className="my-16 flex min-w-0 flex-col items-center gap-12 lg:flex-row lg:gap-20">
        <motion.div
          className="w-64 shrink-0 overflow-hidden rounded-3xl sm:w-80"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          {profile.aboutImageUrl ? (
            <Image
              src={profile.aboutImageUrl}
              alt="Portfolio owner working on a project"
              width={960}
              height={1088}
              unoptimized
              className="w-full rounded-3xl object-cover"
            />
          ) : (
            <div className="about-visual-placeholder" role="img" aria-label="Abstract illustration of a research-to-build process">
              <span>Research</span>
              <i>→</i>
              <span>Build</span>
              <i>→</i>
              <span>Learn</span>
            </div>
          )}
        </motion.div>

        <motion.div
          className="min-w-0 flex-1"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <p className="mb-8 max-w-3xl text-base leading-7 text-slate-700 font-Ovo sm:text-lg">
            I work across machine learning and product engineering, using tools
            such as Python, PyTorch, React Native, and Next.js. Beyond AI and
            data science, I care about clear interfaces, reliable state, privacy,
            and honest explanations of what a system can—and cannot—conclude.
          </p>

          <ul className="grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3">
            {info.map((item) => (
              <li key={item.title} className="rounded-2xl border border-slate-300 bg-white p-5 shadow-sm">
                <Image src={item.icon} alt="" className="mt-1 w-7" />
                <h3 className="my-3 font-semibold text-slate-800">{item.title}</h3>
                <p className="text-sm leading-6 text-slate-600">{item.description}</p>
              </li>
            ))}
          </ul>

          <h3 className="mb-4 mt-7 text-slate-700 font-Ovo">Tools I use</h3>
          <ul className="flex flex-wrap items-center gap-3 sm:gap-4">
            {toolsData.map((tool) => (
              <li className="flex aspect-square w-12 items-center justify-center rounded-xl border border-slate-300 bg-white sm:w-14" key={tool.label} title={tool.label}>
                <Image src={tool.image} alt={`${tool.label} logo`} className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
