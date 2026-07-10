import Reveal, { RevealStagger, RevealItem } from "@/components/Reveal";

const steps = [
  { n: "01", t: "escolhe o modelo", d: "abre a demonstração, vê qual estilo combina e sinaliza pra gente.", tag: "dia 1" },
  { n: "02", t: "manda seus materiais", d: "logo, foto, serviço, endereço, contato. tudo num formulário simples.", tag: "dia 1" },
  { n: "03", t: "a gente personaliza", d: "aplica sua marca, monta as seções e deixa a estrutura no ponto.", tag: "dias 2 a 4" },
  { n: "04", t: "você revisa", d: "confere a primeira versão e pede a rodada de ajuste que já vem incluída.", tag: "dia 5" },
  { n: "05", t: "página no ar", d: "aprovou, publica. sai do rascunho e vira link que você manda pra qualquer um.", tag: "dia 5" },
  { n: "06", t: "crm ativado", d: "no plano completo, configura o funil e treina você e o seu time.", tag: "dia 6" },
];

export default function HowItWorks() {
  return (
    <section className="section-divider bg-black py-24 md:py-32">
      <div className="container-max">
        <Reveal>
          <p className="section-label mb-6">/ como funciona</p>
          <h2 className="display text-white text-4xl md:text-6xl max-w-4xl">
            do modelo escolhido até a página no ar.
          </h2>
        </Reveal>

        <RevealStagger className="mt-16 grid gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <RevealItem key={s.n} className="metry-tile p-8 md:p-10 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="metry-num">{s.n}</span>
                <span className="text-xs text-white/40 metry-tile-muted lowercase">{s.tag}</span>
              </div>
              <h3 className="display text-2xl">{s.t}</h3>
              <p className="text-[14px] leading-relaxed text-white/60 metry-tile-muted">{s.d}</p>
            </RevealItem>
          ))}
        </RevealStagger>

        <p className="mt-10 text-sm text-white/50 lowercase max-w-2xl">
          prazo médio: até 5 dias úteis a partir do dia que você manda tudo.
        </p>
      </div>
    </section>
  );
}
