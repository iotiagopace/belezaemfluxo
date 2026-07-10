"use client";

import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";
import { MODELOS } from "@/data/modelos";
import { ArrowRight, Check } from "@/components/icons";

export default function ObrigadoPage() {
  return (
    <div className="lp-scope">
      <Header />
      <Suspense fallback={null}>
        <Content />
      </Suspense>
      <Footer />
    </div>
  );
}

function Content() {
  const params = useSearchParams();
  const modeloSlug = params.get("modelo") || "";
  const plano = params.get("plano") || "";
  const modelo = MODELOS.find((m) => m.slug === modeloSlug);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "thank_you_view", modelo: modeloSlug, plano });
  }, [modeloSlug, plano]);

  const waCtx = modeloSlug
    ? ({ kind: "modelo", modelo: modeloSlug } as const)
    : plano === "Página + gestão de contatos"
    ? ({ kind: "plano-completo" } as const)
    : ({ kind: "geral" } as const);

  return (
    <main className="section-pad pt-32">
      <div className="container-max max-w-3xl text-center">
        <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-black">
          <Check size={26} />
        </div>
        <p className="section-label mt-8 mb-6">/ recebido</p>
        <h1 className="display text-white text-4xl md:text-6xl">
          recebemos suas informações.
        </h1>
        <p className="mt-6 text-white/70 text-[16px] leading-relaxed lowercase">
          nossa equipe vai revisar seu contexto e retornar com os próximos passos
          em até 1 dia útil.
        </p>

        {(modelo || plano) && (
          <div className="mt-10 grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
            {modelo && (
              <div className="text-sm">
                <span className="text-white/50 lowercase">modelo selecionado:</span>{" "}
                <span className="text-white font-medium lowercase">{modelo.nome}</span>
              </div>
            )}
            {plano && (
              <div className="text-sm">
                <span className="text-white/50 lowercase">plano de interesse:</span>{" "}
                <span className="text-white font-medium lowercase">{plano}</span>
              </div>
            )}
          </div>
        )}

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={buildWhatsAppUrl(waCtx)}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp"
            onClick={() => track.whatsappClick("obrigado")}
          >
            adiantar conversa no whatsapp
            <ArrowRight size={16} />
          </a>
          <Link href="/#modelos" className="btn-secondary">
            ver mais modelos
          </Link>
        </div>
      </div>
    </main>
  );
}
