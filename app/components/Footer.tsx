import {
    Github,
    Linkedin,
    Youtube,
} from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 px-5 py-8 md:px-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
                <span>
                    © 2026 Naman Soni. Built with intent.
                </span>

                <div className="flex gap-4">
                    <a
                        href="https://github.com"
                        className="transition hover:text-white"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <Github size={17} />
                    </a>
                    <a
                        href="https://linkedin.com"
                        className="transition hover:text-white"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={17} />
                    </a>
                    <a
                        href="https://youtube.com"
                        className="transition hover:text-white"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="YouTube"
                    >
                        <Youtube size={17} />
                    </a>
                </div>
            </div>
        </footer>
    );
}