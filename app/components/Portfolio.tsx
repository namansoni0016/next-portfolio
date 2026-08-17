"use client";

import { ArrowDownRight, ArrowUpRight, Code2, Database, Github, Globe2, Linkedin, Mail, MapPin, Server, Sparkles, Terminal, Youtube } from "lucide-react";
import { Section } from "./Section";
import { Navbar } from "./Navbar";

const experience = [
  { period: "Dec 2025 — Present", role: "Full Stack Developer", company: "Product & Web Engineering", text: "Building production web applications end-to-end — from responsive interfaces and APIs to databases, deployments and cloud infrastructure." },
  { period: "Jun 2023 — Dec 2023", role: "Product Manager", company: "ICICI Bank", text: "Worked across product thinking, stakeholder collaboration and execution, translating business problems into usable digital experiences." },
];

const projects = [
  { no: "01", title: "Travel Intelligence", type: "AI • Full Stack", desc: "A conversational travel experience that turns natural-language intent into structured destinations and itineraries.", tags: ["Next.js", "TypeScript", "AI", "Tailwind"] },
  { no: "02", title: "Developer OS", type: "Product • Web App", desc: "A command-centre style workspace for projects, notes, experiments and personal productivity.", tags: ["React", "Node.js", "PostgreSQL", "AWS"] },
  { no: "03", title: "Content Studio", type: "Creator • CMS", desc: "A minimal publishing system for long-form writing, visual stories and travel journals without unnecessary editorial overhead.", tags: ["Next.js", "MDX", "Cloudinary", "Vercel"] },
];

const tools = [
  ["Frontend", "React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML / CSS"],
  ["Backend", "Node.js", "REST APIs", "PostgreSQL", "MongoDB", "Authentication"],
  ["Cloud & DevOps", "AWS", "Vercel", "Git / GitHub", "CI / CD", "Linux"],
  ["Workflow", "Figma", "Jest", "Postman", "VS Code", "AI tooling"],
];

