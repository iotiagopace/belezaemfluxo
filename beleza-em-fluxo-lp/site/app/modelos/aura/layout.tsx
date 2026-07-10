import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modelo Aura — Clínicas e studios",
  description:
    "Demonstração do modelo Aura. Minimalista, sofisticado e clínico — ideal para clínicas de estética e studios de beleza.",
};

export default function AuraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
