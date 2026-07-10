import ShinyText from "@/components/ShinyText";
import Reveal, { RevealStagger, RevealItem } from "@/components/Reveal";
import CRMShowcase from "@/components/CRMShowcase";

const beneficios = [
  { t: "novas pessoas interessadas", d: "visualize quem entrou em contato e qual serviço despertou interesse." },
  { t: "atendimentos pendentes", d: "saiba quais conversas ainda precisam de resposta ou acompanhamento." },
  { t: "etapa de cada contato", d: "veja quem está em atendimento, aguardando retorno, agendado ou concluído." },
  { t: "histórico de informações", d: "registre serviço procurado, observações, valores e próximos passos." },
  { t: "tarefas de retorno", d: "organize lembretes para não esquecer de retomar uma conversa." },
  { t: "valores em negociação", d: "acompanhe os valores relacionados às oportunidades comerciais registradas." },
  { t: "desempenho do atendimento", d: "observe quantos contatos chegaram, avançaram ou não contrataram." },
  { t: "visão para a equipe", d: "as pessoas responsáveis pelo atendimento acompanham a mesma operação." },
];

export default function CRMSection() {
  return (
    <section id="crm" className="section-divider bg-black py-24 md:py-32">
      <div className="container-max">
        <Reveal>
          <p className="section-label mb-6">/ crm · disponível no plano completo</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h2 className="display text-white text-4xl md:text-6xl max-w-4xl">
              o contato chegou. agora você precisa saber{" "}
              <ShinyText>o que aconteceu</ShinyText> com ele.
            </h2>
            <p className="max-w-md text-white/60 text-[15px] leading-relaxed">
              no plano página + gestão de contatos, os formulários da página são
              conectados ao atriva. cada nova pessoa interessada entra em uma
              central organizada por etapas.
            </p>
          </div>
        </Reveal>

        <CRMShowcase />

        <p className="mt-12 max-w-2xl text-white/70 text-[15px] leading-relaxed">
          em vez de procurar conversas antigas no whatsapp, você passa a ter uma
          visão organizada dos atendimentos — tudo no mesmo canal que o cliente
          já usa.
        </p>

        <div className="mt-20">
          <Reveal>
            <p className="section-label mb-6">/ benefícios</p>
            <h3 className="display text-white text-3xl md:text-5xl max-w-3xl">
              mais clareza para cuidar das oportunidades.
            </h3>
          </Reveal>
          <RevealStagger
            className="mt-12 grid gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden md:grid-cols-2 lg:grid-cols-4"
            stagger={0.05}
          >
            {beneficios.map((b, i) => (
              <RevealItem key={b.t} className="bg-black p-6 md:p-8">
                <div className="metry-num">0{i + 1}</div>
                <div className="mt-6 display text-white text-lg">{b.t}</div>
                <p className="mt-3 text-white/60 text-[13px] leading-relaxed">{b.d}</p>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
