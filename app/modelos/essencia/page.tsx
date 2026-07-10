import type { Metadata } from "next";
import Image from "next/image";
import ModelPageBar from "@/components/ModelPageBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Modelo Essência — Página profissional leve e elegante",
  description:
    "Demonstração do modelo Essência. Leve, elegante e feminino — ideal para cílios, sobrancelhas, maquiagem e profissionais independentes.",
};

const IMG = {
  hero: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=85",
  sobre:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1000&q=85",
  galeria: [
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1503236823255-94609f598e71?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1512207736890-6ffed8a84e8d?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=85",
  ],
} as const;

const servicos = [
  { nome: "Lash design volume brasileiro", descricao: "Aplicação fio a fio com fios de diferentes espessuras para um efeito natural e definido.", valor: "A partir de R$ 180", tempo: "1h 30" },
  { nome: "Design de sobrancelhas com henna", descricao: "Modelagem personalizada com estudo do formato do rosto e aplicação de henna hipoalergênica.", valor: "R$ 90", tempo: "45 min" },
  { nome: "Maquiagem para eventos", descricao: "Maquiagem sob medida para formaturas, casamentos e ensaios, com foco em longa duração.", valor: "A partir de R$ 250", tempo: "1h" },
  { nome: "Brow lamination", descricao: "Alinhamento dos fios da sobrancelha com resultado natural que dura até seis semanas.", valor: "R$ 140", tempo: "50 min" },
];

const depoimentos = [
  { nome: "Larissa M.", texto: "A Camila entendeu o que eu queria já na primeira consulta. Saí de lá me sentindo linda e recebi elogios a semana inteira." },
  { nome: "Beatriz R.", texto: "Nunca imaginei que uma sobrancelha bem feita mudaria tanto meu rosto. Atendimento delicado do início ao fim." },
  { nome: "Julia P.", texto: "Marquei a maquiagem para meu casamento e a Camila foi paciente, atenciosa e o resultado durou o dia todo." },
];

