import React, { useMemo, useState, useEffect } from "react";
import { motion }  from "framer-motion";
import { Github, Mail, Linkedin, Download, ArrowRight, ExternalLink, MapPin, GraduationCap, Code2, TerminalSquare, Cpu, Database } from "lucide-react";
import KatanaSlash from "./KatanaSlash";

// ===== THEME =====
// Michael likes a black + red aesthetic with confident/cool energy.
// Tailwind is assumed. Colors lean dark with subtle red accents.

const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  {
    group: "Core",
    items: [
      { name: "JavaScript", icon: <Code2 className="w-4 h-4" /> },
      { name: "TypeScript", icon: <Code2 className="w-4 h-4" /> },
      { name: "Java", icon: <TerminalSquare className="w-4 h-4" /> },
      { name: "Python", icon: <TerminalSquare className="w-4 h-4" /> },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "TailwindCSS" },
      { name: "React" },
    ],
  },
  {
    group: "Backend / DB",
    items: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "MySQL", icon: <Database className="w-4 h-4" /> },
      { name: "JDBC" },
    ],
  },
  {
    group: "AI / Tools",
    items: [
      { name: "OpenAI / LLMs", icon: <Cpu className="w-4 h-4" /> },
      { name: "CLI Apps" },
      { name: "Git & GitHub" },
      { name: "Linux / Shell" },
    ],
  },
];

const projects = [
  {
    title: "RUBBER — Personal AI Dev Assistant",
    description:
      "A multi-surface AI agent (CLI, editor extension, and web) that manages project history, files, and local memory for private, on-device workflows.",
    tags: ["TypeScript", "Node", "CLI", "LLMs"],
    links: {
      github: "https://github.com/your-username/rubber", // TODO: replace
      live: null,
    },
    highlight: true,
  },
  {
    title: "ASCII Boot — LLaMA3 Terminal Launcher",
    description:
      "A repo that boots with a custom ASCII banner (\"Welcome to Llama3\") before launching the chat loop, with history persistence and API/local modes.",
    tags: ["Python", "Terminal", "UX"],
    links: {
      github: "https://github.com/your-username/ascii-boot-llama3", // TODO: replace
      live: null,
    },
  },
  {
    title: "DBMS Lab — MySQL + JDBC Demos",
    description:
      "A set of clean, minimal examples for CRUD, pooling, and prepared statements using Java + JDBC with MySQL.",
    tags: ["Java", "MySQL", "JDBC"],
    links: {
      github: "https://github.com/your-username/dbms-jdbc-demo", // TODO: replace
      live: null,
    },
  },
  {
    title: "AVS Edge — Voice Assistant on Embedded",
    description:
      "Prototype integrating Alexa Voice Service APIs with embedded hardware for wake-word capture, intents, and offline fallbacks.",
    tags: ["C/Embedded", "AVS", "Edge"],
    links: {
      github: "https://github.com/your-username/avs-edge-proto", // TODO: replace
      live: null,
    },
  },
];

const experiences = [
  {
    role: "Aspiring Full‑Stack Developer (Freelance Path)",
    org: "Independent",
    date: "2025 — Present",
    bullets: [
      "Building portfolio of practical, shipped projects.",
      "Focusing on clean architecture, testing, and DX.",
      "Exploring AI‑assisted developer tooling (RUBBER).",
    ],
  },
  {
    role: "B.E. — (In Progress)",
    org: "College, Chennai",
    date: "Current",
    bullets: [
      "Coursework: DBMS, Networks, OOPS, OS, SE.",
      "Projects include JDBC demos and embedded voice assistant.",
    ],
  },
];

