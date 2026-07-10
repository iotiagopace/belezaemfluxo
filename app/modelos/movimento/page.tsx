"use client";

import { useState } from "react";
import Image from "next/image";
import ModelPageBar from "@/components/ModelPageBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const IMG = {
  hero: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=85",
  team: [
    "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=85",
  ],
  galeria: [
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1595475207225-428b62bda831?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1500840216050-6ffa99d75160?auto=format&fit=crop&w=900&q=85",
  ],
};

const categorias = [
  { id: "cabelo", label: "Cabelo", servicos: [
    { nome: "Corte feminino", valor: "R$ 120" },
    { nome: "Corte masculino", valor: "R$ 80" },
    { nome: "Coloração completa", valor: "A partir de R$ 250" },
    { nome: "Mechas / Balayage", valor: "A partir de R$ 480" },
    { nome: "Hidratação profunda", valor: "R$ 150" },
    { nome: "Botox capilar", valor: "R$ 220" },
  ]},
  { id: "unhas", label: "Unhas", servicos: [
    { nome: "Manicure tradicional", valor: "R$ 45" },
    { nome: "Pedicure completa", valor: "R$ 65" },
    { nome: "Esmaltação em gel", valor: "R$ 90" },
    { nome: "Unhas em fibra", valor: "R$ 180" },
    { nome: "Nail art", valor: "A partir de R$ 40" },
  ]},
  { id: "maquiagem", label: "Maquiagem", servicos: [
    { nome: "Maquiagem social", valor: "R$ 180" },
    { nome: "Maquiagem para noiva", valor: "R$ 480" },
    { nome: "Maquiagem infantil", valor: "R$ 120" },
    { nome: "Design de sobrancelhas", valor: "R$ 60" },
  ]},
];

const equipe = [
  { nome: "Rafael Costa", role: "Diretor criativo · cabelo", foto: IMG.team[0] },
  { nome: "Aline Reis", role: "Colorista", foto: IMG.team[1] },
  { nome: "Bruna Yamada", role: "Nail artist", foto: IMG.team[2] },
  { nome: "Marina Alves", role: "Maquiadora", foto: IMG.team[3] },
];

export default function MovimentoPage() {
  const [tab, setTab] = useState(categorias[0].id);
  const active = categorias.find((c) => c.id === tab) ?? categorias[0];

  return (
    <div className="model-page model-movimento min-h-screen bg-white text-neutral-900" style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}>
      <ModelPageBar modeloNome="Movimento" modeloSlug="movimento" />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <Image
            src={IMG.hero}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        </div>
        <div className="relative container-max py-28 md:py-40">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#e6c1b5] font-semibold">
            Salão de Beleza · Zona Sul SP
          </p>
          <h1 className="mt-7 text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight">
            Studio
            <br />
            <span className="text-[#e6c1b5]">Movimento</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg md:text-xl text-white/90 leading-relaxed">
            Cabelo, unhas e maquiagem em um só lugar, com quatro profissionais
            especialistas e agenda organizada em minutos.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-black hover:bg-[#e6c1b5] hover:text-black transition-colors"
            >
              Agendar agora
            </a>
            <a
              href="#servicos"
              className="border-2 border-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors"
            >
              Ver serviços
            </a>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/20 pt-8 md:grid-cols-4 max-w-3xl">
            {[
              { n: "+2.000", l: "clientes ativas" },
              { n: "4", l: "profissionais" },
              { n: "3", l: "categorias" },
              { n: "6 dias", l: "por semana" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl md:text-3xl font-bold">{s.n}</div>
                <div className="mt-1 text-[11px] uppercase tracking-widest text-white/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24 md:py-28 bg-white">
        <div className="container-max">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#7c1d3f] font-semibold">
            O que fazemos
          </p>
          <h2 className="mt-5 text-4xl md:text-6xl font-bold uppercase tracking-tight">
            Serviços por categoria.
          </h2>
          <div className="mt-12">
            <div className="flex flex-wrap gap-2 border-b border-neutral-200">
              {categorias.map((cat) => {
                const isActive = tab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setTab(cat.id)}
                    className={`px-6 py-4 text-sm font-bold uppercase tracking-widest border-b-2 transition-all ${
                      isActive
                        ? "border-[#7c1d3f] text-black"
                        : "border-transparent text-neutral-500 hover:text-neutral-900"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
            <div className="mt-10 grid gap-x-10 gap-y-4 md:grid-cols-2">
              {active.servicos.map((s) => (
                <div
                  key={s.nome}
                  className="flex items-baseline justify-between border-b border-dotted border-neutral-300 pb-3"
                >
                  <span className="font-semibold text-neutral-900">{s.nome}</span>
                  <span className="text-sm font-bold text-[#7c1d3f] whitespace-nowrap">
                    {s.valor}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="bg-black py-24 md:py-28 text-white">
        <div className="container-max">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#e6c1b5] font-semibold">
            Quem faz
          </p>
          <h2 className="mt-5 text-4xl md:text-6xl font-bold uppercase tracking-tight">
            Nossa equipe.
          </h2>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {equipe.map((p) => (
              <article key={p.nome} className="group relative overflow-hidden">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={p.foto}
                    alt={p.nome}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6">
                    <div className="text-lg font-bold uppercase tracking-wide">{p.nome}</div>
                    <div className="mt-1 text-xs uppercase tracking-widest text-white/70">
                      {p.role}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-24 md:py-28 bg-white">
        <div className="container-max">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#7c1d3f] font-semibold">
            Galeria
          </p>
          <h2 className="mt-5 text-4xl md:text-6xl font-bold uppercase tracking-tight">
            Trabalhos recentes.
          </h2>
          <div className="mt-10 grid gap-2 sm:grid-cols-2 md:grid-cols-4">
            {IMG.galeria.map((src, i) => (
              <div key={src} className="relative aspect-square overflow-hidden group">
                <Image
                  src={src}
                  alt={`Foto ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="bg-[#f5f5f5] py-24 md:py-28">
        <div className="container-max grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#7c1d3f] font-semibold">
              Estamos aqui
            </p>
            <h2 className="mt-5 text-4xl md:text-6xl font-bold uppercase tracking-tight">
              Onde encontrar.
            </h2>
            <div className="mt-8 grid gap-3">
              <p className="text-lg font-semibold text-neutral-900">
                Av. dos Estados, 1420 · Vila Mariana · São Paulo · SP
              </p>
              <div className="text-sm text-neutral-700 leading-relaxed">
                <p>Segunda a sexta — 10h às 21h</p>
                <p>Sábado — 9h às 19h</p>
                <p>Domingo — sob agendamento</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden bg-neutral-200 rounded-xl">
            <iframe
              title="Mapa do salão"
              src="https://maps.google.com/maps?q=Av.%20Paulista%2C%20S%C3%A3o%20Paulo&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#7c1d3f] py-24 text-white">
        <div className="container-max flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-none">
              Reserve seu horário.
            </h2>
            <p className="mt-4 text-lg text-white/85">
              Atendimento com hora marcada. Chame no WhatsApp e nós retornamos.
            </p>
          </div>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="bg-white px-10 py-5 text-sm font-bold uppercase tracking-widest text-[#7c1d3f] hover:bg-black hover:text-white transition-colors whitespace-nowrap"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-black py-8 text-center text-xs text-neutral-500">
        Modelo demonstrativo · Beleza em Fluxo by Metry
      </footer>

      <FloatingWhatsApp
        context={{ kind: "modelo", modelo: "movimento" }}
        origin="template-movimento"
      />
    </div>
  );
}
