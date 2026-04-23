"use client";

import { motion } from "framer-motion";
import {
  Binary,
  Blocks,
  BrainCircuit,
  Braces,
  Code2,
  Database,
  ExternalLink,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Network,
  Server,
  Send,
} from "lucide-react";
import { useEffect, useState } from "react";
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
    description: "Built an intelligent monitoring workflow for predicting industrial faults from real-time machine telemetry.",
    tech: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
    link: "https://github.com/kartikeya042/Industrial-Fault-Detection-Using-Machine-Learning",
  },
  {
    title: "Paw Alert",
    description: "Designed a rapid reporting platform to connect communities with missing and found pet alerts in urban areas.",
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Twilio API"],
    link: "https://github.com/vansh1293/PAW-ALERT.git",
  },
  {
    title: "CarboNet",
    description: "Developed a data-driven dashboard to estimate, compare, and optimize carbon footprints across user activities.",
    tech: ["React.js", "Node.js", "Appwrite", "Gemini API", "Chart.js"],
    link: "https://github.com/Himaanshuuuu04/Carbonet.git",
  },
];

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C/C++", icon: Code2 },
      { name: "Python", icon: Braces },
      { name: "JavaScript (ES6+)", icon: Binary },
      { name: "SQL", icon: Database },
      { name: "HTML5/CSS3", icon: Blocks },
      { name: "PHP", icon: Server },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", icon: Blocks },
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Network },
      { name: "Redux", icon: Binary },
      { name: "Pandas", icon: Database },
      { name: "NumPy", icon: Braces },
      { name: "Scikit-Learn", icon: BrainCircuit },
      { name: "XGBoost", icon: BrainCircuit },
      { name: "Matplotlib", icon: ExternalLink },
      { name: "Seaborn", icon: ExternalLink },
      { name: "Tailwind CSS", icon: Blocks },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: Database },
      { name: "Appwrite", icon: Server },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", icon: Github },
      { name: "VS Code", icon: Code2 },
      { name: "Postman", icon: Send },
      { name: "Linux", icon: Server },
      { name: "Figma", icon: Blocks },
      { name: "Canva", icon: ExternalLink },
    ],
  },
  {
    title: "APIs & Services",
    skills: [
      { name: "RESTful APIs", icon: Network },
      { name: "Twilio API", icon: Send },
      { name: "Cloudinary", icon: ExternalLink },
      { name: "Google Gemini API", icon: BrainCircuit },
      { name: "Google Maps API", icon: ExternalLink },
      { name: "GeoLocation API", icon: ExternalLink },
    ],
  },
  {
    title: "Core Competencies",
    skills: [
      { name: "DSA", icon: Network },
      { name: "OOP", icon: Code2 },
      { name: "Database Mgmt", icon: Database },
      { name: "Full-Stack Dev", icon: Blocks },
      { name: "Machine Learning", icon: BrainCircuit },
    ],
  },
];

