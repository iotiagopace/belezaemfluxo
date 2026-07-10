const items = [
  { t: "modelos preparados para o segmento", d: "a estrutura já considera os conteúdos e informações importantes para negócios de beleza." },
  { t: "personalização profissional", d: "sua página recebe a identidade, imagens e informações da sua marca." },
  { t: "processo simples", d: "você escolhe, envia os materiais, revisa e recebe a página publicada." },
  { t: "tecnologia da metry", d: "desenvolvimento por uma empresa especializada em páginas, sistemas, crm e marketing digital." },
  { t: "possibilidade de evolução", d: "a página pode ser utilizada futuramente em campanhas, anúncios e novas estratégias de aquisição." },
];

export default function Differentials() {
  return (
    <section className="section-divider bg-black py-24 md:py-32">
      <div className="container-max">
        <p className="section-label mb-6">/ diferenciais</p>
        <h2 className="display text-white text-4xl md:text-6xl max-w-3xl">
          você não precisa começar do zero.
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
