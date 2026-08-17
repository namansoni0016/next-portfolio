import {
    Code2,
    Globe2,
    Server,
    Terminal,
} from "lucide-react";
import { Section } from "./Section";

const tools = [
    {
        category: "Frontend",
        icon: Code2,
        items: [
            "React.js",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "HTML / CSS",
        ],
    },
    {
        category: "Backend",
        icon: Server,
        items: [
            "Node.js",
            "REST APIs",
            "PostgreSQL",
            "MongoDB",
            "Authentication",
        ],
    },
    {
        category: "Cloud & DevOps",
        icon: Globe2,
        items: [
            "AWS",
            "Vercel",
            "Git / GitHub",
            "CI / CD",
            "Linux",
        ],
    },
    {
        category: "Workflow",
        icon: Terminal,
        items: [
            "Figma",
            "Jest",
            "Postman",
            "VS Code",
            "AI tooling",
        ],
    },
];

export function Tools() {
    return (
        <Section
            id="tools"
            eyebrow="04 / Tools & technologies"
            title="My everyday building blocks."
        >
            <div className="grid border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-4">
                {tools.map(({ category, icon: Icon, items }) => (
                    <div key={category} className="border-b border-r border-white/10 p-6 md:p-8">
                        <div className="mb-8 flex items-center gap-3 text-[#c8ff3d]">
                            <Icon size={20} />
                            <span className="text-sm font-bold">
                                {category}
                            </span>
                        </div>

                        <ul className="space-y-4">
                            {items.map((item) => (
                                <li key={item} className="flex items-center gap-3 text-zinc-400">
                                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}