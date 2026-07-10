import ShinyText from "@/components/ShinyText";
import Reveal, { RevealStagger, RevealItem } from "@/components/Reveal";
import CRMShowcase from "@/components/CRMShowcase";
import CRMProductShots from "@/components/CRMProductShots";

const beneficios = [
  { t: "novo contato chegando", d: "veja quem chegou hoje e qual serviço a pessoa procurou." },
  { t: "atendimento em aberto", d: "quais conversas ainda estão esperando resposta ou retorno." },
  { t: "etapa do contato", d: "quem está sendo atendido, quem agendou, quem fechou, quem não fechou." },
  { t: "histórico junto", d: "serviço, observação, valor combinado, próximo passo. tudo no mesmo card." },
  { t: "tarefas pra retomar", d: "lembretes pra você não esquecer daquele orçamento pendente." },
  { t: "valores em negociação", d: "quanto tem no funil agora e o que vale a pena correr atrás." },
  { t: "resultado do mês", d: "quantos chegaram, quantos avançaram, quantos fecharam. sem planilha." },
  { t: "visão da equipe", d: "todo mundo que atende vê o mesmo painel e ninguém pisa no calo do outro." },
];

export default function CRMSection() {
  return (
    <section id="crm" className="section-divider bg-black py-24 md:py-32">
      <div className="container-max">
        <Reveal>
          <p className="section-label mb-6">/ crm · disponível no plano completo</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h2 className="display text-white text-4xl md:text-6xl max-w-4xl">
              o contato chegou. você precisa saber{" "}
              <ShinyText>o que aconteceu</ShinyText> com ele.
            </h2>
            <p className="max-w-md text-white/60 text-[15px] leading-relaxed">
              no plano completo, os formulários da sua página caem direto no
              atriva. cada pessoa entra numa fila organizada por etapa.
            </p>
          </div>
        </Reveal>

        <CRMShowcase />

        <p className="mt-12 max-w-2xl text-white/70 text-[15px] leading-relaxed">
          em vez de rolar conversa antiga no whatsapp pra achar quem prometeu
          voltar, você abre a tela e vê tudo em ordem.
        </p>

        <CRMProductShots />

        <div className="mt-20">
          <Reveal>
            <p className="section-label mb-6">/ o que muda no dia a dia</p>
            <h3 className="display text-white text-3xl md:text-5xl max-w-3xl">
              você para de perder oportunidade por esquecimento.
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
