"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";
import { faqJsonLd } from "@/lib/seo";
import Reveal from "@/components/Reveal";

const faqs = [
  { q: "a página é feita do zero?", a: "não. você escolhe um dos 6 modelos e a gente personaliza com sua marca, serviços, foto e contato. quer projeto exclusivo, do zero mesmo? a gente orça separado." },
  { q: "posso usar meu domínio?", a: "sim. se você já tem, a gente instala nele. se ainda não tem, a gente ajuda a registrar." },
  { q: "o domínio está incluído no preço?", a: "não. o registro do domínio você contrata direto (uns 40 a 60 reais por ano). a gente orienta o processo." },
  { q: "funciona no celular?", a: "sim. todos os modelos foram feitos pensando primeiro no celular. e também rodam em tablet e desktop." },
  { q: "posso colocar o link no instagram?", a: "sim. o link vai na bio, no whatsapp, em anúncio, no google. onde você quiser." },
  { q: "e se eu quiser mudar serviço depois?", a: "sim. mudança pequena a gente resolve na hora. mudanças mais grandes viram um pacote de manutenção." },
  { q: "o que preciso mandar?", a: "logo, cor da marca, foto, lista de serviço, endereço, whatsapp, instagram. a gente manda um formulário só com os itens." },
  { q: "vocês escrevem os textos?", a: "a gente organiza e adapta o texto que você mandar. copy do zero ou reposicionamento de marca são pacotes à parte." },
  { q: "vem com agendamento online?", a: "vem com botão de whatsapp e formulário. se você já usa alguma agenda tipo calendly ou trinks, a gente conecta. sistema próprio de agendamento é outro projeto." },
  { q: "o crm substitui o whatsapp?", a: "não. o whatsapp continua sendo o canal onde você conversa. o crm serve pra organizar o que aconteceu com cada pessoa que chegou." },
  { q: "o crm controla o caixa do salão?", a: "não. o crm cuida do funil comercial (contato, orçamento, negociação). caixa e financeiro são outro tipo de sistema." },
  { q: "tem mensalidade?", a: "a página tem custo anual de hospedagem e domínio (baixo). no plano com crm, tem a licença do atriva. tudo consta na proposta antes de você fechar." },
  { q: "posso parcelar?", a: "sim. até 10x no cartão. a taxa da operadora entra no valor parcelado." },
  { q: "qual o prazo?", a: "5 dias úteis em média, contando a partir do dia que você manda todos os materiais." },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="section-divider bg-black py-24 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <div className="container-max">
        <Reveal>
          <p className="section-label mb-6">/ dúvidas</p>
          <h2 className="display text-white text-4xl md:text-6xl max-w-3xl">
            perguntas frequentes.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-2 max-w-3xl">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={item.q} className="border-b border-white/10">
                <button
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => {
                    const next = isOpen ? null : idx;
                    setOpenIdx(next);
                    if (next !== null) track.faqOpen(item.q);
                  }}
                  aria-expanded={isOpen}
                >
                  <span className="display text-white text-lg md:text-xl">{item.q}</span>
                  <span className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/20">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`transition-transform text-white ${isOpen ? "rotate-45" : ""}`}
                    >
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <div className="pb-6 pr-12 text-[15px] text-white/70 leading-relaxed lowercase">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
