"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight } from "@/components/icons";

const links = [
  { href: "#modelos", label: "Modelos" },
  { href: "#cases", label: "Cases" },
  { href: "#crm", label: "Gestão de contatos" },
  { href: "#planos", label: "Planos" },
  { href: "#faq", label: "Dúvidas" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-[0_1px_0_rgba(0,0,0,0.02)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-max flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="flex items-baseline gap-2" aria-label="Beleza em Fluxo · Página inicial">
          <span className="display text-xl md:text-2xl text-neutral-900">
            beleza em fluxo
          </span>
          <span className="text-xs text-neutral-500 lowercase hidden sm:inline">by metry</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <a
            href="#modelos"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
          >
            Escolher meu modelo
            <ArrowRight size={14} />
          </a>
        </div>
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-900"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`md:hidden overflow-hidden border-t border-neutral-200 bg-white transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-max py-6 grid gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 px-3 rounded-lg text-neutral-800 hover:bg-neutral-50 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#modelos"
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-sm font-medium text-white"
            onClick={() => setOpen(false)}
          >
            Escolher meu modelo
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </header>
  );
}
