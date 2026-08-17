import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

const projects = [
    {
        no: "01",
        title: "Travel Intelligence",
        type: "AI • Full Stack",
        desc: "A conversational travel experience that turns natural-language intent into structured destinations and itineraries.",
        tags: ["Next.js", "TypeScript", "AI", "Tailwind"],
    },
    {
        no: "02",
        title: "Developer OS",
        type: "Product • Web App",
        desc: "A command-centre style workspace for projects, notes, experiments and personal productivity.",
        tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    },
    {
        no: "03",
        title: "Content Studio",
        type: "Creator • CMS",
        desc: "A minimal publishing system for long-form writing, visual stories and travel journals without unnecessary editorial overhead.",
        tags: ["Next.js", "MDX", "Cloudinary", "Vercel"],
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
                            <p className="mt-16 text-xs font-bold uppercase tracking-[.2em] text-[#c8ff3d]">
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
                    </article>
                ))}
            </div>
        </Section>
    );
}