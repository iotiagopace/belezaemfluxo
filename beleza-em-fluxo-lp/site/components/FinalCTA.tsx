"use client";

import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { ArrowRight, Check } from "@/components/icons";
import ShinyText from "@/components/ShinyText";

const bullets = [
  "retorno em até 1 dia útil",
  "análise inicial sem compromisso",
  "conversa real, sem script de vendas",
];

export default function FinalCTA() {
  return (
    <section className="section-divider bg-black py-24 md:py-32">
      <div className="container-max grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
        <div>
          <p className="section-label mb-6">/ primeiro passo</p>
          <h2 className="display text-white text-4xl md:text-6xl mb-8">
            vamos entender o que sua <ShinyText>operação</ShinyText> precisa hoje.
          </h2>
          <p className="text-white/70 text-[16px] leading-relaxed max-w-lg mb-10">
            fale com a metry para entender seu cenário, seus objetivos e onde
            estão os principais pontos de evolução do seu negócio de beleza.
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
        </div>

        <div className="rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10">
          <p className="section-label mb-6">/ o que cobre</p>
          <h3 className="display text-white text-2xl md:text-4xl">
            página, crm e apresentação profissional em um só lugar.
          </h3>
          <p className="mt-6 text-white/60 text-[15px] leading-relaxed">
            você escolhe o modelo. nós personalizamos, publicamos e conectamos
            a central de contatos.
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
        </div>
      </div>
    </section>
  );
}
