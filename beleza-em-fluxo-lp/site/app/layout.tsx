import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://belezaemfluxo.metry.com.br"),
  title: {
    default: "beleza em fluxo · by metry — página profissional e crm para negócios de beleza",
    template: "%s · beleza em fluxo by metry",
  },
  description:
    "página profissional para o seu negócio de beleza + central de contatos que organiza cada nova oportunidade. a partir de r$ 1.000 em até 10x no cartão.",
  openGraph: {
    title: "beleza em fluxo · by metry",
    description:
      "escolha um modelo criado para o segmento de beleza. personalize com sua marca. organize seus contatos.",
    url: "https://belezaemfluxo.metry.com.br",
    siteName: "beleza em fluxo · by metry",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "beleza em fluxo · by metry",
    description:
      "página profissional para o seu negócio de beleza. a partir de r$ 1.000.",
  },
  robots: { index: true, follow: true },
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || "";

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
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800;900&family=League+Spartan:wght@500;600;700;800&family=Cormorant+Garamond:wght@400;500;600&family=Playfair+Display:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&family=Cormorant:wght@400;500;600&family=Barlow+Condensed:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {GTM_ID && (
          <Script id="gtm-init" strategy="afterInteractive">{`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');
          `}</Script>
        )}
        <Script id="datalayer-init" strategy="beforeInteractive">{`
          window.dataLayer = window.dataLayer || [];
        `}</Script>
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
