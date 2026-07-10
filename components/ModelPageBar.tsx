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
      <div className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/90 text-neutral-900 backdrop-blur-xl">
        <div className="container-max flex min-h-16 items-center justify-between gap-3 py-2.5">
          <div className="min-w-0 text-[10px] uppercase tracking-[0.18em] text-neutral-500 sm:text-xs">
            <span className="hidden sm:inline">Demonstração · </span>
            <span className="font-semibold text-neutral-900">
              Modelo {modeloNome}
            </span>
          </div>
          <div className="flex shrink-0 gap-2">
            <Link
              href="/#modelos"
              className="hidden items-center border-b border-neutral-400 px-1 py-2 text-xs font-medium text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900 sm:inline-flex"
            >
              Ver outros
            </Link>
            <Link
              href={selectHref}
              onClick={() => track.modelSelect(modeloSlug)}
              className="inline-flex min-h-10 items-center gap-1.5 bg-neutral-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-neutral-700"
            >
              Escolher {modeloNome}
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
        <div className="border-t border-neutral-200/70 bg-neutral-50/90 px-4 py-1.5 text-center text-[10px] text-neutral-500 sm:text-[11px]">
          Uma demonstração. Sua marca, fotos, serviços e conteúdo entram na versão final.
        </div>
      </div>
    </>
  );
}
