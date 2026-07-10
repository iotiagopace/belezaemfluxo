const items = [
  { t: "modelos pensados pra beleza", d: "a estrutura já vem com o que faz sentido pra quem atende: serviço, foto, agenda, contato." },
  { t: "personalização com cuidado", d: "sua marca, suas cores, suas imagens. o modelo não vira aquele template padronizado." },
  { t: "processo simples", d: "escolhe o modelo, manda seus materiais, revisa a primeira versão, publica." },
  { t: "tecnologia da metry", d: "quem faz é uma agência que já entrega site, sistema, crm e mídia todo mês." },
  { t: "espaço pra crescer", d: "amanhã você quer rodar anúncio, montar campanha, integrar outra coisa. a página está preparada." },
];

export default function Differentials() {
  return (
    <section className="section-divider bg-black py-24 md:py-32">
      <div className="container-max">
        <p className="section-label mb-6">/ por que vale</p>
        <h2 className="display text-white text-4xl md:text-6xl max-w-3xl">
          você não começa do zero.
        </h2>
        <div className="mt-16 grid gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div key={it.t} className="metry-tile p-8 md:p-10 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="metry-num">0{i + 1}</span>
              </div>
              <h3 className="display text-2xl">{it.t}</h3>
              <p className="text-[14px] leading-relaxed text-white/60 metry-tile-muted">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
