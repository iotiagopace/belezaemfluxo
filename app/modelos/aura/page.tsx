"use client";

import { useState } from "react";
import Image from "next/image";
import ModelPageBar from "@/components/ModelPageBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const IMG = {
  hero: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=2000&q=85",
  team: [
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=85",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=85",
  ],
  ambiente: [
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85",
    "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1595475207225-428b62bda831?auto=format&fit=crop&w=1000&q=85",
  ],
};

const tratamentos = [
  { nome: "Limpeza de pele profunda", tempo: "60 min", descricao: "Higienização, esfoliação e extração feita com protocolo próprio para peles sensíveis." },
  { nome: "Radiofrequência facial", tempo: "45 min", descricao: "Estímulo de colágeno com equipamento certificado para redução de linhas finas." },
  { nome: "Drenagem linfática corporal", tempo: "70 min", descricao: "Sessão manual para melhorar circulação, retenção e recuperação pós-cirúrgica." },
  { nome: "Peeling químico suave", tempo: "40 min", descricao: "Renovação celular com ácidos apropriados ao seu tipo de pele." },
  { nome: "Massagem modeladora", tempo: "60 min", descricao: "Manobras firmes para modelar e reduzir medidas em áreas específicas." },
  { nome: "Terapia de bem-estar", tempo: "80 min", descricao: "Protocolo relaxante com aromaterapia e ambientação preparada." },
];

const profissionais = [
  { nome: "Dra. Renata Vasconcelos", especialidade: "Estética facial · CRBM 12345", foto: IMG.team[0] },
  { nome: "Isadora Menezes", especialidade: "Terapias corporais", foto: IMG.team[1] },
  { nome: "Carolina Prado", especialidade: "Cuidados pós-operatórios", foto: IMG.team[2] },
];

const faqs = [
  { q: "Como funciona a primeira consulta?", a: "Antes de qualquer procedimento, realizamos uma avaliação individual para entender expectativas e definir o melhor protocolo." },
  { q: "Vocês atendem pós-operatório?", a: "Sim. Temos profissionais especializados em drenagem e recuperação pós-cirúrgica." },
  { q: "Quais formas de pagamento vocês aceitam?", a: "Aceitamos Pix, cartão em até 4 vezes sem juros e transferência bancária." },
  { q: "É possível remarcar?", a: "Sim, com pelo menos 24 horas de antecedência sem custo." },
];

