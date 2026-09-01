"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useState } from "react";

const navigation = [
  ["Work", "#works"],
  ["About", "#about"],
];

export default function Navbar({ profile }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
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

  const locationText = profile?.location || "JAKARTA, ID";
  const avatarSrc = profile?.profileImageUrl || "/profile-img2.png";

  return (
    <>
      <div className="pointer-events-none fixed right-0 top-0 -z-10 w-11/12 -translate-y-[80%]">
        <Image src={assets.header_bg_color} alt="" className="w-full" priority />
      </div>

      <nav
        aria-label="Primary navigation"
        className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 xl:px-[8%] pointer-events-none bg-transparent ${
          isScrolled ? "py-4" : "py-6"
        }`}
      >
        {/* Left: Location Pin */}
        <div className="flex-1 pointer-events-auto">
          <a
            href="#about"
            className={`group flex w-max items-center gap-1.5 text-xs font-semibold tracking-wider transition ${isScrolled ? "text-white" : "text-slate-900"}`}
            title={`Location: ${locationText}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 shrink-0 transition group-hover:text-emerald-400"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="uppercase">{locationText}</span>
          </a>
        </div>

        {/* Center */}
        <div className="flex-shrink-0 flex items-center justify-center pointer-events-auto">
          {isScrolled ? (
            /* Scrolled state: "Available for work" pill */
            <a
              href="#contact"
              className="group flex items-center gap-2.5 rounded-full border border-white/20 bg-[#27272a]/95 backdrop-blur-md px-4 py-1.5 shadow-md transition-all duration-200 hover:scale-105 hover:bg-[#27272a]"
            >
              <div className="relative h-6 w-6 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={avatarSrc}
                  alt={profile?.fullName || "Portfolio owner"}
                  width={24}
                  height={24}
                  unoptimized
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-sm font-medium text-slate-100">
                Available for work
              </span>
              <span className="h-2 w-2 shrink-0 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
            </a>
          ) : (
            /* Top state: Navigation pill */
            <div className="hidden md:flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/40 backdrop-blur-md p-1.5 shadow-sm">
              <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ml-1 border border-slate-900/10">
                <Image
                  src={avatarSrc}
                  alt={profile?.fullName || "Portfolio owner"}
                  width={32}
                  height={32}
                  unoptimized
                  className="h-full w-full object-cover"
                />
              </div>
              <ul className="flex items-center gap-1 px-3">
                {navigation.map(([label, href]) => (
                  <li key={label}>
                    <a
                      className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-900 transition hover:bg-white/60"
                      href={href}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-sm font-bold text-white transition hover:bg-slate-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                Work with me
              </a>
            </div>
          )}
        </div>

        {/* Right: Connect Link & Mobile Menu */}
        <div className="flex flex-1 justify-end items-center gap-2 pointer-events-auto">
          {profile?.linkedinUrl ? (
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden items-center gap-2 rounded-full border backdrop-blur-md px-4 py-2 text-xs font-medium shadow-sm transition md:flex ${
                isScrolled
                  ? "border-white/20 bg-black/50 text-white hover:bg-white/10"
                  : "border-slate-900/10 bg-white/40 text-slate-900 hover:bg-white/60"
              }`}
            >
              Connect
              <Image src={assets.arrow_icon} alt="" className={`w-2.5 ${isScrolled ? "invert" : ""}`} />
            </a>
          ) : null}

          <button
            type="button"
            className={`flex items-center justify-center rounded-full border p-2 shadow-sm backdrop-blur-md transition md:hidden ${
              isScrolled
                ? "border-white/20 bg-black/50 text-white hover:bg-white/10"
                : "border-slate-900/10 bg-white/40 text-slate-900 hover:bg-white/60"
            }`}
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Image src={assets.menu_black || assets.menu_white} alt="" className={`w-5 h-5 ${isScrolled ? "invert" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Drawer Menu */}
      <aside
        id="mobile-menu"
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
        className={`fixed inset-y-0 right-0 z-[70] w-[min(19rem,88vw)] origin-right transform border-l border-white/10 bg-[#121215] px-8 py-20 text-white shadow-2xl transition duration-300 md:hidden ${
          isMenuOpen ? "visible scale-x-100 opacity-100" : "invisible scale-x-0 opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close navigation menu"
          className="absolute right-5 top-5 rounded-full border border-white/15 bg-white/10 p-2 transition hover:bg-white/20"
        >
          <Image src={assets.close_white || assets.close_black} alt="" className="w-4 h-4 invert" />
        </button>
        <ul className="flex flex-col gap-5">
          {navigation.map(([label, href]) => (
            <li key={label}>
              <a
                className="block rounded-lg px-3 py-2 text-lg font-Ovo text-slate-200 transition hover:bg-white/10 hover:text-white"
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
