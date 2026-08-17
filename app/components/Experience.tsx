import { Section } from "./Section";

const experience = [
    {
        period: "Dec 2025 — Present",
        role: "Full Stack Developer",
        company: "Product & Web Engineering",
        text: "Building production web applications end-to-end — from responsive interfaces and APIs to databases, deployments and cloud infrastructure.",
    },
    {
        period: "Jun 2023 — Dec 2023",
        role: "Product Manager",
        company: "ICICI Bank",
        text: "Worked across product thinking, stakeholder collaboration and execution, translating business problems into usable digital experiences.",
    },
];

export function Experience() {
    return (
        <Section
            id="experience"
            eyebrow="02 / Experience"
            title="A hybrid background that shapes how I build."
        >
            <div className="space-y-0 border-t border-white/10">
                {experience.map((item, index) => (
                    <article
                        key={`${item.company}-${item.role}`}
                        className="grid gap-5 border-b border-white/10 py-9 md:grid-cols-[.35fr_1fr] md:gap-16"
                    >
                        <div className="flex items-start justify-between text-sm text-zinc-500 md:block">
                            <span>{item.period}</span>
                            <span className="md:hidden">
                                0{index + 1}
                            </span>
                        </div>

                        <div>
                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="text-xs uppercase tracking-[.2em] text-[#c8ff3d]">
                                        {item.company}
                                    </p>
                                    <h3 className="mt-2 text-2xl font-bold tracking-tight">
                                        {item.role}
                                    </h3>
                                </div>
                                <span className="hidden text-zinc-700 md:block">
                                    0{index + 1}
                                </span>
                            </div>

                            <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
                                {item.text}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    );
}