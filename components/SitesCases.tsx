import { SITE_CASES } from "@/data/cases";
import { ArrowRight } from "@/components/icons";
import ShinyText from "@/components/ShinyText";
import Reveal, { RevealStagger, RevealItem } from "@/components/Reveal";

export default function SitesCases() {
  return (
    <section id="cases" className="section-divider bg-black py-24 md:py-32">
      <div className="container-max">
        <Reveal>
          <p className="section-label mb-6">/ cases</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
            <h2 className="display text-white text-4xl md:text-6xl max-w-3xl">
              <ShinyText>resultado</ShinyText> em produção.
            </h2>
            <p className="max-w-md text-white/60 text-[15px] leading-relaxed">
              uma amostra dos sites que a metry já colocou no ar. o mesmo
              padrão que sua página de beleza recebe.
            </p>
          </div>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6" stagger={0.06}>
          {SITE_CASES.map((c, i) => (
            <RevealItem key={c.domain}>
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="group block h-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="relative w-full overflow-hidden bg-neutral-900" style={{ aspectRatio: "16/10" }}>
                  {c.noPreview ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-900 to-black">
                      <span className="display text-white/30 text-4xl">
                        {c.name.split(" ")[0]}
                      </span>
                    </div>
                  ) : (
                    <img
                      src={`https://api.microlink.io/?url=${encodeURIComponent(
                        c.url
                      )}&screenshot=true&meta=false&embed=screenshot.url&waitFor=2000&viewport.width=1280&viewport.height=800`}
                      alt={`prévia do site de ${c.name}`}
                      loading={i > 2 ? "lazy" : "eager"}
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] bg-black/70 backdrop-blur text-white rounded-full px-2.5 py-0.5 lowercase">
                      {c.type}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 text-[11px] text-white/70 tabular-nums lowercase">
                    {c.domain}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white font-medium lowercase">
                      {c.name}
                    </span>
                    <span className="text-white/50 inline-flex items-center gap-1 group-hover:text-white group-hover:gap-2 transition-all text-xs lowercase">
                      abrir site
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </a>
            </RevealItem>
          ))}
        </RevealStagger>

        <p className="mt-10 text-center text-xs text-white/40 lowercase">
          projetos no ar pela metry · abertos pra você conferir
        </p>
      </div>
    </section>
  );
}
