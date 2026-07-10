"use client";

import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { ArrowRight, Check } from "@/components/icons";
import ShinyText from "@/components/ShinyText";
import Reveal from "@/components/Reveal";

const bullets = [
  "retorno em até 1 dia útil",
  "primeira conversa sem compromisso",
  "sem script de vendas. gente falando com gente",
];

export default function FinalCTA() {
  return (
    <section className="section-divider bg-black py-24 md:py-32">
      <div className="container-max grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
        <Reveal>
          <p className="section-label mb-6">/ primeiro passo</p>
          <h2 className="display text-white text-4xl md:text-6xl mb-8">
            vamos entender o que seu <ShinyText>negócio</ShinyText> precisa hoje.
          </h2>
          <p className="text-white/70 text-[16px] leading-relaxed max-w-lg mb-10">
            fala com a metry. a gente entende o seu momento, o que já
            funciona e o que dá pra melhorar. sem enrolação.
          </p>
          <div className="space-y-4 mb-10">
            {bullets.map((b) => (
              <div key={b} className="flex items-center gap-3">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Check size={11} />
                </div>
                <p className="text-white/80 text-[15px] lowercase">{b}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#formulario" className="btn-primary">
              solicitar diagnóstico
              <ArrowRight size={16} />
            </a>
            <a
              href={buildWhatsAppUrl({ kind: "geral" })}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              onClick={() => track.whatsappClick("final-cta")}
            >
              falar pelo whatsapp
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10">
          <p className="section-label mb-6">/ o que cobre</p>
          <h3 className="display text-white text-2xl md:text-4xl">
            página, crm e apresentação num pacote só.
          </h3>
          <p className="mt-6 text-white/60 text-[15px] leading-relaxed">
            você escolhe o modelo. a gente personaliza, publica e liga o crm
            pra você ver quem chegou.
          </p>
          <div className="mt-8 grid gap-3">
            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-white/80 text-sm lowercase">página profissional</span>
              <span className="display text-white text-2xl">r$ 1.000</span>
            </div>
            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-white/80 text-sm lowercase">página + crm atriva</span>
              <span className="display text-white text-2xl">r$ 1.200</span>
            </div>
            <p className="mt-2 text-xs text-white/40 lowercase">
              pagamento em até 10x no cartão*
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
