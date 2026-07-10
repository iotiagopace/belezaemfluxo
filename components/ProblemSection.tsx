import Reveal, { RevealStagger, RevealItem } from "@/components/Reveal";

const cards = [
  { n: "01", t: "serviços espalhados", d: "o cliente precisa perguntar quais procedimentos você oferece, como funcionam e onde você atende." },
  { n: "02", t: "portfólio sem organização", d: "fotos, resultados e depoimentos ficam misturados com todos os outros conteúdos das redes sociais." },
  { n: "03", t: "contatos esquecidos", d: "uma pessoa chama no whatsapp, você não responde naquele momento e a conversa acaba ficando para trás." },
  { n: "04", t: "pouca visão do atendimento", d: "fica difícil saber quantas pessoas demonstraram interesse, quais precisam de retorno e quais realmente contrataram." },
];

export default function ProblemSection() {
  return (
    <section className="section-divider bg-black py-24 md:py-32">
      <div className="container-max">
        <Reveal>
          <p className="section-label mb-6">/ o problema</p>
          <h2 className="display text-white text-4xl md:text-6xl max-w-4xl">
            quando alguém conhece seu trabalho, o que encontra?
          </h2>
          <p className="mt-8 max-w-2xl text-white/70 text-[17px] leading-relaxed">
            muitos negócios de beleza fazem um trabalho excelente, mas ainda
            apresentam seus serviços apenas pelo instagram ou enviam fotos e
            informações separadamente pelo whatsapp. isso dificulta a escolha
            do cliente e deixa o atendimento dependente de respostas manuais.
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
