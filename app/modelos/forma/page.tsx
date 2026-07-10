import type { Metadata } from "next";
import Image from "next/image";
import ModelPageBar from "@/components/ModelPageBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Modelo Forma — Salões premium",
  description:
    "Demonstração do modelo Forma. Editorial, premium, com imagens grandes — ideal para salões e clínicas com alto ticket.",
};

const servicos = [
  {
    imagem:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=80",
    titulo: "Coloração autoral",
    descricao:
      "Estudo do subtom de pele, planejamento em três consultas e execução acompanhada pela nossa diretora de cor.",
  },
  {
    imagem:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
    titulo: "Terapias capilares",
    descricao:
      "Protocolos com ativos importados e sessão personalizada por tipo de fio, sem promessa que não podemos entregar.",
  },
  {
    imagem:
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1200&q=80",
    titulo: "Ateliê de noivas",
    descricao:
      "Serviço exclusivo com atendimento em consultoria, prova real do visual e presença no dia do evento.",
  },
];

const equipe = [
  {
    nome: "Luciana Verás",
    role: "Diretora de estilo",
    foto:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
    bio: "Formada em Londres, dedica-se há vinte anos ao design capilar autoral.",
  },
  {
    nome: "Vitor Almeida",
    role: "Colorista chefe",
    foto:
      "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?auto=format&fit=crop&w=1200&q=80",
    bio: "Referência em técnicas de coloração natural e correções complexas.",
  },
  {
    nome: "Fernanda Cordeiro",
    role: "Beauty artist",
    foto:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=80",
    bio: "Especialista em maquiagem editorial e produções para grandes eventos.",
  },
];

const experiencia = [
  {
    titulo: "Chegada",
    texto:
      "Ao entrar, você é recebida por nossa maître, apresentada ao espaço e ambientada com um chá selecionado.",
    imagem:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1400&q=80",
  },
  {
    titulo: "Consultoria",
    texto:
      "Sua profissional dedica de 20 a 40 minutos para desenhar o serviço com você, entender rotina e preferências.",
    imagem:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=80",
  },
  {
    titulo: "Execução",
    texto:
      "Cada etapa é acompanhada por olhar clínico. Retornos e ajustes são incluídos em todos os pacotes.",
    imagem:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80",
  },
];

const avaliacoes = [
  {
    nome: "Carolina T.",
    role: "Cliente desde 2018",
    texto:
      "Cada visita à Forma é um ritual. Sinto que estão realmente entendendo o meu cabelo, o meu tempo e o meu estilo.",
    foto:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
  },
  {
    nome: "Beatriz A.",
    role: "Noiva 2025",
    texto:
      "O ateliê de noivas cuidou de mim como poucas coisas na vida. Foi o dia mais tranquilo da preparação.",
    foto:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  },
  {
    nome: "Renata F.",
    role: "Cliente premium",
    texto:
      "Pago um ticket alto e recebo à altura. Educação, técnica e cuidado. Não tem preço.",
    foto:
      "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?auto=format&fit=crop&w=400&q=80",
  },
];

