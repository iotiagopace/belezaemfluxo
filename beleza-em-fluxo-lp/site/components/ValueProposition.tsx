import ShinyText from "@/components/ShinyText";

const items = [
  { t: "mostre seus serviços", d: "apresente procedimentos, diferenciais e informações importantes de forma clara." },
  { t: "valorize seu portfólio", d: "organize fotos de trabalhos, ambientes, resultados e transformações." },
  { t: "facilite o contato", d: "direcione a pessoa para o whatsapp, formulário ou canal de atendimento correto." },
  { t: "apresente sua localização", d: "inclua endereço, mapa, horários e informações necessárias para a visita." },
  { t: "fortaleça sua marca", d: "tenha uma apresentação alinhada à identidade visual do seu negócio." },
  { t: "prepare sua divulgação", d: "utilize uma página estruturada para campanhas no instagram, facebook e google." },
];

export default function ValueProposition() {
  return (
    <section className="section-divider bg-black py-24 md:py-32">
      <div className="container-max">
        <p className="section-label mb-6">/ o que muda</p>
        <h2 className="display text-white text-4xl md:text-6xl max-w-4xl">
          um endereço profissional para <ShinyText>apresentar</ShinyText> o seu negócio.
        </h2>
        <p className="mt-8 max-w-2xl text-white/70 text-[17px] leading-relaxed">
          sua página passa a ser o ponto central da sua divulgação. use no
          instagram, no whatsapp, no google, em anúncios, cartões digitais,
          mensagens e materiais impressos.
        </p>

        <div className="mt-16 grid gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div key={it.t} className="bg-black p-8 md:p-10">
              <div className="metry-num">0{i + 1}</div>
              <h3 className="mt-6 display text-white text-xl md:text-2xl">{it.t}</h3>
              <p className="mt-4 text-white/60 text-[14px] leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
