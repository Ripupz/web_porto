"use client";

import { assets } from "@/assets/assets";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Header({ profile }) {
  const greeting = profile.fullName
    ? `Hi! I'm ${profile.fullName}`
    : "Hi! I build thoughtful digital products";

  return (
    <motion.section
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="mx-auto flex min-h-screen w-11/12 max-w-4xl flex-col items-center justify-center gap-5 py-28 text-center"
      aria-labelledby="hero-title"
    >
      {profile.profileImageUrl ? (
        <Image
          src={profile.profileImageUrl}
          alt="Portrait of the portfolio owner"
          width={1024}
          height={1024}
          unoptimized
          className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
          priority
        />
      ) : (
        <div className="hero-avatar-placeholder" aria-hidden="true">ML</div>
      )}
      <p className="text-center text-xl font-Ovo md:text-2xl">
        <span>{greeting}</span>{" "}
        <Image src={assets.hand_icon} alt="" className="inline-block w-6 align-middle" />
      </p>
      <h1 id="hero-title" className="max-w-4xl text-4xl leading-tight font-Ovo sm:text-6xl lg:text-[66px]">
        Building AI-driven products &amp; reliable software
      </h1>
      <p className="mx-auto max-w-2xl text-base leading-7 text-slate-700 font-Ovo sm:text-lg">
        I design and engineer intelligent systems—from computer vision and mobile tools to secure, privacy-first workflows.
      </p>
      <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row">
        <a href="#works" className="flex items-center gap-2 rounded-full bg-black px-8 py-3 text-white">
          Explore projects
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
        {profile.resumeUrl ? (
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-gray-500 px-8 py-3"
          >
            View résumé
            <Image src={assets.arrow_icon} alt="" className="w-3" />
          </a>
        ) : null}
      </div>
    </motion.section>
  );
}