export default function FormaPage() {
  return (
    <div
      className="min-h-screen bg-[#0b0b0b] text-white"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      <ModelPageBar modeloNome="Forma" modeloSlug="forma" />

      {/* Hero fullscreen */}
      <section className="relative min-h-[85vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1470259078422-826894b933aa?auto=format&fit=crop&w=2000&q=80"
          alt="Salão premium"
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
        <div className="relative container-max flex min-h-[85vh] flex-col justify-end py-16">
          <p className="text-[11px] uppercase tracking-[0.5em] text-[#c9a35b]">
            Forma · Um salão de autor
          </p>
          <h1
            className="mt-6 max-w-4xl text-6xl leading-[0.95] md:text-8xl"
            style={{ fontFamily: "'Cormorant', serif", fontWeight: 400 }}
          >
            Cuidado como se cuida
            <em className="italic text-[#c9a35b]"> do essencial.</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-neutral-200">
            Um estúdio de beleza autoral, com serviços feitos por poucos e para
            poucas. Consultoria, execução e acompanhamento, sem correria.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#reserva"
              className="border border-[#c9a35b] bg-[#c9a35b] px-8 py-4 text-sm font-medium text-black hover:bg-white hover:border-white"
            >
              Fazer reserva
            </a>
            <a
              href="#servicos"
              className="border border-white/60 px-8 py-4 text-sm font-medium text-white hover:bg-white hover:text-black"
            >
              Ver serviços
            </a>
          </div>
        </div>
      </section>

      {/* Serviços em destaque */}
      <section id="servicos" className="py-24">
        <div className="container-max">
          <p className="text-[11px] uppercase tracking-[0.5em] text-[#c9a35b]">
            Serviços
          </p>
          <h2
            className="mt-4 text-4xl md:text-5xl"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            Três frentes de atendimento.
          </h2>
          <div className="mt-14 grid gap-14">
            {servicos.map((s, i) => (
              <article
                key={s.titulo}
                className={`grid gap-8 md:grid-cols-2 md:items-center ${
                  i % 2 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.imagem}
                    alt={s.titulo}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.4em] text-[#c9a35b]">
                    Serviço {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3
                    className="mt-4 text-3xl md:text-4xl"
                    style={{ fontFamily: "'Cormorant', serif" }}
                  >
                    {s.titulo}
                  </h3>
                  <p className="mt-4 text-neutral-300">{s.descricao}</p>
                  <a
                    href="#reserva"
                    className="mt-6 inline-block border-b border-[#c9a35b] pb-1 text-sm font-medium text-[#c9a35b] hover:text-white hover:border-white"
                  >
                    Conversar sobre o serviço
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="border-t border-white/10 py-24">
        <div className="container-max">
          <p className="text-[11px] uppercase tracking-[0.5em] text-[#c9a35b]">
            A casa
          </p>
          <h2
            className="mt-4 text-4xl md:text-5xl"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            Quem cuida de você.
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {equipe.map((p) => (
              <article key={p.nome}>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src={p.foto} alt={p.nome} fill className="object-cover" />
                </div>
                <div className="mt-6">
                  <h3
                    className="text-2xl"
                    style={{ fontFamily: "'Cormorant', serif" }}
                  >
                    {p.nome}
                  </h3>
                  <div className="mt-1 text-xs uppercase tracking-widest text-[#c9a35b]">
                    {p.role}
                  </div>
                  <p className="mt-3 text-sm text-neutral-400">{p.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experiência do espaço */}
      <section className="border-t border-white/10 py-24">
        <div className="container-max">
          <p className="text-[11px] uppercase tracking-[0.5em] text-[#c9a35b]">
            Experiência
          </p>
          <h2
            className="mt-4 text-4xl md:text-5xl"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            Uma visita em três atos.
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {experiencia.map((e) => (
              <article key={e.titulo} className="group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={e.imagem}
                    alt={e.titulo}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <h3
                  className="mt-6 text-3xl"
                  style={{ fontFamily: "'Cormorant', serif" }}
                >
                  {e.titulo}
                </h3>
                <p className="mt-3 text-neutral-400">{e.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Avaliações */}
      <section className="border-t border-white/10 bg-[#111] py-24">
        <div className="container-max">
          <p className="text-[11px] uppercase tracking-[0.5em] text-[#c9a35b]">
            Depoimentos
          </p>
          <h2
            className="mt-4 text-4xl md:text-5xl"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            Elas contam melhor.
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {avaliacoes.map((a) => (
              <blockquote
                key={a.nome}
                className="border border-white/10 p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image src={a.foto} alt={a.nome} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">{a.nome}</div>
                    <div className="text-xs text-[#c9a35b]">{a.role}</div>
                  </div>
                </div>
                <p
                  className="mt-4 text-lg leading-snug"
                  style={{ fontFamily: "'Cormorant', serif" }}
                >
                  “{a.texto}”
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Reserva */}
      <section id="reserva" className="py-24">
        <div className="container-max">
          <div className="border border-[#c9a35b]/40 bg-black p-8 md:p-14">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.5em] text-[#c9a35b]">
                  Contato exclusivo
                </p>
                <h2
                  className="mt-4 text-4xl md:text-5xl"
                  style={{ fontFamily: "'Cormorant', serif" }}
                >
                  Reservar sua próxima visita.
                </h2>
                <p className="mt-5 max-w-md text-neutral-300">
                  Enviamos as opções de horários em até 4 horas úteis. As
                  reservas de noivas são atendidas por linha direta.
                </p>
                <div className="mt-8 space-y-2 text-sm text-neutral-400">
                  <p>R. Bela Cintra, 1420 · Jardim Paulista</p>
                  <p>reserva@forma.beleza · +55 11 99999-9999</p>
                </div>
              </div>
              <form className="grid gap-3">
                <input
                  className="border border-white/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-[#c9a35b]"
                  placeholder="Seu nome"
                />
                <input
                  className="border border-white/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-[#c9a35b]"
                  placeholder="WhatsApp"
                />
                <select className="border border-white/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-[#c9a35b]">
                  <option className="text-black">Serviço de interesse</option>
                  <option className="text-black">Coloração autoral</option>
                  <option className="text-black">Terapias capilares</option>
                  <option className="text-black">Ateliê de noivas</option>
                </select>
                <textarea
                  rows={4}
                  className="border border-white/20 bg-transparent px-4 py-3 text-sm outline-none focus:border-[#c9a35b]"
                  placeholder="Sobre você"
                />
                <button
                  type="button"
                  className="mt-2 border border-[#c9a35b] bg-[#c9a35b] py-3 text-sm font-medium text-black"
                >
                  Solicitar reserva
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-neutral-500">
        Modelo demonstrativo · Beleza em Fluxo by Metry
      </footer>

      <FloatingWhatsApp
        context={{ kind: "modelo", modelo: "forma" }}
        origin="template-forma"
      />
    </div>
  );
}
