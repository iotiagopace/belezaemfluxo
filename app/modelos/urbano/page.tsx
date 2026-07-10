import type { Metadata } from "next";
import Image from "next/image";
import ModelPageBar from "@/components/ModelPageBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Modelo Urbano — Barbearias",
  description:
    "Demonstração do modelo Urbano. Direto, forte e contemporâneo — ideal para barbearias, salões unissex e profissionais de cabelo.",
};

const IMG = {
  hero: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=85",
  team: [
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=85",
  ],
  ambiente: [
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1000&q=85",
  ],
};

const servicos = [
  { nome: "Corte na tesoura", tempo: "45 min", valor: "R$ 70" },
  { nome: "Corte na máquina", tempo: "30 min", valor: "R$ 50" },
  { nome: "Barba completa", tempo: "40 min", valor: "R$ 55" },
  { nome: "Barba + Corte", tempo: "1h 15", valor: "R$ 110" },
  { nome: "Pigmentação de barba", tempo: "50 min", valor: "R$ 90" },
  { nome: "Sobrancelha", tempo: "15 min", valor: "R$ 25" },
  { nome: "Combo Executivo", tempo: "1h 30", valor: "R$ 160" },
  { nome: "Kids (até 12 anos)", tempo: "30 min", valor: "R$ 45" },
];

const equipe = [
  { nome: "Diego Camargo", role: "Fundador · Master barber", foto: IMG.team[0] },
  { nome: "Bruno Tavares", role: "Barbeiro · Especialista em degradê", foto: IMG.team[1] },
  { nome: "Lucas Prado", role: "Barbeiro · Barba longa", foto: IMG.team[2] },
  { nome: "Kaio Ribeiro", role: "Cabeleireiro · Feminino & masculino", foto: IMG.team[3] },
];

export default function UrbanoPage() {
  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <ModelPageBar modeloNome="Urbano" modeloSlug="urbano" />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image
          src={IMG.hero}
          alt="Interior da barbearia"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
        <div className="relative container-max grid gap-8 py-28 md:py-40">
          <p
            className="text-xs uppercase tracking-[0.5em] text-[#f8a5a5] font-bold"
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
          <p className="max-w-xl text-lg md:text-xl text-white/90 leading-relaxed">
            Corte no capricho, barba na régua e um café na régua também. Aberto
            seis dias por semana, com agendamento em 30 segundos pelo WhatsApp.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="bg-[#c8102e] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem" }}
            >
              Agendar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="border-2 border-white px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1rem" }}
            >
              Ver preços
            </a>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-white/20 pt-6 md:max-w-2xl">
            {[
              { n: "+8", l: "anos abertos" },
              { n: "4", l: "profissionais" },
              { n: "10k+", l: "cortes feitos" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                  {s.n}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-widest text-white/70">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24 md:py-28">
        <div className="container-max">
          <p
            className="text-xs uppercase tracking-[0.5em] text-[#c8102e] font-bold"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Preços
          </p>
          <h2
            className="mt-5 text-5xl md:text-7xl uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
          >
            Tabela direta.
          </h2>
          <div className="mt-12 border-t border-white/15">
            {servicos.map((s) => (
              <div
                key={s.nome}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-6 border-b border-white/15 py-5 text-lg md:text-xl hover:bg-white/5 transition-colors"
              >
                <div
                  className="uppercase font-semibold"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.5rem" }}
                >
                  {s.nome}
                </div>
                <div className="text-xs uppercase tracking-widest text-white/60 whitespace-nowrap">
                  {s.tempo}
                </div>
                <div
                  className="text-[#c8102e] font-bold whitespace-nowrap"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.75rem" }}
                >
                  {s.valor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="bg-[#1f1f1f] py-24 md:py-28">
        <div className="container-max">
          <p
            className="text-xs uppercase tracking-[0.5em] text-[#c8102e] font-bold"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Time
          </p>
          <h2
            className="mt-5 text-5xl md:text-7xl uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
          >
            Quem cuida do corte.
          </h2>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {equipe.map((p) => (
              <article key={p.nome} className="relative overflow-hidden bg-black group">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={p.foto}
                    alt={p.nome}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
                    <div
                      className="text-2xl uppercase font-bold"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                      {p.nome}
                    </div>
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

      {/* Ambiente */}
      <section className="py-24 md:py-28">
        <div className="container-max">
          <p
            className="text-xs uppercase tracking-[0.5em] text-[#c8102e] font-bold"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Ambiente
          </p>
          <h2
            className="mt-5 text-5xl md:text-7xl uppercase"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
          >
            A casa.
          </h2>
          <div className="mt-12 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
            {IMG.ambiente.map((src, i) => (
              <div key={src} className="relative aspect-square overflow-hidden group">
                <Image
                  src={src}
                  alt={`Ambiente ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="bg-[#1f1f1f] py-24 md:py-28">
        <div className="container-max grid gap-12 lg:grid-cols-2">
          <div>
            <p
              className="text-xs uppercase tracking-[0.5em] text-[#c8102e] font-bold"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              Como chegar
            </p>
            <h2
              className="mt-5 text-5xl md:text-7xl uppercase"
              style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
            >
              Onde estamos.
            </h2>
            <div className="mt-10 space-y-5">
              <div className="border-l-4 border-[#c8102e] pl-5">
                <div className="text-xs uppercase tracking-widest text-white/60 font-semibold">
                  Endereço
                </div>
                <div className="mt-1 text-lg text-white">
                  Av. Rebouças, 3080 · Pinheiros · São Paulo
                </div>
              </div>
              <div className="border-l-4 border-[#c8102e] pl-5">
                <div className="text-xs uppercase tracking-widest text-white/60 font-semibold">
                  Horário
                </div>
                <div className="mt-1 text-lg text-white">
                  Seg a Sáb · 10h às 21h · Dom fechado
                </div>
              </div>
              <div className="border-l-4 border-[#c8102e] pl-5">
                <div className="text-xs uppercase tracking-widest text-white/60 font-semibold">
                  Como chegar
                </div>
                <div className="mt-1 text-lg text-white">
                  Metrô Faria Lima · 4 min a pé · estacionamento parceiro
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-xl">
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
      <section className="bg-[#c8102e] py-20">
        <div className="container-max flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2
            className="text-5xl md:text-7xl uppercase leading-none"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800 }}
          >
            Chegou. Sentou. Cortou.
          </h2>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="bg-black px-10 py-5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors whitespace-nowrap"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "1.1rem" }}
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
