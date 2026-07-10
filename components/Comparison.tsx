const columns = [
  {
    title: "sem página estruturada",
    tone: "muted",
    items: [
      "serviços enviados manualmente",
      "informações espalhadas",
      "dependência exclusiva do instagram",
      "fotos difíceis de localizar",
      "dúvidas repetidas",
      "contatos perdidos em conversas antigas",
    ],
  },
  {
    title: "com página profissional",
    tone: "brand",
    items: [
      "serviços apresentados em um único lugar",
      "portfólio organizado",
      "endereço próprio para divulgação",
      "acesso direto ao whatsapp",
      "formulário de interesse",
      "apresentação mais profissional",
    ],
  },
  {
    title: "com página + gestão de contatos",
    tone: "white",
    items: [
      "novos contatos organizados",
      "etapas de atendimento",
      "tarefas de retorno",
      "histórico de oportunidades",
      "valores registrados",
      "visão do que avançou ou não",
    ],
  },
];

export default function Comparison() {
  return (
    <section className="section-divider bg-black py-24 md:py-32">
      <div className="container-max">
        <p className="section-label mb-6">/ comparação</p>
        <h2 className="display text-white text-4xl md:text-6xl max-w-4xl">
          uma operação mais simples para quem atende — e para quem quer contratar.
        </h2>
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {columns.map((c) => {
            const styles =
              c.tone === "white"
                ? "bg-white text-black border-white"
                : c.tone === "brand"
                ? "bg-white/5 border-white/10 text-white"
                : "bg-transparent border-dashed border-white/20 text-white/60";
            const dotBg = c.tone === "white" ? "bg-black" : "bg-white/60";
            return (
              <div key={c.title} className={`rounded-2xl border p-8 ${styles}`}>
                <h3 className="display text-xl md:text-2xl lowercase">{c.title}</h3>
                <ul className="mt-6 grid gap-2 text-[14px] lowercase">
                  {c.items.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className={`mt-1.5 inline-block h-1 w-1 rounded-full ${dotBg}`} />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
