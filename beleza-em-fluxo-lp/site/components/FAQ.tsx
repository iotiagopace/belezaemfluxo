"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";

const faqs = [
  { q: "a página é criada do zero?", a: "você escolhe um dos modelos disponíveis. a metry personaliza a estrutura com sua identidade visual, serviços, textos, imagens e contatos. projetos totalmente exclusivos são orçados separadamente." },
  { q: "posso utilizar meu domínio?", a: "sim. a página pode ser instalada em um domínio já existente ou em um novo domínio registrado para o seu negócio." },
  { q: "o domínio está incluído?", a: "o registro do domínio deve ser cobrado ou contratado separadamente. a equipe orienta o processo." },
  { q: "a página funciona no celular?", a: "sim. todos os modelos são preparados para celulares, tablets e computadores." },
  { q: "posso colocar o link no instagram?", a: "sim. o endereço pode ser utilizado na bio, no whatsapp, em anúncios, no google e em outros canais." },
  { q: "posso alterar os serviços futuramente?", a: "sim. alterações após a publicação podem ser contratadas separadamente ou incluídas em um plano de manutenção." },
  { q: "o que preciso enviar?", a: "logo, cores da marca, fotos, lista de serviços, informações sobre o negócio, endereço, whatsapp, instagram e demais contatos." },
  { q: "a metry cria os textos?", a: "a página inclui a organização e adaptação dos conteúdos essenciais. produções extensas ou projetos de posicionamento são contratados separadamente." },
  { q: "a página já inclui agendamento online?", a: "a estrutura pode direcionar para o whatsapp, formulário ou sistema externo. uma integração específica depende da ferramenta utilizada." },
  { q: "o crm substitui o whatsapp?", a: "não. o whatsapp continua sendo um canal de conversa. o crm ajuda a organizar contatos, etapas e acompanhamentos." },
  { q: "o crm controla o caixa do salão?", a: "a estrutura comercial acompanha oportunidades e valores. não é apresentada como sistema contábil ou financeiro sem que esses módulos estejam contratados." },
  { q: "existe mensalidade?", a: "a página profissional pode ter renovação de hospedagem, manutenção ou domínio. no plano com crm, a licença do atriva consta na proposta." },
  { q: "posso parcelar?", a: "sim. o pagamento pode ser realizado em até 10 vezes no cartão, com acréscimo da taxa da operadora." },
  { q: "qual é o prazo de entrega?", a: "o prazo começa após o envio completo dos materiais e é informado no momento da contratação." },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="section-divider bg-black py-24 md:py-32">
      <div className="container-max">
        <p className="section-label mb-6">/ dúvidas</p>
        <h2 className="display text-white text-4xl md:text-6xl max-w-3xl">
          perguntas frequentes.
        </h2>
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
