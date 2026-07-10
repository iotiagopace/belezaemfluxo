import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Beleza em Fluxo · by Metry — Página profissional para negócios de beleza";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          padding: 72,
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              fontSize: 20,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            / beleza em fluxo · by metry
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 96,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.0,
              textTransform: "lowercase",
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
            }}
          >
            <span>uma página profissional para o seu trabalho.</span>
          </div>
          <div
            style={{
              fontSize: 26,
              color: "rgba(255,255,255,0.7)",
              maxWidth: 900,
              lineHeight: 1.35,
            }}
          >
            escolha um modelo criado para o segmento de beleza. a metry
            personaliza a página com sua marca. contatos organizados no crm.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            paddingTop: 32,
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <div style={{ display: "flex", gap: 60 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ fontSize: 48, fontWeight: 500, letterSpacing: "-0.02em" }}>
                r$ 1.000
              </div>
              <div style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.5)" }}>
                página profissional
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ fontSize: 48, fontWeight: 500, letterSpacing: "-0.02em" }}>
                r$ 1.200
              </div>
              <div style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.5)" }}>
                página + crm
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ fontSize: 48, fontWeight: 500, letterSpacing: "-0.02em" }}>
                10x
              </div>
              <div style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.5)" }}>
                no cartão
              </div>
            </div>
          </div>
          <div style={{ fontSize: 18, color: "rgba(255,255,255,0.5)" }}>
            belezaemfluxo.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
