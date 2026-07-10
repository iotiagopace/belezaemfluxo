"use client";

import { useState } from "react";
import Image from "next/image";
import ModelPageBar from "@/components/ModelPageBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const tratamentos = [
  {
    nome: "Limpeza de pele profunda",
    tempo: "60 min",
    descricao:
      "Higienização, esfoliação e extração feita com protocolo próprio para peles sensíveis.",
  },
  {
    nome: "Radiofrequência facial",
    tempo: "45 min",
    descricao:
      "Estímulo de colágeno com equipamento certificado para redução de linhas finas.",
  },
  {
    nome: "Drenagem linfática corporal",
    tempo: "70 min",
    descricao:
      "Sessão manual para melhorar circulação, retenção e recuperação pós-cirúrgica.",
  },
  {
    nome: "Peeling químico suave",
    tempo: "40 min",
    descricao:
      "Renovação celular com ácidos apropriados ao seu tipo de pele.",
  },
  {
    nome: "Massagem modeladora",
    tempo: "60 min",
    descricao:
      "Manobras firmes para modelar e reduzir medidas em áreas específicas.",
  },
  {
    nome: "Terapia de bem-estar",
    tempo: "80 min",
    descricao:
      "Protocolo relaxante com aromaterapia e ambientação preparada.",
  },
];

