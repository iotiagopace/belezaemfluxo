const publico = [
  "salões de beleza",
  "studios de cílios",
  "designers de sobrancelhas",
  "espaços de estética",
  "profissionais de unhas",
  "maquiadoras",
  "cabeleireiros",
  "barbearias",
  "profissionais autônomos",
  "clínicas e studios especializados",
];

export default function Audience() {
  return (
    <section className="section-divider bg-black py-24 md:py-32">
      <div className="container-max">
        <p className="section-label mb-6">/ para quem é</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <h2 className="display text-white text-4xl md:text-6xl max-w-3xl">
            criado para quem trabalha com beleza.
          </h2>
          <p className="max-w-md text-white/60 text-[15px] leading-relaxed">
            não importa se você atende individualmente ou possui uma equipe. a
            estrutura é adaptada ao tamanho e aos serviços do seu negócio.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {publico.map((p) => (
            <div
              key={p}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[13px] text-white/80 lowercase"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
