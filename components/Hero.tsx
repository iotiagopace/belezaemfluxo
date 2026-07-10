"use client";

import ShinyText from "@/components/ShinyText";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

const stats = [
  { num: "6", label: "modelos criados para beleza" },
  { num: "r$ 1k", label: "página profissional" },
  { num: "r$ 1,2k", label: "página + crm" },
  { num: "10x", label: "no cartão" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black pt-32 md:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(164,244,253,0.15), transparent 40%), radial-gradient(ellipse at 70% 70%, rgba(0,210,255,0.1), transparent 45%)",
        }}
      />
      <div className="container-max pb-24 md:pb-32">
        <p className="section-label mb-8">/ beleza em fluxo · by metry</p>

        <h1 className="display text-white text-5xl md:text-8xl max-w-6xl leading-[0.95]">
          uma <ShinyText>página profissional</ShinyText> para o seu trabalho.
          contatos organizados para o seu negócio.
        </h1>

        <p className="mt-10 max-w-2xl text-white/70 text-lg md:text-xl leading-relaxed">
          escolha um modelo criado para o segmento de beleza. a metry
          personaliza a página com sua marca, fotos e serviços — e conecta um
          crm para você acompanhar cada nova pessoa interessada.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#modelos" className="btn-primary">
            ver os modelos disponíveis
          </a>
          <a
            href={buildWhatsAppUrl({ kind: "geral" })}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            onClick={() => track.whatsappClick("hero")}
          >
            falar com a equipe
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl border-t border-white/10 pt-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="display text-white text-3xl md:text-5xl">{s.num}</span>
              <span className="text-white/50 text-xs uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </div>

        <p className="mt-14 max-w-2xl text-xs text-white/50 lowercase">
          para salões de beleza, espaços de estética, cílios, sobrancelhas,
          unhas, maquiagem, cabelo, barbearias e profissionais independentes.
        </p>
      </div>
    </section>
  );
}