const profissionais = [
  {
    nome: "Dra. Renata Vasconcelos",
    especialidade: "Estética facial · CRBM 12345",
    foto:
      "https://images.unsplash.com/photo-1594824388853-e0c2c7f81d5f?auto=format&fit=crop&w=800&q=80",
  },
  {
    nome: "Isadora Menezes",
    especialidade: "Terapias corporais",
    foto:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
  {
    nome: "Carolina Prado",
    especialidade: "Cuidados pós-operatórios",
    foto:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  },
];

const ambiente = [
  "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
];

const faqs = [
  {
    q: "Como funciona a primeira consulta?",
    a: "Antes de qualquer procedimento, realizamos uma avaliação individual para entender expectativas e definir o melhor protocolo.",
  },
  {
    q: "Vocês atendem pós-operatório?",
    a: "Sim. Temos profissionais especializados em drenagem e recuperação pós-cirúrgica.",
  },
  {
    q: "Quais formas de pagamento vocês aceitam?",
    a: "Aceitamos Pix, cartão em até 4 vezes sem juros e transferência bancária.",
  },
  {
    q: "É possível remarcar?",
    a: "Sim, com pelo menos 24 horas de antecedência sem custo.",
  },
];

export default function AuraPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-white text-neutral-900" style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <ModelPageBar modeloNome="Aura" modeloSlug="aura" />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="relative aspect-[16/9] max-h-[80vh] w-full">
          <Image
            src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=2000&q=80"
            alt="Ambiente do espaço Aura"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]" />
        </div>
        <div className="container-max -mt-40 md:-mt-56 relative z-10 pb-16">
          <div className="rounded-3xl bg-white p-8 md:p-14 shadow-xl border border-neutral-200">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#6b7a63]">
              Clínica estética · Vila Nova Conceição
            </p>
            <h1 className="mt-6 text-4xl md:text-6xl font-light leading-[1.05] tracking-tight">
              Espaço Aura.
              <br />
              <span className="text-neutral-500">Cuidado que se sente.</span>
            </h1>
            <p className="mt-6 max-w-xl text-neutral-600">
              Um espaço projetado para desacelerar. Nossos protocolos combinam
              tecnologia certificada e escuta atenta para tratar cada pessoa
              como única.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#tratamentos"
                className="rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white hover:bg-black"
              >
                Ver tratamentos
              </a>
              <a
                href="#contato"
                className="rounded-full border border-neutral-900 px-6 py-3 text-sm font-medium hover:bg-neutral-900 hover:text-white"
              >
                Agendar avaliação
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tratamentos */}
      <section id="tratamentos" className="border-t border-neutral-200 py-20">
        <div className="container-max">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#6b7a63]">
                Tratamentos
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-light">
                Protocolos com evidência e precisão.
              </h2>
            </div>
            <p className="max-w-md text-sm text-neutral-600">
              Cada tratamento é indicado após uma avaliação individual, para que
              o resultado seja consistente e previsível.
            </p>
          </div>
          <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2">
            {tratamentos.map((t, i) => (
              <div key={t.nome} className="border-t border-neutral-200 pt-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-medium">
                    <span className="mr-3 text-neutral-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {t.nome}
                  </h3>
                  <span className="text-xs uppercase tracking-widest text-neutral-500">
                    {t.tempo}
                  </span>
                </div>
                <p className="mt-3 text-sm text-neutral-600">{t.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profissionais */}
      <section className="bg-[#f4f2ec] py-20">
        <div className="container-max">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#6b7a63]">
            Equipe
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-light">
            Profissionais formados e certificados.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {profissionais.map((p) => (
              <article
                key={p.nome}
                className="overflow-hidden rounded-2xl bg-white border border-neutral-200"
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={p.foto}
                    alt={p.nome}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="text-lg font-medium">{p.nome}</div>
                  <div className="mt-1 text-sm text-neutral-500">
                    {p.especialidade}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Estrutura do espaço */}
      <section className="py-20">
        <div className="container-max">
          <p className="text-[11px] uppercase tracking-[0.3em] text-[#6b7a63]">
            Estrutura
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-light">
            Um ambiente que respeita o seu tempo.
          </h2>
          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {ambiente.map((src, i) => (
              <div
                key={src}
                className={`relative overflow-hidden rounded-2xl ${
                  i === 0 ? "aspect-[16/10] sm:col-span-2" : "aspect-[4/3]"
                }`}
              >
                <Image src={src} alt={`Ambiente ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f4f2ec] py-20">
        <div className="container-max grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#6b7a63]">
              Dúvidas
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-light">
              Perguntas frequentes.
            </h2>
          </div>
          <div className="grid gap-3">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={f.q} className="rounded-2xl bg-white border border-neutral-200 overflow-hidden">
                  <button
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium">{f.q}</span>
                    <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full border transition-transform ${isOpen ? "rotate-45 bg-neutral-900 text-white" : "border-neutral-300"}`}>
                      +
                    </span>
                  </button>
                  {isOpen && <div className="px-5 pb-5 text-sm text-neutral-600">{f.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20">
        <div className="container-max">
          <div className="rounded-3xl border border-neutral-200 p-8 md:p-14">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#6b7a63]">
                  Agendar avaliação
                </p>
                <h2 className="mt-4 text-3xl md:text-4xl font-light">
                  Uma conversa inicial, sem compromisso.
                </h2>
                <div className="mt-8 grid gap-2 text-sm text-neutral-600">
                  <p>Alameda Gabriel Monteiro da Silva, 1408</p>
                  <p>Jardins · São Paulo · SP</p>
                  <p>Seg · Sex — 8h às 20h</p>
                  <p>Sáb — 9h às 15h</p>
                </div>
              </div>
              <form className="grid gap-3">
                <input
                  className="rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900"
                  placeholder="Seu nome"
                />
                <input
                  className="rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900"
                  placeholder="WhatsApp"
                />
                <textarea
                  rows={4}
                  className="rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900"
                  placeholder="Qual tratamento você tem interesse?"
                />
                <button
                  type="button"
                  className="mt-2 rounded-full bg-neutral-900 py-3 text-sm font-medium text-white"
                >
                  Enviar solicitação
                </button>
                <p className="text-[11px] text-neutral-500">
                  Formulário demonstrativo — o modelo final envia direto para
                  seu WhatsApp ou CRM.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 py-8 text-center text-xs text-neutral-500">
        Modelo demonstrativo · Beleza em Fluxo by Metry
      </footer>

      <FloatingWhatsApp
        context={{ kind: "modelo", modelo: "aura" }}
        origin="template-aura"
      />
    </div>
  );
}
