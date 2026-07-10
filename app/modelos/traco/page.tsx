import type { Metadata } from "next";
import Image from "next/image";
import ModelPageBar from "@/components/ModelPageBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Modelo Traço — Marca pessoal e autoridade",
  description:
    "Demonstração do modelo Traço. Editorial, autoral e com foco em autoridade — ideal para designers de sobrancelhas e especialistas.",
};

const tecnicas = [
  {
    n: "01",
    titulo: "Método Traço Natural",
    descricao:
      "Estudo do formato do rosto, densidade dos fios e assimetrias antes de qualquer risco. O resultado respeita a expressão original.",
  },
  {
    n: "02",
    titulo: "Micropigmentação fio a fio",
    descricao:
      "Aplicação com máquina digital certificada, pigmentos orgânicos e curva de cicatrização acompanhada em até três retornos.",
  },
  {
    n: "03",
    titulo: "Brow lamination editorial",
    descricao:
      "Alinhamento estruturado que traz a sensação de sobrancelha cheia sem perder a textura natural do fio.",
  },
];

const antesDepois = [
  {
    antes:
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80",
    depois:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    nome: "Cliente A",
  },
  {
    antes:
      "https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=800&q=80",
    depois:
      "https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&w=800&q=80",
    nome: "Cliente B",
  },
];

const cursos = [
  {
    titulo: "Formação Brow Design Autoral",
    tempo: "40 horas · presencial",
    descricao:
      "Turmas de até 6 alunas com estudo teórico, prática ao vivo e acompanhamento por 90 dias.",
  },
  {
    titulo: "Mentoria Marca de Autoridade",
    tempo: "3 meses · online",
    descricao:
      "Para profissionais que já atendem e querem posicionar a própria marca de forma consistente.",
  },
  {
    titulo: "Workshop Fio a Fio",
    tempo: "16 horas · presencial",
    descricao:
      "Imersão prática em micropigmentação com material completo incluso.",
  },
];

