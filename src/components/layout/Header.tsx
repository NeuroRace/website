"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Badge from "@/components/ui/Badge";
import { FIAP_NEXT, NAV } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled ? "border-b border-slate-800 bg-night/70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/mascote/feliz.jpg"
            alt=""
            width={36}
            height={36}
            className="mascot-fade h-9 w-9 rounded-full object-cover"
          />
          <span className="text-xl font-extrabold tracking-wide text-white">
            NEURO<span className="text-neuro-yellow">RACE</span>
          </span>
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold uppercase tracking-wide text-slate-300 transition hover:text-neuro-yellow"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href={FIAP_NEXT.url} target="_blank" rel="noopener noreferrer">
          <Badge tone="cyan">{FIAP_NEXT.label} 25/26</Badge>
        </a>
      </div>
    </header>
  );
}
