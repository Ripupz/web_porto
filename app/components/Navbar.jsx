"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useState } from "react";

const navigation = [
  ["Home", "#"],
  ["About", "#about"],
  ["Projects", "#works"],
  ["Contact", "#contact"],
];

export default function Navbar({ profile }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed right-0 top-0 -z-10 w-11/12 -translate-y-[80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" priority />
      </div>

      <nav
        aria-label="Primary navigation"
        className={`fixed inset-x-0 top-0 z-50 flex min-w-0 items-center justify-between px-5 py-4 transition lg:px-8 xl:px-[8%] ${
          isScrolled ? "navbar-blur shadow-sm" : "navbar-no-blur"
        }`}
      >
        <a href="#" className="min-w-0 rounded-sm font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4">
          <span className="block max-w-44 truncate">
            {profile.fullName || "Portfolio"}
          </span>
        </a>

        <ul className="hidden items-center gap-6 rounded-full bg-white/80 px-10 py-3 shadow-sm md:flex lg:gap-8">
          {navigation.map(([label, href]) => (
            <li key={label}>
              <a className="font-Ovo hover:text-emerald-700" href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-3">
          {profile.linkedinUrl ? (
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-3 rounded-full border border-gray-500 px-6 py-2.5 lg:flex"
            >
              Connect
              <Image src={assets.arrow_icon} alt="" className="w-3" />
            </a>
          ) : null}

          <button
            type="button"
            className="rounded-md p-2 md:hidden"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <Image src={assets.menu_black} alt="" className="w-6" />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] bg-black/30 transition md:hidden ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={() => setIsMenuOpen(false)}
      />
      <aside
        id="mobile-menu"
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
        className={`fixed inset-y-0 right-0 z-[70] w-[min(19rem,88vw)] origin-right transform bg-rose-50 px-8 py-20 shadow-2xl transition duration-300 md:hidden ${
          isMenuOpen ? "visible scale-x-100 opacity-100" : "invisible scale-x-0 opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close navigation menu"
          className="absolute right-5 top-5 rounded-md p-2"
        >
          <Image src={assets.close_black} alt="" className="w-5" />
        </button>
        <ul className="flex flex-col gap-5">
          {navigation.map(([label, href]) => (
            <li key={label}>
              <a
                className="block rounded-md py-2 text-lg font-Ovo"
                onClick={() => setIsMenuOpen(false)}
                href={href}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
