import { ArrowDownRight, Download } from "lucide-react";

export function Hero() {
    return (
        <section id="home" className="relative min-h-screen overflow-hidden px-5 pt-32 md:px-8 md:pt-32">
            <div className="grid-bg absolute inset-0" />
            <div className="absolute left-1/2 top-32 h-80 w-80 -translate-x-1/2 rounded-full bg-[#c8ff3d]/10 blur-[120px]" />
            <div className="relative mx-auto flex min-h-[calc(100vh-10rem)] max-w-7xl flex-col justify-center">
                <div className="mb-8 flex items-center justify-center gap-3 text-sm text-zinc-400">
                    <span className="h-2 w-2 rounded-full bg-[#c8ff3d] shadow-[0_0_18px_#c8ff3d]" />
                    Available for interesting work
                </div>

                <div className="text-center">
                    <h1 className="text-[clamp(4rem,11vw,10.5rem)] font-black leading-[.83] tracking-[-0.075em]">
                        NAMAN SONI
                        <br />
                        <span className="text-[#c8ff3d]">
                            Software Engineer
                        </span>
                        <br />
                    </h1>

                    <p className="mx-auto mt-12 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
                        I’m a versatile Software Engineer who blends engineering,
                        product thinking and obsessive attention to detail
                        to make the web feel better.
                    </p>
                    <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        {/* Explore Work */}
                        <a href="#projects" className="group flex w-fit items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold transition duration-300 hover:border-[#c8ff3d] hover:bg-[#c8ff3d] hover:text-black">
                            Explore work
                            <ArrowDownRight
                                size={17}
                                className="transition duration-300 group-hover:rotate-45"
                            />
                        </a>
                        {/* Download Resume */}
                        <a
                            href="/resume.pdf"
                            download="Naman-Soni-Resume.pdf"
                            className="group flex w-fit items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-300 transition duration-300 hover:border-white/30 hover:bg-[#c8ff3d] hover:text-black"
                        >
                            Download Resume
                            <Download
                                size={17}
                                className="transition duration-300 group-hover:translate-y-0.5"
                            />
                        </a>
                    </div>
                </div>

                <div className="mt-24 overflow-hidden border-y border-white/10 py-4">
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