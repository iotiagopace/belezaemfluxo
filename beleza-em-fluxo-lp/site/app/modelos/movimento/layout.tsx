import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modelo Movimento — Salões com equipe",
  description:
    "Demonstração do modelo Movimento. Moderno, visual e dinâmico — ideal para salões com múltiplos serviços e equipe.",
};

export default function MovimentoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
