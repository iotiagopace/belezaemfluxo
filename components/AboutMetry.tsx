import { ArrowRight } from "@/components/icons";
import ShinyText from "@/components/ShinyText";

export default function AboutMetry() {
  return (
    <section className="section-divider bg-black py-24 md:py-32">
      <div className="container-max">
        <p className="section-label mb-6">/ institucional</p>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 items-start">
          <div>
            <h2 className="display text-white text-4xl md:text-6xl">
              um produto feito pela <ShinyText>metry</ShinyText>.
            </h2>
            <p className="mt-8 text-white/70 text-[16px] leading-relaxed max-w-lg">
              a beleza em fluxo nasceu pra colocar quem trabalha com beleza no
              digital sem drama. página profissional, contatos no lugar e uma
              agência do lado.
            </p>
            <p className="mt-4 text-white/60 text-[15px] leading-relaxed max-w-lg">
              a metry entrega site, sistema, crm, automação e mídia pra
              empresa que quer crescer com processo.
            </p>
            <a
              href="https://metry.cc"
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-10"
            >
              conhecer a metry
              <ArrowRight size={16} />
            </a>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10">
            <p className="section-label mb-6">/ o que a metry cobre</p>
            <h3 className="display text-white text-2xl md:text-4xl">
              estratégia, performance, crm, dados e digital.
            </h3>
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "estratégia",
                "performance",
                "crm & automação",
                "dados & bi",
                "sites & sistemas",
                "branding",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[12px] border border-white/20 text-white/70 rounded-full px-3 py-1 lowercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
