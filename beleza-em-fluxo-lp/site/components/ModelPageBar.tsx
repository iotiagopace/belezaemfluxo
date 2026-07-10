"use client";

import Link from "next/link";
import { track } from "@/lib/analytics";

type Props = {
  modeloNome: string;
  modeloSlug: string;
};

export default function ModelPageBar({ modeloNome, modeloSlug }: Props) {
  const selectHref = `/?modelo=${encodeURIComponent(modeloSlug)}#formulario`;
  return (
    <div className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-200">
      <div className="container-max flex flex-wrap items-center justify-between gap-3 py-3">
        <div className="text-xs uppercase tracking-widest text-neutral-500">
          Demonstração ·{" "}
          <span className="font-semibold text-neutral-800">
            Modelo {modeloNome}
          </span>
        </div>
        <div className="flex gap-2">
          <Link
            href="/#modelos"
            className="rounded-full border border-neutral-300 px-4 py-2 text-xs font-medium hover:bg-neutral-100"
          >
            Voltar para os modelos
          </Link>
          <Link
            href={selectHref}
            onClick={() => track.modelSelect(modeloSlug)}
            className="rounded-full bg-[var(--color-ink)] px-4 py-2 text-xs font-medium text-white hover:bg-black"
          >
            Quero este modelo
          </Link>
        </div>
      </div>
      <div className="border-t border-neutral-200 bg-[var(--color-bg)] py-2 text-center text-[11px] text-neutral-500">
        Este é um modelo demonstrativo. Cores, imagens, textos e conteúdos serão
        personalizados para o seu negócio.
      </div>
    </div>
  );
}
