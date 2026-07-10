"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { href: "#modelos", label: "modelos" },
  { href: "#cases", label: "cases" },
  { href: "#crm", label: "gestão de contatos" },
  { href: "#planos", label: "planos" },
  { href: "#faq", label: "dúvidas" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        scrolled ? "bg-black/85 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container-max flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-center gap-2">
          <span className="display text-xl md:text-2xl">
            beleza em fluxo
          </span>
          <span className="text-xs text-white/40 lowercase">by metry</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/70 hover:text-white lowercase">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a href="#modelos" className="btn-primary text-sm">
            escolher meu modelo
          </a>
        </div>
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white"
          aria-label="abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black">
          <div className="container-max py-4 grid gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/80 lowercase">
                {l.label}
              </a>
            ))}
            <a href="#modelos" className="btn-primary text-sm mt-2" onClick={() => setOpen(false)}>
              escolher meu modelo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