export default function TracoPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "#f2ede4",
        color: "#1a120c",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <ModelPageBar modeloNome="Traço" modeloSlug="traco" />

      {/* Hero editorial */}
      <section className="container-max grid gap-10 py-16 md:grid-cols-[1.1fr_1fr] md:items-center md:py-24">
        <div>
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#7a5a41]">
            Brow Designer · São Paulo
          </p>
          <h1
            className="mt-6 text-5xl leading-[1] md:text-7xl"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
          >
            Um traço
            <br />
            <em className="italic text-[#7a5a41]">é uma decisão.</em>
          </h1>
          <p className="mt-8 max-w-md text-neutral-700">
            Sou Ana Beatriz — designer de sobrancelhas há doze anos. Construo
            marcas de olhar que valorizam o rosto de cada cliente e o meu
            próprio ofício.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#agendamento"
              className="bg-[#1a120c] px-6 py-3 text-sm font-medium text-white hover:bg-black"
            >
              Agendar atendimento
            </a>
            <a
              href="#tecnicas"
              className="border border-[#1a120c] px-6 py-3 text-sm font-medium hover:bg-[#1a120c] hover:text-white"
            >
              Ver métodos
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80"
              alt="Ana Beatriz, brow designer"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden bg-[#f2ede4] p-4 shadow-lg md:block">
            <div className="text-[10px] uppercase tracking-widest text-[#7a5a41]">
              Em uma linha
            </div>
            <p
              className="mt-1 max-w-[220px] text-lg"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              O olhar é a assinatura do rosto.
            </p>
          </div>
        </div>
      </section>

      {/* Sobre mim editorial */}
      <section className="bg-[#1a120c] py-20 text-[#f2ede4]">
        <div className="container-max grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#c4a37a]">
              Sobre
            </p>
            <h2
              className="mt-4 text-4xl md:text-5xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Uma história feita
              <em className="italic"> traço a traço.</em>
            </h2>
          </div>
          <div className="space-y-5 text-neutral-300">
            <p>
              Comecei no salão da minha mãe aos 17 anos. Aos 22, me formei em
              design de sobrancelhas em Buenos Aires. Aos 29, abri meu próprio
              estúdio, e desde então venho refinando o meu método.
            </p>
            <p>
              Além dos atendimentos, formo profissionais em cursos autorais e
              acompanho de perto o crescimento de cada aluna. Acredito que
              técnica sem escuta não constrói marca — e é a marca que dá longevidade
              ao trabalho.
            </p>
            <p className="text-[#c4a37a]">
              Registro CRTB 5480 · Certificação em Micropigmentação
              Paramédica · Formação Advanced Brow Design (BR/AR)
            </p>
          </div>
        </div>
      </section>

      {/* Técnicas / métodos */}
      <section id="tecnicas" className="py-20">
        <div className="container-max">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#7a5a41]">
            Métodos
          </p>
          <h2
            className="mt-4 text-4xl md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Três formas de construir um olhar.
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {tecnicas.map((t) => (
              <article key={t.titulo} className="border-t-2 border-[#1a120c] pt-6">
                <div
                  className="text-5xl"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#7a5a41" }}
                >
                  {t.n}
                </div>
                <h3
                  className="mt-4 text-2xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {t.titulo}
                </h3>
                <p className="mt-3 text-sm text-neutral-700">{t.descricao}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Antes / depois */}
      <section className="bg-white py-20">
        <div className="container-max">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#7a5a41]">
            Resultados
          </p>
          <h2
            className="mt-4 text-4xl md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Antes & depois.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {antesDepois.map((r) => (
              <div key={r.nome} className="grid grid-cols-2 gap-2">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src={r.antes} alt="Antes" fill className="object-cover grayscale" />
                  <div className="absolute left-3 top-3 bg-white/95 px-2 py-1 text-[10px] uppercase tracking-widest">
                    Antes
                  </div>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src={r.depois} alt="Depois" fill className="object-cover" />
                  <div className="absolute left-3 top-3 bg-[#1a120c] px-2 py-1 text-[10px] uppercase tracking-widest text-white">
                    Depois
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cursos e certificações */}
      <section className="py-20">
        <div className="container-max">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#7a5a41]">
            Formação
          </p>
          <h2
            className="mt-4 text-4xl md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Cursos autorais.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {cursos.map((c) => (
              <article
                key={c.titulo}
                className="border border-[#c4a37a]/40 bg-white p-6"
              >
                <div className="text-[11px] uppercase tracking-widest text-[#7a5a41]">
                  {c.tempo}
                </div>
                <h3
                  className="mt-3 text-2xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {c.titulo}
                </h3>
                <p className="mt-3 text-sm text-neutral-700">{c.descricao}</p>
                <a
                  href="#agendamento"
                  className="mt-6 inline-block text-sm font-medium underline underline-offset-4"
                >
                  Falar sobre este curso
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Agendamento */}
      <section id="agendamento" className="bg-[#1a120c] py-20 text-[#f2ede4]">
        <div className="container-max grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.4em] text-[#c4a37a]">
              Agendar
            </p>
            <h2
              className="mt-4 text-4xl md:text-5xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Uma conversa antes de qualquer traço.
            </h2>
            <p className="mt-5 max-w-md text-neutral-300">
              Todo atendimento começa com uma consulta gratuita para entender
              seu objetivo e planejar o resultado juntas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noreferrer"
                className="bg-[#c4a37a] px-8 py-4 text-sm font-medium text-[#1a120c] hover:bg-white"
              >
                Falar no WhatsApp
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="border border-[#c4a37a] px-8 py-4 text-sm font-medium text-[#c4a37a] hover:bg-[#c4a37a] hover:text-[#1a120c]"
              >
                Ver Instagram
              </a>
            </div>
          </div>
          <div className="grid gap-3 text-sm text-neutral-300">
            <div className="border-b border-white/10 pb-3">
              <div className="text-[11px] uppercase tracking-widest text-[#c4a37a]">
                Endereço
              </div>
              <div className="mt-1">R. Aspicuelta, 224 · Vila Madalena · SP</div>
            </div>
            <div className="border-b border-white/10 pb-3">
              <div className="text-[11px] uppercase tracking-widest text-[#c4a37a]">
                Atendimento
              </div>
              <div className="mt-1">Ter a sáb · com hora marcada</div>
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-widest text-[#c4a37a]">
                Contato
              </div>
              <div className="mt-1">
                @anabeatriz.brow · anabeatriz@brow.com.br
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black py-8 text-center text-xs text-neutral-500">
        Modelo demonstrativo · Beleza em Fluxo by Metry
      </footer>

      <FloatingWhatsApp
        context={{ kind: "modelo", modelo: "traco" }}
        origin="template-traco"
      />
    </div>
  );
}
