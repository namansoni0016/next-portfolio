import { Section } from "./Section";

const experience = [
    {
        period: "Dec 2025 — Present",
        role: "Full Stack Developer",
        company: "Zlines",
        text: "Built reusable frontend components, shared UI utilities and optimized data-fetching strategies, reducing redundant API requests and improving application performance. Designed a module-level role-based access control (RBAC) system. Optimized the generation pipeline with query batching and parallel I/O.",
    },
    {
        period: "Jun 2023 — Dec 2023",
        role: "Product Manager",
        company: "ICICI Bank",
        text: "Prepared BRS and test cases for trade finance projects, collaborating with cross-functional teams to ensure project alignment and efficient execution. Led successful development of TradeOnline, migrations of InstaEPC to NTS, and Helpdesk to iCRM, improving system performance and user experience through rigorous UAT and issue resolution.",
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
                    <article key={`${item.company}-${item.role}`} className="grid gap-5 border-b border-white/10 py-9 md:grid-cols-[.35fr_1fr] md:gap-16">
                        <div className="flex items-start justify-between text-sm text-zinc-400 md:block">
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
                                <span className="hidden text-zinc-400 md:block">
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