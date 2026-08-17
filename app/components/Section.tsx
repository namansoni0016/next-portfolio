import React from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}

export function Section({
  id,
  eyebrow,
  title,
  children,
}: SectionProps) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-24 md:px-8 md:py-32">
      <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#c8ff3d]">
            {eyebrow}
          </p>
          <h2 className="max-w-3xl text-4xl font-black tracking-[-0.04em] md:text-6xl">
            {title}
          </h2>
        </div>
      </div>
      {children}
    </section>
  );
}