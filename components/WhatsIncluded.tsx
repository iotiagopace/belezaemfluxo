import { Check } from "@/components/icons";
import Reveal, { RevealStagger, RevealItem } from "@/components/Reveal";

const items = [
  "sua marca aplicada",
  "cor e identidade visual",
  "apresentação dos serviços",
  "galeria de fotos",
  "seção sobre você ou o negócio",
  "depoimentos de cliente",
  "endereço e mapa",
  "horário de atendimento",
  "instagram e redes",
  "botão de whatsapp",
  "formulário de contato",
  "versão pra celular, tablet e desktop",
  "configuração pro google achar",
  "certificado de segurança",
  "instalação no seu domínio",
  "preparado pra medir resultado",
  "uma rodada de ajuste antes de publicar",
];

export default function WhatsIncluded() {
  return (
    <section id="incluso" className="section-divider bg-black py-24 md:py-32">
      <div className="container-max">
        <Reveal>
          <p className="section-label mb-6">/ o que vem junto</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <h2 className="display text-white text-4xl md:text-6xl max-w-3xl">
              sua página pronta pra divulgar.
            </h2>
            <p className="max-w-md text-white/60 text-[15px] leading-relaxed">
              você manda seus materiais. a metry personaliza o modelo, publica
              e entrega no ar.
            </p>
          </div>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" stagger={0.04}>
          {items.map((it) => (
            <RevealItem
              key={it}
              className="flex items-start gap-3 border border-white/10 rounded-xl bg-white/5 px-4 py-3"
            >
              <span className="mt-0.5 flex-shrink-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-black">
                <Check size={12} />
              </span>
              <span className="text-white/80 text-[14px] lowercase">{it}</span>
            </RevealItem>
          ))}
        </RevealStagger>

        <p className="mt-8 text-xs text-white/40 lowercase">
          * você entra com logo, foto, lista de serviço, endereço, contato e o que mais quiser mostrar.
        </p>
      </div>
    </section>
  );
}
