"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full px-4 py-4 md:px-8">
      <motion.nav
        className={`border-4 border-white/20 bg-white/[0.03] backdrop-blur-md mx-auto flex w-full max-w-6xl items-center justify-between rounded-none px-5 py-3 transition-colors duration-300 md:px-8 hover:border-white/50 ${
          scrolled ? "border-white/40 shadow-[0_0_15px_rgba(0,0,0,0.5)]" : ""
        }`}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <a href="#home" className="font-serif text-xl font-bold tracking-[0.18em] text-white uppercase transition-colors hover:text-white/70">
          KS
        </a>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Toggle menu"
          className="group relative isolate overflow-hidden border-2 border-white/20 flex h-10 w-10 items-center justify-center rounded-none text-white transition-all duration-300 ease-out md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="absolute inset-0 -z-10 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover:translate-x-0" />
          <span className="relative z-10 transition-colors duration-200 ease-out group-hover:text-black">
             {open ? <X size={18} /> : <Menu size={18} />}
          </span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative px-1 py-1 text-xs font-medium tracking-[0.16em] text-white/80 uppercase transition-colors hover:text-white"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="border-4 border-white/20 bg-black/90 backdrop-blur-xl mx-auto mt-2 w-full max-w-6xl rounded-none p-4 md:hidden">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group relative isolate overflow-hidden border-2 border-white/20 block rounded-none px-4 py-3 text-xs tracking-[0.14em] font-medium text-white uppercase transition-all duration-300 ease-out hover:border-white"
                  onClick={() => setOpen(false)}
                >
                  <span className="absolute inset-0 -z-10 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover:translate-x-0" />
                  <span className="relative z-10 transition-colors duration-200 ease-out group-hover:text-black">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}