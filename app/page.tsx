"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import { Reveal } from "@/components/reveal";
import { StickyNav } from "@/components/sticky-nav";

const experiences = [
  {
    role: "Web Development Intern",
    company: "Elevate Labs",
    duration: "Oct 2025 - Dec 2025",
  },
  {
    role: "Machine Learning Intern",
    company: "Motilal Nehru National Institute of Technology",
    duration: "Jun 2025 - Jul 2025",
  },
];

const projects = [
  {
    title: "Smart Fault Detection in Industry 4.0",
    description:
      "Built an intelligent monitoring workflow for predicting industrial faults from real-time machine telemetry.",
    tech: ["React", "Node.js", "Python"],
    link: "https://github.com/",
  },
  {
    title: "Paw Alert",
    description:
      "Designed a rapid reporting platform to connect communities with missing and found pet alerts in urban areas.",
    tech: ["React", "PostgreSQL", "Node.js"],
    link: "https://github.com/",
  },
  {
    title: "CarboNet",
    description:
      "Developed a data-driven dashboard to estimate, compare, and optimize carbon footprints across user activities.",
    tech: ["JavaScript", "Python", "Machine Learning"],
    link: "https://github.com/",
  },
];

const skills = [
  "C/C++",
  "Python",
  "JavaScript",
  "React.js",
  "Node.js",
  "PostgreSQL",
  "Machine Learning",
  "Data Structures & Algorithms",
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <ParticleBackground />
      <StickyNav />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-20 md:px-8 md:pb-24">
        <Reveal id="home" className="scroll-mt-28 border-none bg-transparent p-0 md:p-0">
          <p className="mb-6 text-xs tracking-[0.32em] text-white/72 uppercase">Portfolio</p>
          <h1 className="headline-font text-6xl leading-[0.95] font-black text-white transition-all duration-300 ease-out hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] md:text-8xl">
            Kartikeya Singh
          </h1>
          <p className="mt-6 max-w-3xl font-sans text-base leading-relaxed font-normal tracking-wide text-white/86 md:text-xl">
            Bachelor of Technology in Computer Science and Engineering
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              {
                href: "https://github.com/kartikeya042",
                icon: Github,
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/",
                icon: Linkedin,
                label: "LinkedIn",
              },
              {
                href: "https://www.instagram.com/",
                icon: Instagram,
                label: "Instagram",
              },
              {
                href: "mailto:kartikeyasingh042@gmail.com",
                icon: Mail,
                label: "Email",
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="group relative isolate overflow-hidden border-2 border-white hover-soft-shadow inline-flex items-center gap-2 rounded-none px-4 py-2 text-xs tracking-[0.14em] uppercase text-white transition-colors duration-200 ease-out"
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 -z-10 translate-x-[-100%] bg-white transition-transform duration-300 ease-out group-hover:translate-x-0" />
                <span className="relative z-10 inline-flex items-center gap-2 transition-colors duration-200 ease-out group-hover:text-black">
                  <social.icon size={16} />
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>
        </Reveal>

        <Reveal id="experience" className="border-4 border-white/20 bg-white/[0.03] backdrop-blur-md hover-soft-shadow scroll-mt-28 rounded-none p-6 transition-colors duration-200 ease-out hover:border-white md:p-10">
          <h2 className="headline-font mb-8 text-3xl md:text-4xl">Experience</h2>
          <div className="space-y-4">
            {experiences.map((experience) => (
              <article
                key={`${experience.role}-${experience.company}`}
                className="border-2 border-white/20 bg-white/[0.03] backdrop-blur-md hover-soft-shadow group rounded-none p-5 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-white"
              >
                <h3 className="text-xl font-semibold">{experience.role}</h3>
                <p className="mt-1 text-white/75">{experience.company}</p>
                <p className="mt-2 text-sm tracking-[0.1em] text-white/60 uppercase">{experience.duration}</p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal id="projects" className="border-4 border-white/20 bg-white/[0.03] backdrop-blur-md hover-soft-shadow scroll-mt-28 rounded-none p-6 transition-colors duration-200 ease-out hover:border-white md:p-10">
          <h2 className="headline-font mb-8 text-3xl md:text-4xl">Projects</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                className="border-4 border-white/20 bg-white/[0.03] backdrop-blur-md hover-soft-shadow group flex h-full flex-col rounded-none p-4 transition-all duration-300 ease-out hover:-translate-y-2 hover:border-white"
              >
                <div className="border-2 border-white/20 bg-white/[0.03] backdrop-blur-md mb-4 flex aspect-[4/3] items-center justify-center rounded-none text-xs tracking-[0.15em] text-white/55 uppercase">
                  Thumbnail
                </div>
                <div className="flex h-full flex-col">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="border-2 border-white/20 bg-white/[0.03] backdrop-blur-md rounded-none px-2 py-1 text-[11px] tracking-[0.1em] uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative isolate overflow-hidden border-2 border-white bg-white/[0.03] backdrop-blur-md hover-soft-shadow mt-5 inline-flex items-center gap-2 rounded-none px-3 py-2 text-xs tracking-[0.14em] uppercase text-white transition-colors duration-200 ease-out"
                  >
                    <span className="absolute inset-0 -z-10 translate-x-[-100%] bg-white transition-transform duration-300 ease-out group-hover:translate-x-0" />
                    <span className="relative z-10 inline-flex items-center gap-2 transition-colors duration-200 ease-out group-hover:text-black">
                      View
                      <ExternalLink size={14} />
                    </span>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </Reveal>

        <Reveal id="skills" className="border-4 border-white/20 bg-white/[0.03] backdrop-blur-md hover-soft-shadow scroll-mt-28 rounded-none p-6 md:p-10">
          <h2 className="headline-font mb-8 text-3xl md:text-4xl">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <motion.span
                key={skill}
                className="border-2 border-white/20 bg-white/[0.03] backdrop-blur-md hover-soft-shadow rounded-none px-4 py-2 text-sm tracking-wide transition hover:bg-white hover:text-black"
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </Reveal>

        <Reveal id="achievements" className="border-4 border-white/20 bg-white/[0.03] backdrop-blur-md hover-soft-shadow scroll-mt-28 rounded-none p-6 md:p-10">
          <h2 className="headline-font mb-8 text-3xl md:text-4xl">Achievements</h2>
          <ul className="space-y-3 text-white/88">
            <li className="border-2 border-white/20 bg-white/[0.03] backdrop-blur-md hover-soft-shadow rounded-none p-4">
              Amazon ML Summer School 2025 (Selected Participant)
            </li>
            <li className="border-2 border-white/20 bg-white/[0.03] backdrop-blur-md hover-soft-shadow rounded-none p-4">
              Top 25% Ranking in Competitive Programming Contests
            </li>
          </ul>
        </Reveal>

        <Reveal id="contact" className="border-4 border-white/20 bg-white/[0.03] backdrop-blur-md hover-soft-shadow scroll-mt-28 rounded-none p-6 md:p-10">
          <h2 className="headline-font mb-8 text-3xl md:text-4xl">Contact</h2>
          <form action="YOUR_FORMSPREE_URL" method="POST" className="mx-auto flex w-full max-w-2xl flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="border-2 border-white/20 bg-white/[0.03] backdrop-blur-md hover-soft-shadow rounded-none px-4 py-3 text-white outline-none transition placeholder:text-white/45 focus:bg-white/10"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="border-2 border-white/20 bg-white/[0.03] backdrop-blur-md hover-soft-shadow rounded-none px-4 py-3 text-white outline-none transition placeholder:text-white/45 focus:bg-white/10"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              rows={5}
              className="border-2 border-white/20 bg-white/[0.03] backdrop-blur-md hover-soft-shadow resize-none rounded-none px-4 py-3 text-white outline-none transition placeholder:text-white/45 focus:bg-white/10"
            />

            <motion.button
              type="submit"
              className="group relative isolate overflow-hidden border-2 border-white bg-white/[0.03] backdrop-blur-md hover-soft-shadow inline-flex w-fit items-center gap-2 rounded-none px-6 py-3 text-xs tracking-[0.14em] uppercase text-white transition-colors duration-200 ease-out"
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 -z-10 translate-x-[-100%] bg-white transition-transform duration-300 ease-out group-hover:translate-x-0" />
              <span className="relative z-10 inline-flex items-center gap-2 transition-colors duration-200 ease-out group-hover:text-black">
                Send Message
                <Send size={15} />
              </span>
            </motion.button>
          </form>
        </Reveal>
      </main>
    </div>
  );
}
