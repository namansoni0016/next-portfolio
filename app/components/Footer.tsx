import {
    Github,
    Linkedin,
} from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 px-4 py-6 sm:px-5 sm:py-8 md:px-8">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 text-xs text-zinc-600 sm:text-sm">
                <span className="whitespace-nowrap">
                    © 2026 Naman Soni.
                </span>

                <div className="flex shrink-0 items-center gap-3 sm:gap-4">
                    <a
                        href="https://github.com/namansoni0016"
                        className="transition hover:text-white"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <Github size={16} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/naman-soni-016/"
                        className="transition hover:text-white"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={16} />
                    </a>
                </div>
            </div>
        </footer>
    );
}