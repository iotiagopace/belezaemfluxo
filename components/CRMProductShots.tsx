"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";

type Shot = {
  id: string;
  label: string;
  caption: string;
  src: string;
  alt: string;
};

const SHOTS: Shot[] = [
  {
    id: "pipeline",
    label: "Pipeline",
    caption:
      "Funil visual em Kanban. Arraste negócios entre etapas, edite valores in-line e filtre por período, dono ou etapa.",
    src: "/images/atriva-pipeline.png",
    alt: "Tela de Pipeline do Atriva CRM — 4 colunas (Novo Lead, Qualificado, Em Contato, Proposta Enviada) com deals de exemplo",
  },
  {
    id: "dashboard",
    label: "Dashboard",
    caption:
      "Visão geral do funil — negócios criados, propostas, taxa de conversão, ticket médio, tempo médio e gargalo do mês.",
    src: "/images/atriva-dashboard.png",
    alt: "Dashboard do Atriva CRM com KPIs, funil de vendas e tarefas do dia",
  },
  {
    id: "tarefas",
    label: "Tarefas",
    caption:
      "Cada oportunidade vira uma tarefa com dono, prazo e prioridade. Nada morre por falta de follow-up.",
    src: "/images/atriva-tarefas.png",
    alt: "Tela de Tarefas do Atriva CRM com lista de atividades por prioridade e prazo",
  },
];

export default function CRMProductShots() {
  const [active, setActive] = useState<string>(SHOTS[0].id);
  const shot = SHOTS.find((s) => s.id === active) ?? SHOTS[0];

  return (
    <div className="mt-24 md:mt-32">
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <p className="section-label mb-4">/ dentro do atriva</p>
            <h3 className="display text-white text-3xl md:text-5xl max-w-2xl">
              a mesma central que a metry usa por dentro.
            </h3>
          </div>
          <p className="max-w-md text-white/60 text-[15px] leading-relaxed">
            três telas que você passa a usar no dia a dia: o funil, os números
            do mês e as tarefas em aberto.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Telas do Atriva CRM">
          {SHOTS.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              role="tab"
              aria-selected={active === s.id}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === s.id
                  ? "bg-white text-black"
                  : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10"
              }`}
            >
              <span
                className={`inline-block h-1.5 w-1.5 rounded-full ${
                  active === s.id ? "bg-black" : "bg-white/40"
                }`}
              />
              {s.label}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Screenshot frame */}
      <Reveal delay={0.15}>
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-2 md:p-3 overflow-hidden">
          <div className="relative w-full overflow-hidden rounded-xl bg-neutral-100" style={{ aspectRatio: "16/10" }}>
            <Image
              key={shot.id}
              src={shot.src}
              alt={shot.alt}
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              className="object-cover object-top transition-opacity duration-300"
              priority
            />
          </div>
        </div>
        <p className="mt-5 max-w-2xl text-white/60 text-[14px] leading-relaxed">
          {shot.caption}
        </p>
      </Reveal>
    </div>
  );
}