export default function EssenciaPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, #fbf3ee 0%, #f5e9df 40%, #fbf3ee 100%)",
        color: "#1c1614",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <ModelPageBar modeloNome="Essência" modeloSlug="essencia" />

      {/* Hero */}
      <section className="container-max pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] font-medium" style={{ color: "#a06a5b" }}>
              Estúdio de beleza · São Paulo
            </p>
            <h1
              className="mt-6 text-5xl leading-[1.02] md:text-7xl"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: "#1c1614" }}
            >
              Camila Freitas
              <br />
              <span className="italic" style={{ color: "#a06a5b" }}>lash & brow designer</span>
            </h1>
            <p className="mt-7 max-w-md text-[16px] leading-relaxed" style={{ color: "#3d322d" }}>
              Um olhar mais expressivo, sem exageros. Trabalho com técnicas que valorizam o formato natural do seu rosto e uma rotina simples de manutenção.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#1c1614] px-7 py-3.5 text-sm font-medium text-white shadow-lg hover:bg-black transition-colors"
              >
                Agendar pelo WhatsApp
              </a>
              <a
                href="#servicos"
                className="rounded-full border border-[#1c1614] px-7 py-3.5 text-sm font-medium text-[#1c1614] hover:bg-[#1c1614] hover:text-white transition-colors"
              >
                Ver serviços
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium" style={{ color: "#7a5a4d" }}>
              <span>+500 clientes atendidas</span>
              <span className="h-1 w-1 rounded-full bg-[#c9a897]" />
              <span>7 anos de experiência</span>
              <span className="h-1 w-1 rounded-full bg-[#c9a897]" />
              <span>Certificação internacional</span>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[32px] shadow-[0_30px_80px_-30px_rgba(112,64,50,0.4)]">
              <Image
                src={IMG.hero}
                alt="Camila Freitas, lash & brow designer"
                fill
                sizes="(min-width: 768px) 500px, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-white px-5 py-4 shadow-xl">
              <div className="text-[10px] uppercase tracking-widest font-semibold" style={{ color: "#a06a5b" }}>
                Certificações
              </div>
              <div className="mt-1 text-lg" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1c1614" }}>
                Volume Russo · Brow Design
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-max grid gap-14 md:grid-cols-[1fr_1.4fr] md:items-center">
          <div className="relative aspect-[4/5] w-full max-w-sm mx-auto md:mx-0 overflow-hidden rounded-2xl">
            <Image
              src={IMG.sobre}
              alt="Camila em atendimento"
              fill
              sizes="(min-width: 768px) 400px, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] font-medium" style={{ color: "#a06a5b" }}>
              Sobre
            </p>
            <h2 className="mt-5 text-4xl md:text-5xl" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1c1614" }}>
              Uma jornada dedicada ao olhar.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed" style={{ color: "#3d322d" }}>
              Sou Camila, especialista em cílios e sobrancelhas há mais de sete anos. Comecei atendendo em casa, me formei em técnicas internacionais e hoje recebo clientes em um espaço próprio no Jardim Paulista.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed" style={{ color: "#3d322d" }}>
              Meu trabalho é construído com escuta. Antes de cada procedimento, conversamos sobre rotina, expectativas e limites — para o resultado ficar exatamente como você quer.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 md:py-28">
        <div className="container-max">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.3em] font-medium" style={{ color: "#a06a5b" }}>
              Serviços
            </p>
            <h2 className="mt-5 text-4xl md:text-5xl" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1c1614" }}>
              Procedimentos exclusivos e personalizados.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed" style={{ color: "#3d322d" }}>
              Cada serviço é adaptado ao seu formato, rotina e objetivo. Valores a partir da tabela abaixo — variações são combinadas na consulta.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {servicos.map((s) => (
              <div
                key={s.nome}
                className="rounded-3xl bg-white/85 backdrop-blur p-7 shadow-sm hover:shadow-lg transition-shadow"
                style={{ border: "1px solid #eadfd3" }}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1c1614" }}>
                    {s.nome}
                  </h3>
                  <span className="whitespace-nowrap text-sm font-semibold" style={{ color: "#a06a5b" }}>
                    {s.valor}
                  </span>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed" style={{ color: "#4a3f3a" }}>
                  {s.descricao}
                </p>
                <div
                  className="mt-5 pt-4 text-[11px] uppercase tracking-widest font-medium"
                  style={{ color: "#a06a5b", borderTop: "1px solid #eadfd3" }}
                >
                  Duração média · {s.tempo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-max">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.3em] font-medium" style={{ color: "#a06a5b" }}>
              Resultados
            </p>
            <h2 className="mt-5 text-4xl md:text-5xl" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1c1614" }}>
              Alguns dos trabalhos recentes.
            </h2>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {IMG.galeria.map((src, i) => (
              <div key={src} className="relative aspect-square overflow-hidden rounded-2xl group">
                <Image
                  src={src}
                  alt={`Resultado de trabalho ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 md:py-28">
        <div className="container-max">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.3em] font-medium" style={{ color: "#a06a5b" }}>
              O que dizem
            </p>
            <h2 className="mt-5 text-4xl md:text-5xl" style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1c1614" }}>
              Cada cliente que passa, deixa uma história.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {depoimentos.map((d) => (
              <blockquote key={d.nome} className="rounded-3xl bg-white p-7 shadow-sm" style={{ border: "1px solid #eadfd3" }}>
                <p className="text-xl italic leading-snug" style={{ color: "#3d322d", fontFamily: "'Cormorant Garamond', serif" }}>
                  “{d.texto}”
                </p>
                <footer className="mt-5 text-sm font-semibold" style={{ color: "#a06a5b" }}>
                  — {d.nome}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="bg-[#1c1614] py-20 text-white md:py-28">
        <div className="container-max grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] font-medium" style={{ color: "#c98a7a" }}>
              Agende sua visita
            </p>
            <h2 className="mt-5 text-4xl md:text-6xl" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Estamos esperando por você.
            </h2>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed" style={{ color: "#d9c8bf" }}>
              Atendimento com hora marcada, ambiente reservado e uma xícara de café para começar do jeito certo.
            </p>
            <div className="mt-8 grid gap-3 text-sm" style={{ color: "#d9c8bf" }}>
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
              className="rounded-full bg-[#25d366] px-7 py-4 text-sm font-semibold text-white shadow-lg hover:bg-[#1fb457] transition-colors"
            >
              Falar no WhatsApp
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/40 px-7 py-4 text-sm font-medium text-white hover:bg-white hover:text-[#1c1614] transition-colors"
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
