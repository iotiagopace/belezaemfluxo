"use client";

import { useState } from "react";
import Image from "next/image";
import ModelPageBar from "@/components/ModelPageBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const categorias = [
  {
    id: "cabelo",
    label: "Cabelo",
    servicos: [
      { nome: "Corte feminino", valor: "R$ 120" },
      { nome: "Corte masculino", valor: "R$ 80" },
      { nome: "Coloração", valor: "A partir de R$ 250" },
      { nome: "Mechas / Balayage", valor: "A partir de R$ 480" },
      { nome: "Hidratação profunda", valor: "R$ 150" },
      { nome: "Botox capilar", valor: "R$ 220" },
    ],
  },
  {
    id: "unhas",
    label: "Unhas",
    servicos: [
      { nome: "Manicure tradicional", valor: "R$ 45" },
      { nome: "Pedicure completa", valor: "R$ 65" },
      { nome: "Esmaltação em gel", valor: "R$ 90" },
      { nome: "Unhas em fibra", valor: "R$ 180" },
      { nome: "Nail art", valor: "A partir de R$ 40" },
    ],
  },
  {
    id: "maquiagem",
    label: "Maquiagem",
    servicos: [
      { nome: "Maquiagem social", valor: "R$ 180" },
      { nome: "Maquiagem para noiva", valor: "R$ 480" },
      { nome: "Maquiagem infantil", valor: "R$ 120" },
      { nome: "Design de sobrancelhas", valor: "R$ 60" },
    ],
  },
];

const equipe = [
  {
    nome: "Rafael Costa",
    role: "Diretor criativo",
    foto:
      "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?auto=format&fit=crop&w=800&q=80",
  },
  {
    nome: "Aline Reis",
    role: "Colorista",
    foto:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
  {
    nome: "Bruna Yamada",
    role: "Manicure e nail art",
    foto:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
  },
  {
    nome: "Marina Alves",
    role: "Maquiadora",
    foto:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  },
];

const galeria = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1560869713-7d0954430889?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=900&q=80",
];

export default function MovimentoPage() {
  const [tab, setTab] = useState(categorias[0].id);
  const active = categorias.find((c) => c.id === tab) ?? categorias[0];

  return (
    <div
      className="min-h-screen bg-white text-neutral-900"
      style={{ fontFamily: "'Space Grotesk', 'Inter', sans-serif" }}
    >
      <ModelPageBar modeloNome="Movimento" modeloSlug="movimento" />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=2000&q=80"
            alt=""
            fill
            priority
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>
        <div className="relative container-max py-24 md:py-36">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#c98a7a]">
            Salão de Beleza · Zona Sul SP
          </p>
          <h1 className="mt-6 text-6xl md:text-8xl font-bold leading-[0.95] tracking-tight">
            Studio
            <br />
            <span className="text-[#c98a7a]">Movimento</span>
          </h1>
          <p className="mt-8 max-w-lg text-lg text-neutral-300">
            Cabelo, unhas e maquiagem em um só lugar, com quatro profissionais
            especialistas e agenda organizada em minutos.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-black hover:bg-[#c98a7a] hover:text-white"
            >
              Agendar agora
            </a>
            <a
              href="#servicos"
              className="border border-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black"
            >
              Ver serviços
            </a>
          </div>
          <div className="mt-14 grid grid-cols-3 gap-6 border-t border-white/20 pt-8 md:grid-cols-4">
            {["+2000 clientes", "4 profissionais", "3 categorias", "6 dias/semana"].map((s) => (
              <div key={s} className="text-xs uppercase tracking-widest text-neutral-400">
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços por categoria */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container-max">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#7c1d3f]">
            O que fazemos
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Serviços por categoria.
          </h2>

          <div className="mt-12">
            <div className="flex flex-wrap gap-2 border-b border-neutral-200 pb-2">
              {categorias.map((cat) => {
                const isActive = tab === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setTab(cat.id)}
                    className={`px-5 py-3 text-sm font-bold uppercase tracking-widest border-b-2 transition ${
                      isActive
                        ? "border-[#7c1d3f] text-black"
                        : "border-transparent text-neutral-500 hover:text-black"
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
            <div className="mt-8 grid gap-x-8 gap-y-3 md:grid-cols-2">
              {active.servicos.map((s) => (
                <div
                  key={s.nome}
                  className="flex items-baseline justify-between border-b border-dotted border-neutral-300 pb-3"
                >
                  <span className="font-medium">{s.nome}</span>
                  <span className="text-sm font-bold text-[#7c1d3f]">
                    {s.valor}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="bg-black py-20 text-white">
        <div className="container-max">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#c98a7a]">
            Quem faz
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Nossa equipe.
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {equipe.map((p) => (
              <article key={p.nome} className="group relative overflow-hidden">
                <div className="relative aspect-[3/4]">
                  <Image src={p.foto} alt={p.nome} fill className="object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-5">
                    <div className="text-lg font-bold uppercase tracking-wide">{p.nome}</div>
                    <div className="mt-1 text-xs uppercase tracking-widest text-neutral-300">
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
      <section className="py-20 bg-white">
        <div className="container-max">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#7c1d3f]">
            Galeria
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold uppercase tracking-tight">
            Trabalhos recentes.
          </h2>
          <div className="mt-10 grid gap-2 sm:grid-cols-2 md:grid-cols-4">
            {galeria.map((src, i) => (
              <div key={src} className="relative aspect-square overflow-hidden">
                <Image
                  src={src}
                  alt={`Foto ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="bg-[#f5f5f5] py-20">
        <div className="container-max grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#7c1d3f]">
              Estamos aqui
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold uppercase tracking-tight">
              Onde encontrar.
            </h2>
            <div className="mt-8 grid gap-3">
              <p className="text-lg">
                Av. dos Estados, 1420 · Vila Mariana · São Paulo · SP
              </p>
              <div className="text-sm text-neutral-600">
                <p>Segunda a sexta — 10h às 21h</p>
                <p>Sábado — 9h às 19h</p>
                <p>Domingo — sob agendamento</p>
              </div>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden bg-neutral-200">
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
      <section className="bg-[#7c1d3f] py-20 text-white">
        <div className="container-max flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight">
              Reserve seu horário.
            </h2>
            <p className="mt-3 text-lg text-white/80">
              Atendimento com hora marcada. Chame no WhatsApp e nós retornamos.
            </p>
          </div>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="bg-white px-10 py-5 text-sm font-bold uppercase tracking-widest text-[#7c1d3f]"
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