export default function Home() {
  const [typedName, setTypedName] = useState("");
  const fullName = "Kartikeya Singh";

  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedName(fullName.slice(0, index));
      if (index >= fullName.length) {
        window.clearInterval(timer);
      }
    }, 120);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Custom CSS for the 0.7s blinking cursor */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes custom-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .blink-cursor {
          animation: custom-blink 0.7s infinite;
        }
      `}} />

      <ParticleBackground />
      <StickyNav />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 pb-20 md:px-8 md:pb-24">
        
        {/* HERO SECTION - Transparent */}
        <Reveal id="home" className="scroll-mt-28 border-none bg-transparent p-0 md:p-0">
          <p className="mb-6 text-xs tracking-[0.32em] text-white/72 uppercase">Portfolio</p>
          {/* Removed the glowing hover drop-shadow from the name */}
          <h1 className="font-serif text-6xl leading-[0.95] font-black text-white md:text-8xl transition-all duration-300">
            {typedName}
            <span className="blink-cursor ml-1 inline-block text-white">_</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed font-normal tracking-wide text-white/86 md:text-xl">
            Bachelor of Technology in Computer Science and Engineering
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { href: "https://github.com/kartikeya042", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/kartikeya-singh-5409b7292/", icon: Linkedin, label: "LinkedIn" },
              { href: "YOUR_INSTAGRAM_LINK_HERE", icon: Instagram, label: "Instagram" },
              { href: "mailto:kartikeyasingh042@gmail.com", icon: Mail, label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="group relative isolate overflow-hidden border-2 border-white inline-flex items-center gap-2 rounded-none px-4 py-2 text-xs tracking-[0.14em] uppercase text-white transition-colors duration-200 ease-out"
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 -z-10 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover:translate-x-0" />
                <span className="relative z-10 inline-flex items-center gap-2 transition-colors duration-200 ease-out group-hover:text-black">
                  <social.icon size={16} />
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>
        </Reveal>

        {/* EXPERIENCE SECTION */}
        <Reveal id="experience" className="border-4 border-white/20 bg-white/[0.03] backdrop-blur-md scroll-mt-28 rounded-none p-6 transition-colors duration-200 ease-out hover:border-white md:p-10">
          <h2 className="font-serif mb-8 text-3xl md:text-4xl">Experience</h2>
          <div className="space-y-4">
            {experiences.map((experience) => (
              <article
                key={`${experience.role}-${experience.company}`}
                className="group relative isolate overflow-hidden border-2 border-white/20 rounded-none p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white"
              >
                <span className="absolute inset-0 -z-10 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover:translate-x-0" />
                <h3 className="text-xl font-semibold text-white transition-colors duration-200 ease-out group-hover:text-black">
                  {experience.role}
                </h3>
                <p className="mt-1 text-white/75 transition-colors duration-200 ease-out group-hover:text-black">
                  {experience.company}
                </p>
                <p className="mt-2 text-sm tracking-[0.1em] text-white/60 uppercase transition-colors duration-200 ease-out group-hover:text-black">
                  {experience.duration}
                </p>
              </article>
            ))}
          </div>
        </Reveal>

        {/* PROJECTS SECTION */}
        <Reveal id="projects" className="border-4 border-white/20 bg-white/[0.03] backdrop-blur-md scroll-mt-28 rounded-none p-6 transition-colors duration-200 ease-out hover:border-white md:p-10">
          <h2 className="font-serif mb-8 text-3xl md:text-4xl">Projects</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.title}
                className="group relative isolate overflow-hidden border-2 border-white/20 flex flex-col rounded-none p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white cursor-pointer"
              >
                <span className="absolute inset-0 -z-10 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover:translate-x-0" />
                <h3 className="text-lg font-semibold text-white transition-colors duration-200 ease-out group-hover:text-black">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/75 transition-colors duration-200 ease-out group-hover:text-black flex-grow">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="border-2 border-white/20 rounded-none px-2 py-1 text-[10px] tracking-[0.1em] uppercase text-white transition-colors duration-200 ease-out group-hover:border-black group-hover:text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </Reveal>

        {/* SKILLS SECTION - Updated to Flexbox for fixed small squares */}
        <Reveal id="skills" className="border-4 border-white/20 bg-white/[0.03] backdrop-blur-md scroll-mt-28 rounded-none p-6 transition-colors duration-200 ease-out hover:border-white md:p-10">
          <h2 className="font-serif mb-8 text-3xl md:text-4xl">Technical Skills</h2>
          <div className="space-y-10">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-xl font-bold mb-4 text-white">{category.title}</h3>
                
                {/* Changed from stretching grid to flex-wrap */}
                <div className="flex flex-wrap gap-3 md:gap-4">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      /* Fixed height and width to keep the boxes small and perfectly square */
                      className="group relative isolate flex h-24 w-24 flex-col items-center justify-center overflow-hidden border-2 border-white/20 rounded-none transition-all duration-300 ease-out hover:border-white md:h-28 md:w-28"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="absolute inset-0 -z-10 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover:translate-x-0" />
                      
                      {/* Icons kept at their standard readable size */}
                      <skill.icon className="mb-2 h-6 w-6 text-white transition-colors duration-200 ease-out group-hover:text-black md:h-8 md:w-8" />
                      
                      <p className="px-1 text-center text-[9px] leading-tight tracking-[0.05em] text-white uppercase transition-colors duration-200 ease-out group-hover:text-black md:text-[10px]">
                        {skill.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ACHIEVEMENTS SECTION */}
        <Reveal id="achievements" className="border-4 border-white/20 bg-white/[0.03] backdrop-blur-md scroll-mt-28 rounded-none p-6 transition-colors duration-200 ease-out hover:border-white md:p-10">
          <h2 className="font-serif mb-8 text-3xl md:text-4xl">Achievements</h2>
          <ul className="space-y-3">
            <li className="group relative isolate overflow-hidden border-2 border-white/20 rounded-none p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white">
              <span className="absolute inset-0 -z-10 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover:translate-x-0" />
              <span className="text-white font-medium transition-colors duration-200 ease-out group-hover:text-black">
                Amazon ML Summer School 2025 (Selected Participant)
              </span>
            </li>
            <li className="group relative isolate overflow-hidden border-2 border-white/20 rounded-none p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white">
              <span className="absolute inset-0 -z-10 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover:translate-x-0" />
              <span className="text-white font-medium transition-colors duration-200 ease-out group-hover:text-black">
                Top 25% Ranking in Competitive Programming Contests
              </span>
            </li>
          </ul>
        </Reveal>

        {/* CONTACT SECTION */}
        <Reveal id="contact" className="border-4 border-white/20 bg-white/[0.03] backdrop-blur-md scroll-mt-28 rounded-none p-6 transition-colors duration-200 ease-out hover:border-white md:p-10">
          <h2 className="font-serif mb-8 text-3xl md:text-4xl">Contact</h2>
          <form action="YOUR_FORMSPREE_URL" method="POST" className="mx-auto flex w-full max-w-2xl flex-col gap-5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="border-2 border-white/20 bg-transparent rounded-none px-4 py-3 text-white outline-none transition placeholder:text-white/45 focus:border-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="border-2 border-white/20 bg-transparent rounded-none px-4 py-3 text-white outline-none transition placeholder:text-white/45 focus:border-white"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              rows={5}
              className="border-2 border-white/20 bg-transparent resize-none rounded-none px-4 py-3 text-white outline-none transition placeholder:text-white/45 focus:border-white"
            />
            <motion.button
              type="submit"
              className="group relative isolate overflow-hidden border-2 border-white inline-flex w-fit items-center gap-2 rounded-none px-6 py-3 text-xs tracking-[0.14em] uppercase text-white transition-colors duration-200 ease-out"
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 -z-10 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover:translate-x-0" />
              <span className="relative z-10 inline-flex items-center gap-2 transition-colors duration-200 ease-out group-hover:text-black font-bold">
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