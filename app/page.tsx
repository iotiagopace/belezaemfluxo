"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ValueProposition from "@/components/ValueProposition";
import ModelGallery from "@/components/ModelGallery";
import SitesCases from "@/components/SitesCases";
import WhatsIncluded from "@/components/WhatsIncluded";
import CRMSection from "@/components/CRMSection";
import PricingSection from "@/components/PricingSection";
import HowItWorks from "@/components/HowItWorks";
import Comparison from "@/components/Comparison";
import Audience from "@/components/Audience";
import Differentials from "@/components/Differentials";
import AboutMetry from "@/components/AboutMetry";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import StickyMobileBar from "@/components/StickyMobileBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { SegmentoKey } from "@/data/modelos";
import { track } from "@/lib/analytics";

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}

function HomeContent() {
  const [presetModelo, setPresetModelo] = useState<string | undefined>();
  const [presetPlano, setPresetPlano] = useState<"pagina" | "completo" | undefined>();
  const [initialSegmento, setInitialSegmento] = useState<SegmentoKey | null>(null);
  const [destaqueModelo, setDestaqueModelo] = useState<string | null>(null);

  useEffect(() => {
    track.pageView();
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);

    const seg = params.get("segmento") as SegmentoKey | null;
    if (seg) setInitialSegmento(seg);

    const modelo = params.get("modelo");
    if (modelo) {
      setDestaqueModelo(modelo);
      setPresetModelo(modelo);
    }

    const plano = params.get("plano");
    if (plano === "pagina" || plano === "completo") setPresetPlano(plano);
  }, []);

  const handleSelectModel = useCallback((slug: string) => {
    setPresetModelo(slug);
    requestAnimationFrame(() => {
      const el = document.getElementById("formulario");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  const handleSelectPlan = useCallback((plan: "pagina" | "completo") => {
    setPresetPlano(plan);
    requestAnimationFrame(() => {
      const el = document.getElementById("formulario");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  return (
    <>
      <Header />
      <main className="pb-24 md:pb-0">
        <Hero />
        <ProblemSection />
        <ValueProposition />
        <ModelGallery
          initialSegmento={initialSegmento}
          destaqueModelo={destaqueModelo}
          onSelect={handleSelectModel}
        />
        <SitesCases />
        <WhatsIncluded />
        <CRMSection />
        <PricingSection onSelectPlan={handleSelectPlan} />
        <HowItWorks />
        <Comparison />
        <Audience />
        <Differentials />
        <AboutMetry />
        <FAQ />
        <FinalCTA />
        <LeadForm presetModelo={presetModelo} presetPlano={presetPlano} />
      </main>
      <Footer />
      <FloatingWhatsApp origin="floating" />
      <StickyMobileBar />
    </>
  );
}
