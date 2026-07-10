"use client";

import { buildWhatsAppUrl, WhatsAppContext } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

type Props = { context?: WhatsAppContext; origin?: string };

export default function FloatingWhatsApp({
  context = { kind: "geral" },
  origin = "floating",
}: Props) {
  return (
    <a
      href={buildWhatsAppUrl(context)}
      target="_blank"
      rel="noreferrer"
      onClick={() => track.whatsappClick(origin)}
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-24 right-5 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-[var(--color-whatsapp)] text-white shadow-lg transition hover:scale-105 md:inline-flex"
    >
      <svg width="26" height="26" viewBox="0 0 32 32" fill="currentColor">
        <path d="M16 3C9 3 3.5 8.5 3.5 15.5c0 2.4.7 4.6 1.9 6.5L3 29l7.2-2.3c1.8 1 3.9 1.5 6 1.5 7 0 12.5-5.5 12.5-12.5S23 3 16 3zm0 22.7c-1.9 0-3.7-.5-5.2-1.4l-.4-.2-4.3 1.4 1.4-4.2-.2-.4c-1-1.6-1.6-3.5-1.6-5.5 0-5.6 4.6-10.2 10.3-10.2s10.2 4.6 10.2 10.2c0 5.6-4.6 10.3-10.2 10.3zm5.7-7.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.5c-.2 0-.5.1-.8.4s-1 1-1 2.4c0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.3 2.9 1.2 2.9.8 3.4.8.5 0 1.8-.7 2-1.5.2-.7.2-1.4.2-1.5-.1-.1-.3-.2-.6-.4z" />
      </svg>
    </a>
  );
}
