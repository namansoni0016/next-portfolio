import { Section } from "./Section";

const strengths = [
    ["01", "Full stack", "Frontend to database to deployment."],
    ["02", "Product", "I think about the why, not just the how."],
    ["03", "Performance", "Fast experiences are part of good UX."],
    ["04", "Curiosity", "Always learning, shipping and experimenting."],
];

export function About() {
    return (
        <Section
            id="about"
            eyebrow="01 / About"
            title="Engineer by craft. Product thinker by instinct."
        >
            <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-center">
                <div className="relative mx-auto aspect-4/5 w-full max-w-md overflow-hidden rounded-4xl border border-white/10 bg-zinc-900 glow">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_25%,rgba(200,255,61,.35),transparent_28%),linear-gradient(145deg,#17171c,#07070a)]" />
                    <div className="absolute inset-x-10 bottom-0 top-20 rounded-t-[45%] border border-white/10 bg-linear-to-b from-zinc-600/30 to-zinc-950/80" />
                    <div className="absolute left-1/2 top-[29%] h-28 w-28 -translate-x-1/2 rounded-full bg-zinc-700/80 shadow-2xl" />
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur">
                        <span className="text-xs text-zinc-400">
                            PROFILE / 2026
                        </span>

                        <span className="text-xs font-bold text-[#c8ff3d]">
                            NS_01
                        </span>
                    </div>
                </div>
                <div>
                    <p className="text-xl leading-9 text-zinc-300 md:text-2xl">
                        I like taking messy ideas and turning them into interfaces
                        and systems that are fast, understandable and genuinely
                        useful.
                    </p>
                    <div className="mt-10 grid gap-6 sm:grid-cols-2">
                        {strengths.map(([number, title, description]) => (
                            <div
                                key={number}
                                className="border-t border-white/10 pt-4"
                            >
                                <span className="text-xs text-zinc-600">
                                    {number}
                                </span>
                                <h3 className="mt-5 font-bold">{title}</h3>
                                <p className="mt-2 text-sm leading-6 text-zinc-500">
                                    {description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}