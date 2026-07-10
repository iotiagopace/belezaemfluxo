import ShinyText from "@/components/ShinyText";
import Reveal, { RevealStagger, RevealItem } from "@/components/Reveal";

const items = [
  { t: "mostre seus serviços", d: "cada procedimento com nome, valor e o que está incluso. sem precisar mandar por áudio." },
  { t: "valorize seu portfólio", d: "fotos de trabalhos, ambientes e resultados num lugar que não some no feed." },
  { t: "facilite o contato", d: "botão de whatsapp, formulário e canais direto no topo. o cliente decide como falar." },
  { t: "mostre onde você fica", d: "endereço, mapa e horário na hora. sem precisar procurar no story fixado." },
  { t: "reforce a marca", d: "cor, logo e tom de voz consistentes em todo lugar que sua página aparecer." },
  { t: "prepare pra anúncio", d: "página estruturada pra rodar campanha no instagram, facebook e google quando quiser." },
];

export default function ValueProposition() {
  return (
    <section className="section-divider bg-black py-24 md:py-32">
      <div className="container-max">
        <Reveal>
          <p className="section-label mb-6">/ o que muda</p>
          <h2 className="display text-white text-4xl md:text-6xl max-w-4xl">
            um lugar único pra <ShinyText>apresentar</ShinyText> o seu negócio.
          </h2>
          <p className="mt-8 max-w-2xl text-white/70 text-[17px] leading-relaxed">
            sua página vira o link que você manda no whatsapp, coloca na bio,
            usa no anúncio. tudo que importa fica junto e você para de repetir.
          </p>
        </Reveal>

        <RevealStagger className="mt-16 grid gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <RevealItem key={it.t} className="bg-black p-8 md:p-10">
              <div className="metry-num">0{i + 1}</div>
              <h3 className="mt-6 display text-white text-xl md:text-2xl">{it.t}</h3>
              <p className="mt-4 text-white/60 text-[14px] leading-relaxed">{it.d}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
