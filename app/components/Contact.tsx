import {
    Github,
    Linkedin,
    Mail,
    MapPin,
    Sparkles,
} from "lucide-react";
import { Section } from "./Section";

export function Contact() {
    return (
        <Section
            id="contact"
            eyebrow="05 / Contact"
            title="Have a problem worth solving? Let’s build it."
        >
            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-[#c8ff3d] p-8 text-black md:p-14">
                <Sparkles
                    className="absolute right-8 top-8 opacity-30"
                    size={80}
                />
                <p className="max-w-2xl text-3xl font-black tracking-tight md:text-6xl">
                    Good work starts with a good conversation.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                    <a href="mailto:hello@example.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 font-bold text-white transition hover:scale-105">
                        <Mail size={17} />
                        Email me
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-black/20 px-6 py-3 font-bold transition hover:bg-black/10"
                    >
                        <Linkedin size={17} />
                        LinkedIn
                    </a>
                </div>

                <div className="mt-14 flex flex-wrap gap-5 text-sm font-medium">
                    <span className="flex items-center gap-2">
                        <MapPin size={15} />
                        Ahmedabad, India
                    </span>
                    <span className="flex items-center gap-2">
                        <Github size={15} />
                        github.com/namansoni
                    </span>
                </div>
            </div>
        </Section>
    );
}