import type { Metadata } from "next";
import Image from "next/image";
import ModelPageBar from "@/components/ModelPageBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Modelo Essência — Página profissional leve e elegante",
  description:
    "Demonstração do modelo Essência. Leve, elegante e feminino — ideal para cílios, sobrancelhas, maquiagem e profissionais independentes.",
};

const servicos = [
  {
    nome: "Lash design volume brasileiro",
    descricao:
      "Aplicação fio a fio com fios de diferentes espessuras para um efeito natural e definido.",
    valor: "A partir de R$ 180",
  },
  {
    nome: "Design de sobrancelhas com henna",
    descricao:
      "Modelagem personalizada com estudo do formato do rosto e aplicação de henna hipoalergênica.",
    valor: "R$ 90",
  },
  {
    nome: "Maquiagem para eventos",
    descricao:
      "Maquiagem sob medida para formaturas, casamentos e ensaios, com foco em longa duração.",
    valor: "A partir de R$ 250",
  },
  {
    nome: "Brow lamination",
    descricao:
      "Alinhamento dos fios da sobrancelha com resultado natural que dura até seis semanas.",
    valor: "R$ 140",
  },
];

const depoimentos = [
  {
    nome: "Larissa M.",
    texto:
      "A Camila entendeu o que eu queria já na primeira consulta. Saí de lá me sentindo linda e recebi elogios a semana inteira.",
  },
  {
    nome: "Beatriz R.",
    texto:
      "Nunca imaginei que uma sobrancelha bem feita mudaria tanto meu rosto. Atendimento delicado do início ao fim.",
  },
  {
    nome: "Julia P.",
    texto:
      "Marquei a maquiagem para meu casamento e a Camila foi paciente, atenciosa e o resultado durou o dia todo.",
  },
];

const galeria = [
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1560869713-7d0954430889?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&w=800&q=80",
];

