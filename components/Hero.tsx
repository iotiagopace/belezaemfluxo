"use client";

import { motion, useReducedMotion } from "framer-motion";
import ShinyText from "@/components/ShinyText";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { ArrowRight } from "@/components/icons";

const stats = [
  { num: "6", label: "modelos prontos para escolher" },
  { num: "r$ 1.000", label: "página profissional" },
  { num: "r$ 1.200", label: "página + gestão de contatos" },
  { num: "10x", label: "pagamento no cartão" },
];

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Hero() {
  const reduced = useReducedMotion();
  const fade = (delay = 0) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: EASE, delay },
        };

  return (
    <section className="relative isolate overflow-hidden bg-black pt-32 md:pt-40">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(164,244,253,0.18), transparent 40%), radial-gradient(ellipse at 70% 70%, rgba(0,210,255,0.12), transparent 45%)",
        }}
      />
      <div className="container-max pb-24 md:pb-32">
        <motion.p className="section-label mb-8" {...fade(0)}>
          / beleza em fluxo · by metry
        </motion.p>

        <motion.h1
          className="display text-white text-5xl md:text-8xl max-w-6xl leading-[0.95]"
          {...fade(0.15)}
        >
          uma <ShinyText>página profissional</ShinyText> pro seu trabalho.
          contatos no lugar certo pro seu negócio.
        </motion.h1>

        <motion.p
          className="mt-10 max-w-2xl text-white/70 text-lg md:text-xl leading-relaxed"
          {...fade(0.35)}
        >
          escolha um modelo pensado pra beleza. a metry personaliza com sua
          marca, fotos e serviços. no plano completo, você também recebe um
          crm pra acompanhar quem chega.
        </motion.p>

        <motion.div className="mt-10 flex flex-wrap gap-3" {...fade(0.55)}>
          <a href="#modelos" className="btn-primary">
            ver os modelos disponíveis
            <ArrowRight size={16} />
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
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl border-t border-white/10 pt-8"
          {...fade(0.7)}
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="display text-white text-2xl md:text-4xl lg:text-5xl">
                {s.num}
              </span>
              <span className="text-white/50 text-xs uppercase tracking-widest leading-snug">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.p
          className="mt-14 max-w-2xl text-xs text-white/50 lowercase leading-relaxed"
          {...fade(0.85)}
        >
          serve pra salão, estética, cílios, sobrancelhas, unhas, maquiagem,
          cabelo, barbearia e quem atende sozinho.
        </motion.p>
      </div>
    </section>
  );
}
