import { ArrowDownRight } from "lucide-react";

export function Hero() {
    return (
        <section id="home" className="relative min-h-screen overflow-hidden px-5 pt-32 md:px-8 md:pt-40">
            <div className="grid-bg absolute inset-0" />
            <div className="absolute left-1/2 top-32 h-80 w-80 -translate-x-1/2 rounded-full bg-[#c8ff3d]/10 blur-[120px]" />
            <div className="relative mx-auto flex max-w-7xl flex-col justify-center pb-24 pt-16 md:min-h-[78vh]">
                <div className="mb-8 flex items-center gap-3 text-sm text-zinc-400">
                    <span className="h-2 w-2 rounded-full bg-[#c8ff3d] shadow-[0_0_18px_#c8ff3d]" />
                    Available for interesting work
                    <span className="text-zinc-600">/</span>
                    Ahmedabad, India
                </div>

                <h1 className="max-w-6xl text-[clamp(4rem,11vw,10.5rem)] font-black leading-[.83] tracking-[-0.075em]">
                    BUILDING
                    <br />
                    <span className="text-[#c8ff3d]">DIGITAL</span>
                    <br />
                    WORLDS
                    <span className="text-zinc-700">.</span>
                </h1>

                <div className="mt-10 grid max-w-4xl gap-8 md:grid-cols-[1fr_auto] md:items-end">
                    <p className="max-w-xl text-lg leading-8 text-zinc-400 md:text-xl">
                        I’m{" "}
                        <strong className="text-white">
                            Naman Soni
                        </strong>
                        , a full stack developer who blends engineering,
                        product thinking and obsessive attention to detail to
                        make the web feel better.
                    </p>

                    <a href="#projects" className="group flex w-fit items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold transition hover:border-[#c8ff3d] hover:bg-[#c8ff3d] hover:text-black">
                        Explore work
                        <ArrowDownRight
                            size={17}
                            className="transition group-hover:rotate-45"
                        />
                    </a>
                </div>

                <div className="mt-20 overflow-hidden border-y border-white/10 py-4">
                    <div className="marquee flex gap-10 text-xs font-bold uppercase tracking-[.25em] text-zinc-600">
                        {Array.from({ length: 2 })
                            .flatMap((_, i) =>
                                [
                                    "FULL STACK",
                                    "PRODUCT MINDSET",
                                    "CLEAN CODE",
                                    "SCALABLE SYSTEMS",
                                    "GOOD UX",
                                    "CURIOUS BY DEFAULT",
                                ].map((item) => (
                                    <span key={`${i}-${item}`}>
                                        {item} ✦
                                    </span>
                                ))
                            )}
                    </div>
                </div>
            </div>
        </section>
    );
}