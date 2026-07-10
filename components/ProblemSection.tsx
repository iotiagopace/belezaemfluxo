import Reveal, { RevealStagger, RevealItem } from "@/components/Reveal";

const cards = [
  { n: "01", t: "serviços espalhados", d: "o cliente pergunta o que você faz, como funciona e onde você atende. e você responde tudo de novo, toda vez." },
  { n: "02", t: "portfólio bagunçado", d: "fotos, resultados e depoimentos se perdem no meio dos outros posts do instagram." },
  { n: "03", t: "contato esquecido", d: "chegou no whatsapp num dia corrido. você não respondeu na hora. sumiu." },
  { n: "04", t: "sem visão do atendimento", d: "quantas pessoas chegaram esse mês? quantas fecharam? você tenta contar na cabeça." },
];

export default function ProblemSection() {
  return (
    <section className="section-divider bg-black py-24 md:py-32">
      <div className="container-max">
        <Reveal>
          <p className="section-label mb-6">/ o problema</p>
          <h2 className="display text-white text-4xl md:text-6xl max-w-4xl">
            quando alguém procura o seu trabalho, o que encontra?
          </h2>
          <p className="mt-8 max-w-2xl text-white/70 text-[17px] leading-relaxed">
            o trabalho é bom. mas a apresentação continua no instagram, no
            print do celular, no áudio do whatsapp. o cliente fica na dúvida.
            você fica no piloto manual.
          </p>
        </Reveal>

        <RevealStagger className="mt-16 grid gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <RevealItem key={c.t} className="bg-black p-8 md:p-10">
              <div className="metry-num">{c.n}</div>
              <h3 className="mt-6 display text-white text-xl md:text-2xl">{c.t}</h3>
              <p className="mt-4 text-white/60 text-[14px] leading-relaxed">{c.d}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
