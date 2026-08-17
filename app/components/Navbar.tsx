"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = ["About", "Experience", "Projects", "Tools", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-3 shadow-2xl shadow-black/20">
        <a href="#home" className="text-lg font-black tracking-tight">NS<span className="text-[#c8ff3d]">.</span></a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-zinc-400 transition hover:text-white">{link}</a>)}
        </div>
        <a href="#contact" className="hidden rounded-xl bg-[#c8ff3d] px-4 py-2 text-sm font-bold text-black transition hover:scale-105 md:block">Let’s talk ↗</a>
        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="rounded-xl p-2 md:hidden">{open ? <X size={20}/> : <Menu size={20}/>}</button>
      </nav>
      {open && <div className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-4 md:hidden">{links.map(link => <a onClick={() => setOpen(false)} key={link} href={`#${link.toLowerCase()}`} className="block rounded-xl px-3 py-3 text-zinc-300 hover:bg-white/5">{link}</a>)}</div>}
    </header>
  );
}
