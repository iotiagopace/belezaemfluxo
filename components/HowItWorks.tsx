import Reveal, { RevealStagger, RevealItem } from "@/components/Reveal";

const steps = [
  { n: "01", t: "escolha o modelo", d: "veja as demonstrações e selecione o estilo que mais combina com o seu negócio.", tag: "dia 1" },
  { n: "02", t: "envie seus materiais", d: "formulário para enviar logo, fotos, serviços, endereço, contatos e informações.", tag: "dia 1" },
  { n: "03", t: "a metry personaliza", d: "adaptamos o modelo com a sua identidade e preparamos a estrutura contratada.", tag: "dias 2-4" },
  { n: "04", t: "revise a página", d: "você recebe a primeira versão para conferir os dados e solicitar a rodada de ajustes incluída.", tag: "dia 5" },
  { n: "05", t: "publicação", d: "após a aprovação, a página é publicada no domínio definido.", tag: "dia 5" },
  { n: "06", t: "ativação do crm", d: "no plano completo, configuramos o fluxo de contatos e realizamos o treinamento inicial.", tag: "dia 6" },
];

export default function HowItWorks() {
  return (
    <section className="section-divider bg-black py-24 md:py-32">
      <div className="container-max">
        <Reveal>
          <p className="section-label mb-6">/ como funciona</p>
          <h2 className="display text-white text-4xl md:text-6xl max-w-4xl">
            da escolha do modelo à publicação.
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
          prazo recomendado: até 5 dias úteis após o recebimento completo dos
          materiais.
        </p>
      </div>
    </section>
  );
}
