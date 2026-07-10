const DEFAULT_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "5511999999999";

export type WhatsAppContext =
  | { kind: "geral" }
  | { kind: "modelo"; modelo: string }
  | { kind: "plano-pagina" }
  | { kind: "plano-completo" }
  | { kind: "parcelamento" }
  | { kind: "sdr"; sdr: string };

export function buildWhatsAppUrl(
  ctx: WhatsAppContext,
  phone: string = DEFAULT_PHONE
): string {
  const message = messageFor(ctx);
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

function messageFor(ctx: WhatsAppContext): string {
  switch (ctx.kind) {
    case "modelo":
      return `Olá! Gostei do modelo ${capitalize(
        ctx.modelo
      )} e quero entender como ele pode ser personalizado para o meu negócio.`;
    case "plano-pagina":
      return "Olá! Tenho interesse na Página Profissional de R$ 1.000. Quero receber os detalhes.";
    case "plano-completo":
      return "Olá! Tenho interesse no plano Página + Gestão de Contatos de R$ 1.200. Quero entender como funciona o Atriva.";
    case "parcelamento":
      return "Olá! Quero entender como funciona o pagamento em até 10 vezes no cartão.";
    case "sdr":
      return `Olá! Recebi o contato da ${ctx.sdr} e estou vendo os modelos da Beleza em Fluxo.`;
    default:
      return "Olá! Vi a página da Beleza em Fluxo e quero conhecer os modelos disponíveis.";
  }
}

function capitalize(s: string): string {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}
