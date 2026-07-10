"use client";

import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { serviceJsonLd } from "@/lib/seo";
import { Check, ArrowRight } from "@/components/icons";
import Reveal from "@/components/Reveal";

const planoPagina = [
  "página personalizada com sua marca",
  "modelo que você escolheu",
  "versão pra celular",
  "serviços, galeria e localização",
  "whatsapp e formulário no ar",
  "aparecer no google",
  "instalada e publicada",
  "uma rodada de ajuste",
];

const planoCompleto = [
  "tudo da página profissional",
  "atriva configurado",
  "funil montado do seu jeito",
  "etapas de atendimento",
  "formulário conectado no crm",
  "campos de serviço e interesse",
  "oportunidade organizada por etapa",
  "tarefa de retorno",
  "valor em negociação",
  "treinamento inicial",
  "suporte na ativação",
];

type Props = { onSelectPlan: (plan: "pagina" | "completo") => void };

export default function PricingSection({ onSelectPlan }: Props) {
  return (
    <section id="planos" className="section-divider bg-black py-24 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd(
              "Página profissional para negócios de beleza",
              "Página personalizada + modelo escolhido + versão mobile + galeria + WhatsApp + formulário + configuração para Google + instalação e uma rodada de ajustes.",
              1000
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceJsonLd(
              "Página profissional + Gestão de contatos (CRM Atriva)",
              "Todos os itens da página profissional + implantação Atriva + pipeline + integrações + treinamento e suporte de ativação.",
              1200
            )
          ),
        }}
      />
      <div className="container-max">
        <Reveal>
          <p className="section-label mb-6">/ planos</p>
          <h2 className="display text-white text-4xl md:text-6xl max-w-3xl">
            escolha o que combina com o momento do seu negócio.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-5 md:gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10 flex flex-col">
            <div className="flex items-center justify-between">
              <span className="metry-num">/ plano 01</span>
              <span className="text-xs text-white/40 lowercase">à vista ou 10x</span>
            </div>
            <h3 className="mt-6 display text-white text-2xl md:text-3xl">página profissional</h3>
            <p className="mt-3 text-white/60 text-[15px] leading-relaxed">
              pra quem quer parar de mandar print e áudio explicando os serviços.
            </p>
            <div className="mt-8">
              <div className="display text-white text-5xl md:text-6xl">r$ 1.000</div>
              <div className="text-xs text-white/50 mt-1 lowercase">pagamento em até 10x no cartão*</div>
            </div>
            <ul className="mt-8 flex-1 grid gap-2">
              {planoPagina.map((i) => (
                <li key={i} className="flex items-start gap-2 text-[14px] text-white/80 lowercase">
                  <span className="mt-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-white text-black">
                    <Check size={9} />
                  </span>
                  {i}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                className="btn-primary text-sm"
                onClick={() => {
                  track.packageSelect("pagina");
                  onSelectPlan("pagina");
                }}
              >
                quero minha página
                <ArrowRight size={14} />
              </button>
              <a
                href={buildWhatsAppUrl({ kind: "plano-pagina" })}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary text-sm"
                onClick={() => track.whatsappClick("pricing", { plano: "pagina" })}
              >
                tirar dúvidas
              </a>
            </div>
          </article>

          <article className="dark-on-light relative rounded-2xl bg-neutral-900 p-8 md:p-10 flex flex-col shadow-xl">
            <div className="absolute -top-3 right-6 rounded-full bg-white px-3 py-1 text-xs font-medium text-black lowercase">
              opção mais completa
            </div>
            <div className="flex items-center justify-between">
              <span className="metry-num text-white/70">/ plano 02</span>
              <span className="text-xs text-white/70 lowercase">à vista ou 10x</span>
            </div>
            <h3 className="mt-6 display text-white text-2xl md:text-3xl">página + gestão de contatos</h3>
            <p className="mt-3 text-white/70 text-[15px] leading-relaxed">
              pra quem também quer ver na tela o que aconteceu com cada contato.
            </p>
            <div className="mt-8">
              <div className="display text-white text-5xl md:text-6xl">r$ 1.200</div>
              <div className="text-xs text-white/60 mt-1 lowercase">valor de implantação · pagamento em até 10x*</div>
            </div>
            <ul className="mt-8 flex-1 grid gap-2">
              {planoCompleto.map((i) => (
                <li key={i} className="flex items-start gap-2 text-[14px] text-white/90 lowercase">
                  <span className="mt-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-white text-black">
                    <Check size={9} />
                  </span>
                  {i}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-medium hover:bg-neutral-100 transition-colors"
                onClick={() => {
                  track.packageSelect("completo");
                  onSelectPlan("completo");
                }}
              >
                <span className="keep-black">quero página + crm</span>
                <ArrowRight size={14} />
              </button>
              <a
                href={buildWhatsAppUrl({ kind: "plano-completo" })}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/50 text-white px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors"
                onClick={() => track.whatsappClick("pricing", { plano: "completo" })}
              >
                tirar dúvidas
              </a>
            </div>
          </article>
        </div>

        <div className="mt-10 grid gap-2 text-xs text-white/40 lowercase max-w-3xl">
          <p>* a taxa da operadora entra no valor parcelado.</p>
          <p>licença, mensalidade e continuidade do atriva a gente combina na proposta, sem letra miúda.</p>
          <p>domínio, hospedagem e integração extra também. você sabe o que paga antes de assinar.</p>
        </div>
      </div>
    </section>
  );
}
