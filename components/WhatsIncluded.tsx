import { Check } from "@/components/icons";

const items = [
  "personalização com sua marca",
  "cores e identidade visual",
  "apresentação dos serviços",
  "galeria de fotos",
  "seção sobre o negócio ou profissional",
  "depoimentos ou avaliações",
  "endereço e mapa",
  "horário de atendimento",
  "instagram e redes sociais",
  "botões para whatsapp",
  "formulário de contato",
  "versão para celular, tablet e computador",
  "configuração básica para o google",
  "certificado de segurança",
  "instalação no domínio",
  "estrutura preparada para mensuração",
  "uma rodada de ajustes antes da publicação",
];

export default function WhatsIncluded() {
  return (
    <section id="incluso" className="section-divider bg-black py-24 md:py-32">
      <div className="container-max">
        <p className="section-label mb-6">/ o que está incluso</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <h2 className="display text-white text-4xl md:text-6xl max-w-3xl">
            sua página pronta para divulgar.
          </h2>
          <p className="max-w-md text-white/60 text-[15px] leading-relaxed">
            a metry recebe os seus materiais, personaliza o modelo escolhido e
            publica a página com as principais informações do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((it) => (
            <div key={it} className="flex items-start gap-3 border border-white/10 rounded-xl bg-white/5 px-4 py-3">
              <span className="mt-0.5 flex-shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-black">
                <Check size={12} />
              </span>
              <span className="text-white/80 text-[14px] lowercase">{it}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-white/40 lowercase">
          * o cliente fornece logo, imagens, serviços, contatos e demais informações para a personalização.
        </p>
      </div>
    </section>
  );
}