export default function Portfolio() {
  return <>
    <Navbar />
    <main>
      <section id="home" className="relative min-h-screen overflow-hidden px-5 pt-32 md:px-8 md:pt-40">
        <div className="grid-bg absolute inset-0" />
        <div className="absolute left-1/2 top-32 h-80 w-80 -translate-x-1/2 rounded-full bg-[#c8ff3d]/10 blur-[120px]" />
        <div className="relative mx-auto flex max-w-7xl flex-col justify-center pb-24 pt-16 md:min-h-[78vh]">
          <div className="mb-8 flex items-center gap-3 text-sm text-zinc-400"><span className="h-2 w-2 rounded-full bg-[#c8ff3d] shadow-[0_0_18px_#c8ff3d]"/> Available for interesting work <span className="text-zinc-600">/</span> Ahmedabad, India</div>
          <h1 className="max-w-6xl text-[clamp(4rem,11vw,10.5rem)] font-black leading-[.83] tracking-[-0.075em]">BUILDING<br/><span className="text-[#c8ff3d]">DIGITAL</span><br/>WORLDS<span className="text-zinc-700">.</span></h1>
          <div className="mt-10 grid max-w-4xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <p className="max-w-xl text-lg leading-8 text-zinc-400 md:text-xl">I’m <strong className="text-white">Naman Soni</strong>, a full stack developer who blends engineering, product thinking and obsessive attention to detail to make the web feel better.</p>
            <a href="#projects" className="group flex w-fit items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold transition hover:border-[#c8ff3d] hover:bg-[#c8ff3d] hover:text-black">Explore work <ArrowDownRight size={17} className="transition group-hover:rotate-45"/></a>
          </div>
          <div className="mt-20 overflow-hidden border-y border-white/10 py-4">
            <div className="marquee flex gap-10 text-xs font-bold uppercase tracking-[.25em] text-zinc-600">{Array.from({length: 2}).flatMap((_,i) => ["FULL STACK", "PRODUCT MINDSET", "CLEAN CODE", "SCALABLE SYSTEMS", "GOOD UX", "CURIOUS BY DEFAULT"].map(x => <span key={`${i}-${x}`}>{x} ✦</span>))}</div>
          </div>
        </div>
      </section>

      <Section id="about" eyebrow="01 / About" title="Engineer by craft. Product thinker by instinct.">
        <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-center">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 glow">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(200,255,61,.35),transparent_28%),linear-gradient(145deg,#17171c,#07070a)]" />
            <div className="absolute inset-x-10 bottom-0 top-20 rounded-t-[45%] border border-white/10 bg-gradient-to-b from-zinc-600/30 to-zinc-950/80" />
            <div className="absolute left-1/2 top-[29%] h-28 w-28 -translate-x-1/2 rounded-full bg-zinc-700/80 shadow-2xl" />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur"><span className="text-xs text-zinc-400">PROFILE / 2026</span><span className="text-xs font-bold text-[#c8ff3d]">NS_01</span></div>
          </div>
          <div>
            <p className="text-xl leading-9 text-zinc-300 md:text-2xl">I like taking messy ideas and turning them into interfaces and systems that are fast, understandable and genuinely useful.</p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[['01','Full stack','Frontend to database to deployment.'],['02','Product','I think about the why, not just the how.'],['03','Performance','Fast experiences are part of good UX.'],['04','Curiosity','Always learning, shipping and experimenting.']].map(([n,t,d]) => <div key={n} className="border-t border-white/10 pt-4"><span className="text-xs text-zinc-600">{n}</span><h3 className="mt-5 font-bold">{t}</h3><p className="mt-2 text-sm leading-6 text-zinc-500">{d}</p></div>)}
            </div>
          </div>
        </div>
      </Section>

      <Section id="experience" eyebrow="02 / Experience" title="A hybrid background that shapes how I build.">
        <div className="space-y-0 border-t border-white/10">
          {experience.map((item, i) => <article key={item.role} className="grid gap-5 border-b border-white/10 py-9 md:grid-cols-[.35fr_1fr] md:gap-16"><div className="flex items-start justify-between text-sm text-zinc-500 md:block"><span>{item.period}</span><span className="md:hidden">0{i+1}</span></div><div><div className="flex items-start justify-between"><div><p className="text-xs uppercase tracking-[.2em] text-[#c8ff3d]">{item.company}</p><h3 className="mt-2 text-2xl font-bold tracking-tight">{item.role}</h3></div><span className="hidden text-zinc-700 md:block">0{i+1}</span></div><p className="mt-5 max-w-2xl leading-7 text-zinc-400">{item.text}</p></div></article>)}
        </div>
      </Section>

      <Section id="projects" eyebrow="03 / Selected work" title="Small list. High signal.">
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map(project => <article key={project.no} className="group flex min-h-[430px] flex-col justify-between rounded-[1.75rem] border border-white/10 bg-white/[.025] p-6 transition duration-500 hover:-translate-y-2 hover:border-[#c8ff3d]/40 hover:bg-[#c8ff3d]/[.035]">
            <div><div className="flex justify-between text-xs text-zinc-600"><span>{project.no}</span><ArrowUpRight size={16} className="transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#c8ff3d]"/></div><p className="mt-16 text-xs font-bold uppercase tracking-[.2em] text-[#c8ff3d]">{project.type}</p><h3 className="mt-3 text-3xl font-black tracking-tight">{project.title}</h3><p className="mt-5 leading-7 text-zinc-500">{project.desc}</p></div><div className="mt-8 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400">{tag}</span>)}</div>
          </article>)}
        </div>
      </Section>

      <Section id="tools" eyebrow="04 / Tools & technologies" title="My everyday building blocks.">
        <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map(([category, ...items]) => <div key={category} className="border-b border-r border-white/10 p-6 md:p-8"><div className="mb-8 flex items-center gap-3 text-[#c8ff3d]">{category === 'Frontend' ? <Code2 size={20}/> : category === 'Backend' ? <Server size={20}/> : category === 'Cloud & DevOps' ? <Globe2 size={20}/> : <Terminal size={20}/>}<span className="text-sm font-bold">{category}</span></div><ul className="space-y-4">{items.map(item => <li key={item} className="flex items-center gap-3 text-zinc-400"><span className="h-1.5 w-1.5 rounded-full bg-zinc-700"/>{item}</li>)}</ul></div>)}
        </div>
      </Section>

      <Section id="contact" eyebrow="05 / Contact" title="Have a problem worth solving? Let’s build it.">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#c8ff3d] p-8 text-black md:p-14">
          <Sparkles className="absolute right-8 top-8 opacity-30" size={80}/>
          <p className="max-w-2xl text-3xl font-black tracking-tight md:text-6xl">Good work starts with a good conversation.</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row"><a href="mailto:hello@example.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 font-bold text-white transition hover:scale-105"><Mail size={17}/> Email me</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-black/20 px-6 py-3 font-bold transition hover:bg-black/10"><Linkedin size={17}/> LinkedIn</a></div>
          <div className="mt-14 flex flex-wrap gap-5 text-sm font-medium"><span className="flex items-center gap-2"><MapPin size={15}/> Ahmedabad, India</span><span className="flex items-center gap-2"><Github size={15}/> github.com/namansoni</span></div>
        </div>
      </Section>
    </main>
    <footer className="border-t border-white/10 px-5 py-8 md:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Naman Soni. Built with intent.</span><div className="flex gap-4"><a href="https://github.com" className="hover:text-white"><Github size={17}/></a><a href="https://linkedin.com" className="hover:text-white"><Linkedin size={17}/></a><a href="https://youtube.com" className="hover:text-white"><Youtube size={17}/></a></div></div></footer>
  </>;
}
