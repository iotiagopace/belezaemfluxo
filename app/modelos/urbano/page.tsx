import type { Metadata } from "next";
import Image from "next/image";
import ModelPageBar from "@/components/ModelPageBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Modelo Urbano — Barbearias",
  description:
    "Demonstração do modelo Urbano. Direto, forte e contemporâneo — ideal para barbearias, salões unissex e profissionais de cabelo.",
};

const servicos = [
  { nome: "Corte na tesoura", tempo: "45 min", valor: "R$ 70" },
  { nome: "Corte na máquina", tempo: "30 min", valor: "R$ 50" },
  { nome: "Barba completa", tempo: "40 min", valor: "R$ 55" },
  { nome: "Barba + Corte", tempo: "1h 15", valor: "R$ 110" },
  { nome: "Pigmentação de barba", tempo: "50 min", valor: "R$ 90" },
  { nome: "Sobrancelha", tempo: "15 min", valor: "R$ 25" },
  { nome: "Combo Executivo", tempo: "1h 30", valor: "R$ 160" },
  { nome: "Kids (até 12)", tempo: "30 min", valor: "R$ 45" },
];

const equipe = [
  {
    nome: "Diego Camargo",
    role: "Fundador · Master barber",
    foto:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    nome: "Bruno Tavares",
    role: "Barbeiro · Especialista em degradê",
    foto:
      "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?auto=format&fit=crop&w=800&q=80",
  },
  {
    nome: "Lucas Prado",
    role: "Barbeiro · Barba longa",
    foto:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80",
  },
  {
    nome: "Kaio Ribeiro",
    role: "Cabeleireiro · Feminino & masculino",
    foto:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&q=80",
  },
];

const ambiente = [
  "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1512690894584-cbf05c99a691?auto=format&fit=crop&w=1000&q=80",
];

export default function UrbanoPage() {
  return (
    <div
      className="min-h-screen bg-black text-white"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <ModelPageBar modeloNome="Urbano" modeloSlug="urbano" />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=80"
          alt="Interior da barbearia"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="relative container-max grid gap-8 py-24 md:py-40">
          <p
            className="text-xs uppercase tracking-[0.5em] text-[#c8102e]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Barbearia · Zona Oeste SP
          </p>
          <h1
            className="max-w-4xl text-7xl leading-[0.9] md:text-9xl uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
          >
            Concreto
            <br />
            <span className="text-[#c8102e]">Barber Co.</span>
          </h1>
          <p className="max-w-lg text-lg text-neutral-300">
            Corte no capricho, barba na régua e um café na régua também. Aberto
            seis dias por semana, com agendamento em 30 segundos pelo WhatsApp.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="bg-[#c8102e] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.95rem" }}
            >
              Agendar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="border border-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "0.95rem" }}
            >
              Ver preços
            </a>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20">
        <div className="container-max">
          <p
            className="text-xs uppercase tracking-[0.5em] text-[#c8102e]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Preços
          </p>
          <h2
            className="mt-4 text-5xl md:text-6xl uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
          >
            Tabela direta.
          </h2>
          <div className="mt-12 border-t border-white/10">
            {servicos.map((s) => (
              <div
                key={s.nome}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-white/10 py-4 text-lg md:text-xl"
              >
                <div
                  className="uppercase font-semibold"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {s.nome}
                </div>
                <div className="text-xs uppercase tracking-widest text-neutral-500">
                  {s.tempo}
                </div>
                <div
                  className="text-[#c8102e] font-bold"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {s.valor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="bg-[#1f1f1f] py-20">
        <div className="container-max">
          <p
            className="text-xs uppercase tracking-[0.5em] text-[#c8102e]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Time
          </p>
          <h2
            className="mt-4 text-5xl md:text-6xl uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
          >
            Quem cuida do corte.
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {equipe.map((p) => (
              <article key={p.nome} className="relative overflow-hidden bg-black">
                <div className="relative aspect-[3/4]">
                  <Image src={p.foto} alt={p.nome} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <div
                    className="text-xl uppercase font-bold"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    {p.nome}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-neutral-400">
                    {p.role}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ambiente */}
      <section className="py-20">
        <div className="container-max">
          <p
            className="text-xs uppercase tracking-[0.5em] text-[#c8102e]"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Ambiente
          </p>
          <h2
            className="mt-4 text-5xl md:text-6xl uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
          >
            A casa.
          </h2>
          <div className="mt-10 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {ambiente.map((src, i) => (
              <div key={src} className="relative aspect-square overflow-hidden">
                <Image src={src} alt={`Ambiente ${i + 1}`} fill className="object-cover transition duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="bg-[#1f1f1f] py-20">
        <div className="container-max grid gap-10 lg:grid-cols-2">
          <div>
            <p
              className="text-xs uppercase tracking-[0.5em] text-[#c8102e]"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Como chegar
            </p>
            <h2
              className="mt-4 text-5xl md:text-6xl uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
            >
              Onde estamos.
            </h2>
            <div className="mt-8 space-y-4">
              <div className="border-l-2 border-[#c8102e] pl-4">
                <div className="text-xs uppercase tracking-widest text-neutral-400">
                  Endereço
                </div>
                <div className="mt-1 text-lg">
                  Av. Rebouças, 3080 · Pinheiros · São Paulo
                </div>
              </div>
              <div className="border-l-2 border-[#c8102e] pl-4">
                <div className="text-xs uppercase tracking-widest text-neutral-400">
                  Horário
                </div>
                <div className="mt-1 text-lg">
                  Seg a sáb — 10h às 21h · Dom fechado
                </div>
              </div>
              <div className="border-l-2 border-[#c8102e] pl-4">
                <div className="text-xs uppercase tracking-widest text-neutral-400">
                  Como chegar
                </div>
                <div className="mt-1 text-lg">
                  Metrô Faria Lima · a 4 min a pé · estacionamento parceiro
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden">
            <iframe
              title="Mapa da barbearia"
              src="https://maps.google.com/maps?q=Av.%20Reboucas%2C%20S%C3%A3o%20Paulo&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full grayscale"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-[#c8102e] py-16">
        <div className="container-max flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2
            className="text-4xl md:text-6xl uppercase leading-none"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
          >
            Chegou. Sentou. Cortou.
          </h2>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="bg-black px-10 py-5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem" }}
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      <footer className="bg-black py-8 text-center text-xs text-neutral-500">
        Modelo demonstrativo · Beleza em Fluxo by Metry
      </footer>

      <FloatingWhatsApp
        context={{ kind: "modelo", modelo: "urbano" }}
        origin="template-urbano"
      />
    </div>
  );
}