const socials = [
  { label: "GitHub", icon: <Github className="w-5 h-5" />, href: "https://github.com/Michael1069" },
  { label: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/michael-naveen-m-68a548320/" },
  { label: "Email", icon: <Mail className="w-5 h-5" />, href: "mailto:mikemicky05@gmail.com" },
];

export default function Portfolio() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [slicedKeys, setSlicedKeys] = useState(new Set());

  useEffect(() => {
    const handleSlice = (e) => {
      setSlicedKeys((prev) => new Set([...prev, e.detail.targetBox]));
    };

    window.addEventListener("katana-slice", handleSlice);
    return () => window.removeEventListener("katana-slice", handleSlice);
  }, []);

  return (
      <main className="min-h-screen text-zinc-100 bg-transparent selection:bg-red-600/40">
      
      {/* Katana overlay */}
      <KatanaSlash />

      {/* Backdrop grid + vignette */}
      <div aria-hidden className="pointer-events-none fixed inset-0 [background:radial-gradient(1200px_600px_at_120%_-10%,rgba(244,63,94,0.12),transparent_60%),radial-gradient(800px_400px_at_-10%_10%,rgba(244,63,94,0.12),transparent_60%)]" />
      <div aria-hidden className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_60%,rgba(0,0,0,0.9)_100%)]" />

      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/40">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex items-center justify-between py-4">
            <a href="#home" className="group inline-flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-red-500 group-hover:scale-125 transition" />
              <span className="font-semibold tracking-wide">Michael Naveen&nbsp;M</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="text-zinc-400 hover:text-zinc-100 transition">
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <a href="#contact" className="px-3 py-2 rounded-xl bg-red-600 hover:bg-red-500 transition text-sm font-medium inline-flex items-center gap-2">
                Contact <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative">
        <div className="mx-auto max-w-6xl px-4 md:px-6 py-20 md:py-28">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-red-600/30 bg-red-600/10 px-3 py-1 text-xs text-red-300">
                <span className="inline-flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                available for freelance projects
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                Michael Naveen <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">M</span>
              </h1>
              <p className="mt-3 text-lg md:text-xl text-zinc-300 max-w-prose">
                Aspiring <span className="text-zinc-100 font-semibold">Full‑Stack Developer</span> crafting fast, minimal, and reliable web apps. I enjoy turning ideas into clean code and delightful developer experiences.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="/resume.pdf"
                  className="px-4 py-2 rounded-xl border border-zinc-700 hover:border-zinc-500 text-sm font-medium inline-flex items-center gap-2"
                >
                  <Download className="w-4 h-4" /> Resume
                </a>
                <a
                  href="https://github.com/your-username"
                  className="px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 transition text-sm font-medium inline-flex items-center gap-2"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <div className="flex items-center gap-2 text-zinc-400 text-sm">
                  <MapPin className="w-4 h-4" /> Chromepet, Chennai
                </div>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-red-600/40 to-transparent blur-2xl" aria-hidden />
                <div className="relative rounded-3xl border border-zinc-800 bg-neutral-900 p-6 shadow-2xl">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "JavaScript / TS", value: "Advanced" },
                      { label: "Java", value: "Intermediate" },
                      { label: "React", value: "Advanced" },
                      { label: "MySQL", value: "Intermediate" },
                      { label: "CLI / Linux", value: "Advanced" },
                      { label: "LLMs", value: "Intermediate" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-2xl bg-neutral-800/70 border border-zinc-800 p-4">
                        <div className="text-sm text-zinc-400">{s.label}</div>
                        <div className="mt-1 font-semibold">{s.value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-xs text-zinc-500">* self‑assessed proficiency — continuously improving</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5">
              <h2 className="text-2xl font-bold">About (Technical)</h2>
              <p className="mt-3 text-zinc-300">
                I’m focused on full‑stack web development and practical, shippable software. My goals: build real products, freelance for clients, and explore AI‑assisted tooling that boosts developer productivity.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-400">
                <GraduationCap className="w-4 h-4" /> B.E. in progress — Chennai
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="rounded-3xl border border-zinc-800 bg-neutral-900 p-6">
                <h3 className="text-sm uppercase tracking-wider text-zinc-400">Stack Highlights</h3>
                <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {skills.flatMap((g) => g.items.map((it) => (
                    <div key={g.group + it.name} className="flex items-center gap-2 rounded-2xl bg-neutral-800/60 border border-zinc-800 px-3 py-2">
                      <span className="opacity-80">{it.icon}</span>
                      <span className="text-sm">{it.name}</span>
                    </div>
                  )))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((group) => (
              <div key={group.group} className="rounded-3xl border border-zinc-800 bg-neutral-900 p-5">
                <div className="text-sm uppercase tracking-wider text-zinc-400">{group.group}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((it) => (
                    <span key={it.name} className="text-sm rounded-xl bg-neutral-800/60 border border-zinc-800 px-3 py-1">
                      {it.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Projects</h2>
            <a
              href="https://github.com/your-username?tab=repositories"
              className="text-sm text-red-400 hover:text-red-300 inline-flex items-center gap-2"
            >
              View all on GitHub <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {projects.map((p, i) => {
              const isSliced = slicedKeys.has(String(i));
              return (
                <motion.article
                  key={p.title}
                  data-sliceable
                  data-key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isSliced
                      ? {
                          rotate: 45,
                          y: 200,
                          opacity: 0,
                          transition: { duration: 0.6, ease: "easeIn" },
                        }
                      : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4 }}
                  className={`rounded-3xl border ${
                    p.highlight ? "border-red-600/40" : "border-zinc-800"
                  } bg-neutral-900 p-6 hover:shadow-[0_0_0_1px_rgba(244,63,94,0.2)] transition`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold leading-tight">
                      {p.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {p.links.github && (
                        <a
                          title="GitHub"
                          href={p.links.github}
                          className="p-2 rounded-xl border border-zinc-800 hover:border-zinc-600"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {p.links.live && (
                        <a
                          title="Live"
                          href={p.links.live}
                          className="p-2 rounded-xl border border-zinc-800 hover:border-zinc-600"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="mt-2 text-zinc-300">{p.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs rounded-lg bg-neutral-800/60 border border-zinc-800 px-2 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl font-bold">Experience & Education</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            {experiences.map((e) => (
              <div key={e.role} className="rounded-3xl border border-zinc-800 bg-neutral-900 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="font-semibold">{e.role}</div>
                    <div className="text-sm text-zinc-400">{e.org}</div>
                  </div>
                  <div className="text-xs text-zinc-400">{e.date}</div>
                </div>
                <ul className="mt-3 list-disc list-inside text-zinc-300 space-y-1">
                  {e.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="rounded-3xl border border-zinc-800 bg-neutral-900 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold">Let’s build something.</h2>
                <p className="mt-2 text-zinc-300">Email me with a brief about your project, timeline, and budget.</p>
              </div>
              <div className="flex items-center gap-2">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} className="px-3 py-2 rounded-xl border border-zinc-800 hover:border-zinc-600 inline-flex items-center gap-2">
                    {s.icon}
                    <span className="text-sm">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
<footer className="py-10">
  <div className="mx-auto max-w-6xl px-4 md:px-6 text-sm text-zinc-500">
    © {year} Michael M — I do all the stuff to automate life❤️.
    Focused on shipping real value.
  </div>
</footer>

    </main>
  );
}
