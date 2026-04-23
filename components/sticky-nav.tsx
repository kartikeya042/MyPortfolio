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
        className={`border-4 border-white/20 bg-white/[0.03] backdrop-blur-md hover-soft-shadow mx-auto flex w-full max-w-6xl items-center justify-between rounded-none px-5 py-3 transition-all duration-300 md:px-8 ${
          scrolled ? "border-white/30" : "border-white/20"
        }`}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <a href="#home" className="font-semibold tracking-[0.18em] text-white uppercase">
          KS
        </a>

        <button
          aria-label="Toggle menu"
          className="border-2 border-white/20 bg-white/[0.03] backdrop-blur-md hover-soft-shadow flex h-10 w-10 items-center justify-center rounded-none text-white transition hover:bg-white hover:text-black md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        <ul className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="border-b border-transparent py-1 text-xs tracking-[0.16em] text-white/85 uppercase transition hover:border-white hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>

      {open && (
        <div className="border-4 border-white/20 bg-white/[0.03] backdrop-blur-md mx-auto mt-2 w-full max-w-6xl rounded-none p-4 md:hidden">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="border-2 border-white/20 bg-white/[0.03] backdrop-blur-md hover-soft-shadow block rounded-none px-3 py-2 text-xs tracking-[0.14em] text-white uppercase transition hover:bg-white hover:text-black"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
