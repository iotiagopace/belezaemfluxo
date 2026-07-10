import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { SITE, orgJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Beleza em Fluxo · by Metry — Página profissional e CRM para negócios de beleza",
    template: "%s · Beleza em Fluxo by Metry",
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: "Metry", url: "https://metry.cc" }],
  creator: "Metry",
  publisher: "Metry",
  category: "business",
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title: "Beleza em Fluxo · by Metry",
    description:
      "Escolha um modelo criado para o segmento de beleza. Personalize com sua marca. Organize seus contatos.",
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: SITE.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: "Beleza em Fluxo · by Metry",
    description:
      "Página profissional para o seu negócio de beleza. A partir de R$ 1.000.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-SE8JBMPE0S";
const ATRIVA_SNIPPET =
  process.env.NEXT_PUBLIC_ATRIVA_SNIPPET ||
  "https://api.atriva.com.br/api/public/leads/snippet/atv_5af799ed15a2827f8cacec56.js";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=League+Spartan:wght@500;600;700;800&family=Cormorant+Garamond:wght@400;500;600&family=Playfair+Display:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&family=Cormorant:wght@400;500;600&family=Barlow+Condensed:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd()) }}
        />
        <Script id="datalayer-init" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
        `}</Script>
        {GTM_ID && (
          <Script id="gtm-init" strategy="afterInteractive">{`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');
          `}</Script>
        )}
        {/* Google Analytics 4 (gtag) */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">{`
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}</Script>
          </>
        )}
        {/* Atriva — captura de leads */}
        {ATRIVA_SNIPPET && (
          <Script src={ATRIVA_SNIPPET} strategy="afterInteractive" />
        )}
      </head>
      <body>
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  );
}
