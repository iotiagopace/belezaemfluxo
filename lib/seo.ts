export const SITE = {
  name: "Beleza em Fluxo · by Metry",
  url: "https://belezaemfluxo.vercel.app",
  description:
    "Página profissional para o seu negócio de beleza + central de contatos que organiza cada nova oportunidade. A partir de R$ 1.000 em até 10x no cartão.",
  locale: "pt_BR",
  logo: "https://belezaemfluxo.vercel.app/og-default.png",
  publisher: "Metry",
  contactEmail: "tiago@metry.cc",
  instagram: "https://www.instagram.com/cc.metry/",
} as const;

export const CANONICAL = (path = "/") =>
  `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;

export const MODELOS_META = {
  essencia: {
    title: "Modelo Essência · Página profissional para cílios, sobrancelhas e maquiagem",
    description:
      "Página profissional leve e feminina para profissionais de cílios, sobrancelhas, maquiagem e serviços independentes de beleza.",
    ogAlt: "Prévia do modelo Essência",
  },
  aura: {
    title: "Modelo Aura · Página para clínicas de estética e studios",
    description:
      "Modelo minimalista e sofisticado para clínicas estéticas, studios e espaços de beleza com posicionamento cuidadoso.",
    ogAlt: "Prévia do modelo Aura",
  },
  movimento: {
    title: "Modelo Movimento · Salões com equipe e múltiplos serviços",
    description:
      "Modelo moderno e dinâmico para salões com equipe, categorias de serviços de cabelo, unhas, maquiagem e agenda organizada.",
    ogAlt: "Prévia do modelo Movimento",
  },
  traco: {
    title: "Modelo Traço · Marca pessoal para designers e especialistas",
    description:
      "Modelo editorial para designers de sobrancelhas, lash designers e especialistas que constroem autoridade na própria marca.",
    ogAlt: "Prévia do modelo Traço",
  },
  forma: {
    title: "Modelo Forma · Editorial premium para salões e clínicas",
    description:
      "Modelo editorial premium com imagens grandes para salões, clínicas e studios com posicionamento superior.",
    ogAlt: "Prévia do modelo Forma",
  },
  urbano: {
    title: "Modelo Urbano · Barbearias, salões unissex e cabelo",
    description:
      "Modelo direto e contemporâneo para barbearias, salões unissex e profissionais de cabelo.",
    ogAlt: "Prévia do modelo Urbano",
  },
} as const;

export type ModeloSlug = keyof typeof MODELOS_META;

export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: SITE.logo,
    email: SITE.contactEmail,
    sameAs: [SITE.instagram, "https://metry.cc"],
    parentOrganization: {
      "@type": "Organization",
      name: "Metry",
      url: "https://metry.cc",
    },
  };
}

export function serviceJsonLd(name: string, description: string, price: number) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    provider: {
      "@type": "Organization",
      name: "Metry",
      url: "https://metry.cc",
    },
    areaServed: "BR",
    description,
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "BRL",
      availability: "https://schema.org/InStock",
    },
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