export default function EssenciaPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, #fbf3ee 0%, #f5e9df 40%, #fbf3ee 100%)",
        color: "#1c1614",
      }}
    >
      <ModelPageBar modeloNome="Essência" modeloSlug="essencia" />

      {/* Hero */}
      <section className="container-max pt-14 pb-16 md:pt-20 md:pb-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-essenciaBody text-xs uppercase tracking-[0.28em] text-[#a06a5b]">
              Estúdio de beleza · São Paulo
            </p>
            <h1
              className="mt-5 text-5xl leading-[1.05] md:text-6xl"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}
            >
              Camila Freitas
              <br />
              <span className="italic text-[#a06a5b]">
                lash & brow designer
              </span>
            </h1>
            <p className="mt-6 max-w-md font-essenciaBody text-neutral-700">
              Um olhar mais expressivo, sem exageros. Trabalho com técnicas que
              valorizam o formato natural do seu rosto e uma rotina simples de
              manutenção.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#1c1614] px-6 py-3 font-essenciaBody text-sm font-medium text-white hover:bg-black"
              >
                Agendar pelo WhatsApp
              </a>
              <a
                href="#servicos"
                className="rounded-full border border-[#1c1614] px-6 py-3 font-essenciaBody text-sm font-medium text-[#1c1614] hover:bg-[#1c1614] hover:text-white"
              >
                Ver serviços
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[32px] shadow-[0_30px_80px_-30px_rgba(112,64,50,0.35)]">
              <Image
                src="https://images.unsplash.com/photo-1560869713-7d0954430889?auto=format&fit=crop&w=1200&q=80"
                alt="Camila Freitas, lash & brow designer"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-2 rounded-2xl bg-white px-5 py-4 shadow-lg">
              <div className="text-xs uppercase tracking-widest text-[#a06a5b]">
                Certificações
              </div>
              <div
                className="mt-1 text-lg"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Volume Russo · Brow Design
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-max grid gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
          <p className="font-essenciaBody text-xs uppercase tracking-[0.28em] text-[#a06a5b]">
            Sobre
          </p>
          <div>
            <h2
              className="text-3xl md:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Uma jornada dedicada ao olhar.
            </h2>
            <p className="mt-5 font-essenciaBody text-neutral-700">
              Sou Camila, especialista em cílios e sobrancelhas há mais de sete
              anos. Comecei atendendo em casa, me formei em técnicas
              internacionais e hoje recebo clientes em um espaço próprio no
              Jardim Paulista.
            </p>
            <p className="mt-4 font-essenciaBody text-neutral-700">
              Meu trabalho é construído com escuta. Antes de cada procedimento,
              conversamos sobre rotina, expectativas e limites — para o
              resultado ficar exatamente como você quer.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-16 md:py-24">
        <div className="container-max">
          <div className="max-w-2xl">
            <p className="font-essenciaBody text-xs uppercase tracking-[0.28em] text-[#a06a5b]">
              Serviços
            </p>
            <h2
              className="mt-4 text-3xl md:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Procedimentos exclusivos e personalizados.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {servicos.map((s) => (
              <div
                key={s.nome}
                className="rounded-3xl border border-[#eadfd3] bg-white/70 p-6 backdrop-blur"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className="text-xl"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {s.nome}
                  </h3>
                  <span className="whitespace-nowrap text-sm text-[#a06a5b]">
                    {s.valor}
                  </span>
                </div>
                <p className="mt-3 font-essenciaBody text-sm text-neutral-700">
                  {s.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-max">
          <div className="max-w-2xl">
            <p className="font-essenciaBody text-xs uppercase tracking-[0.28em] text-[#a06a5b]">
              Resultados
            </p>
            <h2
              className="mt-4 text-3xl md:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Antes & depois de quem já passou por aqui.
            </h2>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {galeria.map((src, i) => (
              <div
                key={src}
                className="relative aspect-square overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt={`Resultado ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 md:py-24">
        <div className="container-max">
          <div className="max-w-2xl">
            <p className="font-essenciaBody text-xs uppercase tracking-[0.28em] text-[#a06a5b]">
              O que dizem
            </p>
            <h2
              className="mt-4 text-3xl md:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Cada cliente que passa, deixa uma história.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {depoimentos.map((d) => (
              <blockquote
                key={d.nome}
                className="rounded-3xl border border-[#eadfd3] bg-white p-6"
              >
                <p
                  className="text-lg italic text-neutral-700"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  “{d.texto}”
                </p>
                <footer className="mt-4 text-sm font-medium text-[#a06a5b]">
                  — {d.nome}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="bg-[#1c1614] py-16 text-white md:py-24">
        <div className="container-max grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-essenciaBody text-xs uppercase tracking-[0.28em] text-[#c98a7a]">
              Agende sua visita
            </p>
            <h2
              className="mt-5 text-3xl md:text-5xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Estamos esperando por você.
            </h2>
            <p className="mt-5 max-w-md font-essenciaBody text-neutral-300">
              Atendimento com hora marcada, ambiente reservado e uma xícara de
              café para começar do jeito certo.
            </p>
            <div className="mt-6 grid gap-2 font-essenciaBody text-sm text-neutral-300">
              <p>Rua Oscar Freire, 725 · sala 12 · Jardim Paulista · SP</p>
              <p>Ter · Sáb — 9h às 19h</p>
              <p>@camilafreitas.beauty</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#25d366] px-6 py-4 font-essenciaBody font-medium text-white"
            >
              Falar no WhatsApp
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/40 px-6 py-4 font-essenciaBody font-medium text-white hover:bg-white hover:text-[#1c1614]"
            >
              Ver Instagram
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-black py-8 text-center text-xs text-neutral-500">
        Modelo demonstrativo · Beleza em Fluxo by Metry
      </footer>

      <FloatingWhatsApp
        context={{ kind: "modelo", modelo: "essencia" }}
        origin="template-essencia"
      />
    </div>
  );
}