export default function AuraPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-white text-neutral-900" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <ModelPageBar modeloNome="Aura" modeloSlug="aura" />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-neutral-900">
        <div className="relative h-[75vh] min-h-[560px] w-full">
          <Image
            src={IMG.hero}
            alt="Ambiente do espaço Aura"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
          <div className="absolute inset-0 flex items-end pb-16 md:pb-24">
            <div className="container-max text-white">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#a6b8a1] font-medium">
                Clínica estética · Vila Nova Conceição · São Paulo
              </p>
              <h1 className="mt-6 text-5xl md:text-8xl font-light leading-[1.02] tracking-tight max-w-4xl">
                Espaço Aura.
                <br />
                <span className="text-white/75">Cuidado que se sente.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/85 leading-relaxed">
                Um espaço projetado para desacelerar. Nossos protocolos combinam
                tecnologia certificada e escuta atenta para tratar cada pessoa
                como única.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#tratamentos" className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-neutral-900 hover:bg-neutral-100 transition-colors">
                  Ver tratamentos
                </a>
                <a href="#contato" className="rounded-full border border-white px-7 py-3.5 text-sm font-medium text-white hover:bg-white hover:text-neutral-900 transition-colors">
                  Agendar avaliação
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tratamentos */}
      <section id="tratamentos" className="py-24 md:py-32 bg-white">
        <div className="container-max">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#6b7a63] font-medium">
                Tratamentos
              </p>
              <h2 className="mt-5 text-4xl md:text-5xl font-light text-neutral-900">
                Protocolos com evidência e precisão.
              </h2>
            </div>
            <p className="max-w-md text-[15px] text-neutral-600 leading-relaxed">
              Cada tratamento é indicado após uma avaliação individual, para que
              o resultado seja consistente e previsível.
            </p>
          </div>
          <div className="mt-14 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {tratamentos.map((t, i) => (
              <div key={t.nome} className="border-t border-neutral-200 pt-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-medium text-neutral-900">
                    <span className="mr-3 text-neutral-400 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {t.nome}
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-neutral-500 whitespace-nowrap font-medium">
                    {t.tempo}
                  </span>
                </div>
                <p className="mt-3 text-[14px] text-neutral-600 leading-relaxed">{t.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profissionais */}
      <section className="bg-[#f4f2ec] py-24 md:py-32">
        <div className="container-max">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#6b7a63] font-medium">
            Equipe
          </p>
          <h2 className="mt-5 text-4xl md:text-5xl font-light text-neutral-900">
            Profissionais formados e certificados.
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {profissionais.map((p) => (
              <article key={p.nome} className="overflow-hidden rounded-2xl bg-white border border-neutral-200 shadow-sm">
                <div className="relative aspect-[4/5]">
                  <Image src={p.foto} alt={p.nome} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <div className="text-lg font-semibold text-neutral-900">{p.nome}</div>
                  <div className="mt-1 text-sm text-neutral-500">{p.especialidade}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Estrutura */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-max">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#6b7a63] font-medium">
            Estrutura
          </p>
          <h2 className="mt-5 text-4xl md:text-5xl font-light text-neutral-900">
            Um ambiente que respeita o seu tempo.
          </h2>
          <div className="mt-14 grid gap-3 sm:grid-cols-2">
            {IMG.ambiente.map((src, i) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-2xl ${
                  i === 0 ? "aspect-[16/10] sm:col-span-2" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={src}
                  alt={`Ambiente ${i + 1}`}
                  fill
                  sizes={i === 0 ? "100vw" : "(min-width: 640px) 50vw, 100vw"}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f4f2ec] py-24 md:py-32">
        <div className="container-max grid gap-14 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#6b7a63] font-medium">
              Dúvidas
            </p>
            <h2 className="mt-5 text-4xl md:text-5xl font-light text-neutral-900">
              Perguntas frequentes.
            </h2>
            <p className="mt-5 text-[15px] text-neutral-600 leading-relaxed max-w-sm">
              Não encontrou o que procurava? Nos chame no WhatsApp que a gente
              responde direto.
            </p>
          </div>
          <div className="grid gap-3">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={f.q} className="rounded-2xl bg-white border border-neutral-200 overflow-hidden shadow-sm">
                  <button
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-neutral-900">{f.q}</span>
                    <span
                      className={`inline-flex h-7 w-7 items-center justify-center rounded-full border font-medium transition-transform flex-shrink-0 ${
                        isOpen ? "rotate-45 bg-neutral-900 text-white border-neutral-900" : "border-neutral-300 text-neutral-600"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-neutral-600 leading-relaxed">{f.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-24 md:py-32 bg-white">
        <div className="container-max">
          <div className="rounded-3xl border border-neutral-200 bg-white p-8 md:p-14 shadow-sm">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#6b7a63] font-medium">
                  Agendar avaliação
                </p>
                <h2 className="mt-5 text-4xl md:text-5xl font-light text-neutral-900">
                  Uma conversa inicial, sem compromisso.
                </h2>
                <p className="mt-6 text-[15px] text-neutral-600 leading-relaxed max-w-sm">
                  Entramos em contato em até 4 horas úteis para agendar a
                  primeira avaliação sem custo.
                </p>
                <div className="mt-8 grid gap-3 text-sm text-neutral-700">
                  <p><strong>Endereço</strong> · Alameda Gabriel Monteiro da Silva, 1408</p>
                  <p>Jardins · São Paulo · SP</p>
                  <p><strong>Atendimento</strong> · Seg a Sex — 8h às 20h · Sáb — 9h às 15h</p>
                </div>
              </div>
              <form className="grid gap-3">
                <input className="rounded-xl border border-neutral-300 px-4 py-3.5 text-sm outline-none focus:border-neutral-900" placeholder="Seu nome" />
                <input className="rounded-xl border border-neutral-300 px-4 py-3.5 text-sm outline-none focus:border-neutral-900" placeholder="WhatsApp" />
                <textarea rows={4} className="rounded-xl border border-neutral-300 px-4 py-3.5 text-sm outline-none focus:border-neutral-900" placeholder="Qual tratamento você tem interesse?" />
                <button type="button" className="mt-2 rounded-full bg-neutral-900 py-3.5 text-sm font-semibold text-white hover:bg-black transition-colors">
                  Enviar solicitação
                </button>
                <p className="text-[11px] text-neutral-500 leading-relaxed">
                  Formulário demonstrativo — o modelo final envia direto para
                  seu WhatsApp ou CRM.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 py-8 text-center text-xs text-neutral-500 bg-white">
        Modelo demonstrativo · Beleza em Fluxo by Metry
      </footer>

      <FloatingWhatsApp
        context={{ kind: "modelo", modelo: "aura" }}
        origin="template-aura"
      />
    </div>
  );
}
