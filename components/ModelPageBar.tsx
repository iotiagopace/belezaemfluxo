"use client";

import Link from "next/link";
import { track } from "@/lib/analytics";
import { SITE, breadcrumbJsonLd } from "@/lib/seo";
import { ArrowRight } from "@/components/icons";

type Props = {
  modeloNome: string;
  modeloSlug: string;
};

export default function ModelPageBar({ modeloNome, modeloSlug }: Props) {
  const selectHref = `/?modelo=${encodeURIComponent(modeloSlug)}#formulario`;
  const jsonld = breadcrumbJsonLd([
    { name: "Início", url: SITE.url },
    { name: "Modelos", url: `${SITE.url}/#modelos` },
    { name: `Modelo ${modeloNome}`, url: `${SITE.url}/modelos/${modeloSlug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonld) }}
      />
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200">
        <div className="container-max flex flex-wrap items-center justify-between gap-3 py-3">
          <div className="text-xs uppercase tracking-widest text-neutral-500">
            Demonstração ·{" "}
            <span className="font-semibold text-neutral-900">
              Modelo {modeloNome}
            </span>
          </div>
          <div className="flex gap-2">
            <Link
              href="/#modelos"
              className="rounded-full border border-neutral-300 px-4 py-2 text-xs font-medium text-neutral-900 hover:bg-neutral-100 transition-colors"
            >
              Voltar para os modelos
            </Link>
            <Link
              href={selectHref}
              onClick={() => track.modelSelect(modeloSlug)}
              className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-4 py-2 text-xs font-medium text-white hover:bg-black transition-colors"
            >
              Quero este modelo
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
        <div className="border-t border-neutral-200 bg-neutral-50 py-2 text-center text-[11px] text-neutral-500">
          Este é um modelo demonstrativo. Cores, imagens, textos e conteúdos
          serão personalizados para o seu negócio.
        </div>
      </div>
    </>
  );
}
