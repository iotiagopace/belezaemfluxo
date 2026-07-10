"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { MODELOS, SEGMENTOS, SegmentoKey, priorizarPorSegmento } from "@/data/modelos";
import { track } from "@/lib/analytics";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import ShinyText from "@/components/ShinyText";
import { ArrowRight } from "@/components/icons";

type Props = {
  initialSegmento?: SegmentoKey | null;
  destaqueModelo?: string | null;
  onSelect: (modeloSlug: string) => void;
};

export default function ModelGallery({
  initialSegmento = null,
  destaqueModelo = null,
  onSelect,
}: Props) {
  const [segmento, setSegmento] = useState<SegmentoKey>(
    initialSegmento ?? "todos"
  );

  useEffect(() => {
    if (initialSegmento) setSegmento(initialSegmento);
  }, [initialSegmento]);

  const modelos = useMemo(() => {
    const base = priorizarPorSegmento(segmento);
    if (!destaqueModelo) return base;
    const highlighted = base.find((m) => m.slug === destaqueModelo);
    if (!highlighted) return base;
    return [highlighted, ...base.filter((m) => m.slug !== destaqueModelo)];
  }, [segmento, destaqueModelo]);

  return (
    <section id="modelos" className="section-divider bg-black py-24 md:py-32">
      <div className="container-max">
        <p className="section-label mb-6">/ modelos</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <h2 className="display text-white text-4xl md:text-6xl max-w-3xl">
            veja como a sua página pode ficar. <ShinyText>escolha o estilo</ShinyText> do seu negócio.
          </h2>
          <p className="max-w-md text-white/60 text-[15px] leading-relaxed">
            você escolhe um dos modelos. a metry entra com sua marca, foto,
            serviço, endereço e contato. entrega a página no ar.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-2" role="tablist" aria-label="filtrar modelos por segmento">
          {SEGMENTOS.map((seg) => (
            <button
              key={seg.key}
              className="chip"
              data-active={segmento === seg.key}
              onClick={() => {
                setSegmento(seg.key);
                track.filterModels(seg.key);
              }}
              role="tab"
              aria-selected={segmento === seg.key}
            >
              {seg.label.toLowerCase()}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {modelos.map((m, i) => {
            const highlighted = destaqueModelo === m.slug;
            return (
              <article
                key={m.slug}
                className={`group block overflow-hidden border-b pb-6 transition-colors ${
                  highlighted
                    ? "border-black"
                    : "border-black/15 hover:border-black"
                }`}
              >
                <div className={`relative w-full overflow-hidden bg-neutral-900 ${i % 3 === 1 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                  <Image
                    src={m.preview}
                    alt={`prévia do modelo ${m.nome}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                    priority={i < 3}
                  />
                  <div className="absolute bottom-3 left-3 flex max-w-[80%] gap-1.5">
                    <span className="bg-black/75 px-2.5 py-1 text-[10px] lowercase text-white backdrop-blur">
                      {m.segmentoLabel.toLowerCase()}
                    </span>
                    {highlighted && (
                      <span className="bg-white px-2.5 py-1 text-[10px] font-medium lowercase text-black">
                        recomendado
                      </span>
                    )}
                  </div>
                  <div className="absolute top-3 right-3 text-[11px] text-white/70 tabular-nums">
                    / modelo {m.numero}
                  </div>
                </div>
                <div className="pt-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg font-semibold lowercase text-black">{m.nome.toLowerCase()}</span>
                    <span className="text-xs text-black/45">/ {m.estilo.toLowerCase()}</span>
                  </div>
                  <p className="mb-4 text-[14px] leading-snug text-black/80 lowercase">
                    {m.descricao.toLowerCase()}
                  </p>
                  <ul className="grid grid-cols-2 gap-1.5 text-[12px] text-black/55 lowercase">
                    {m.destaques.map((d) => (
                      <li key={d} className="flex items-start gap-1.5">
                        <span className="mt-1.5 inline-block h-1 w-1 rounded-full bg-white/40 flex-shrink-0" />
                        {d.toLowerCase()}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Link
                      href={`/modelos/${m.slug}`}
                      className="inline-flex items-center gap-1.5 border-b border-black/30 px-1 py-2 text-xs text-black hover:border-black lowercase"
                      onClick={() => {
                        track.modelClick(m.slug);
                        track.demoOpen(m.slug);
                      }}
                    >
                      ver demonstração
                      <ArrowRight size={12} />
                    </Link>
                    <button
                      className="dark-on-light inline-flex items-center gap-1.5 bg-black px-4 py-2 text-xs text-white hover:bg-neutral-800 lowercase"
                      onClick={() => {
                        track.modelSelect(m.slug);
                        onSelect(m.slug);
                      }}
                    >
                      quero este modelo
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="display text-white text-xl md:text-2xl">
              nenhum modelo bateu com o que você imagina?
            </h3>
            <p className="text-sm text-white/60 mt-2 lowercase">
              chama a gente. adaptamos ou mostramos variações.
            </p>
          </div>
          <a
            href={buildWhatsAppUrl({ kind: "geral" })}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
            onClick={() => track.whatsappClick("gallery")}
          >
            falar com a equipe
          </a>
        </div>
      </div>
    </section>
  );
}
