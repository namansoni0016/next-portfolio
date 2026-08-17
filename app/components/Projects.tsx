import { ArrowUpRight, Github, Globe2 } from "lucide-react";
import { Section } from "./Section";

const projects = [
    {
        no: "01",
        title: "TripAI",
        type: "AI • Full Stack",
        desc: "An AI powered travel itinerary generator made using Nextjs, Typescript, Neon, Prisma and Groq AI along with rate limiter that allows users to create itineraries and provides functionality of interactive maps to get locations.",
        tags: ["Next.js", "TypeScript", "AI", "Tailwind"],
        githubUrl: "https://github.com/namansoni0016/tripAI",
        liveUrl: "https://trip-ai-ten.vercel.app/",
    },
    {
        no: "02",
        title: "Estate Edge",
        type: "Product • Web App",
        desc: "A MERN stack real estate website allowing users to list properties for sale or rent. Integrated Firebase for storing images, implemented secure user authentication with JWT and Google OAuth. Developed features like advanced property search and image upload.",
        tags: ["React.js", "Node.js", "MongoDB", "Tailwind"],
        githubUrl: "https://github.com/namansoni0016/estateEdge",
        liveUrl: "https://estateedge.onrender.com/",
    },
    {
        no: "03",
        title: "Money Mate",
        type: "Product • Web App",
        desc: "A MERN stack expense tracker application, incorporating Redux and React Query. Implemented a robust category-based system allowing users to create and manage income and expense categories, and dynamically link transactions to these categories.",
        tags: ["React.js", "Node.js", "MongoDB", "Redux"],
        githubUrl: "https://github.com/namansoni0016/expense-tracker",
        liveUrl: "https://moneymate-mu.vercel.app/",
    },
];

export function Projects() {
    return (
        <Section
            id="projects"
            eyebrow="03 / Selected work"
            title="Small list. High signal."
        >
            <div className="grid gap-5 md:grid-cols-3">
                {projects.map((project) => (
                    <article key={project.no} className="group flex min-h-107.5 flex-col justify-between rounded-[1.75rem] border border-white/10 bg-white/2.5 p-6 transition duration-500 hover:-translate-y-2 hover:border-[#c8ff3d]/40 hover:bg-[#c8ff3d]/[.035]">
                        <div>
                            <div className="flex justify-between text-xs text-zinc-600">
                                <span>{project.no}</span>
                                <ArrowUpRight
                                    size={16}
                                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#c8ff3d]"
                                />
                            </div>
                            <p className="mt-12 text-xs font-bold uppercase tracking-[.2em] text-[#c8ff3d]">
                                {project.type}
                            </p>
                            <h3 className="mt-3 text-3xl font-black tracking-tight">
                                {project.title}
                            </h3>
                            <p className="mt-5 leading-7 text-zinc-500">
                                {project.desc}
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-zinc-400"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="mt-6 flex gap-3">
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 text-sm font-semibold text-zinc-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                            >
                                <Github size={16} />
                                GitHub
                            </a>

                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#c8ff3d] px-4 py-3 text-sm font-bold text-black transition hover:scale-[1.02] hover:bg-[#d5ff69]"
                            >
                                <Globe2 size={16} />
                                Live Demo
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    );
}