"use client";

import { motion } from "framer-motion";

export default function Contact({ profile }) {
  const links = [
    profile.email ? { label: "Email", href: `mailto:${profile.email}` } : null,
    profile.linkedinUrl ? { label: "LinkedIn", href: profile.linkedinUrl } : null,
    profile.githubUrl ? { label: "GitHub", href: profile.githubUrl } : null,
    profile.instagramUrl ? { label: "Instagram", href: profile.instagramUrl } : null,
  ].filter(Boolean);

  return (
    <footer id="contact" className="contact-footer scroll-mt-20 overflow-hidden px-5 py-20 sm:px-[8%]" aria-labelledby="contact-title">
      <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.4 }} className="mx-auto max-w-4xl text-center">
        <p className="mb-2 text-lg font-Ovo">Get in touch</p>
        <h2 id="contact-title" className="text-4xl font-Ovo sm:text-5xl">
          Let&apos;s talk about thoughtful technology
        </h2>
        <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-700 font-Ovo">
          Contact details are supplied through deployment variables and
          are intentionally omitted when they have not been configured.
        </p>

        {links.length ? (
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} target={link.href.startsWith("mailto:") ? undefined : "_blank"} rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"} className="contact-link inline-flex rounded-full border px-5 py-2.5 font-semibold">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-8 text-sm font-semibold text-slate-700">
            Contact channels are not configured in the local environment yet.
          </p>
        )}
      </motion.div>

      <div className="mx-auto mt-16 flex max-w-7xl flex-col justify-between gap-3 border-t border-slate-300 pt-7 text-sm text-slate-600 sm:flex-row">
        <span>{profile.fullName ? `${profile.fullName} ©` : "Portfolio"}</span>
        <span>Built with care, evidence, and responsible engineering.</span>
      </div>
    </footer>
  );
}
