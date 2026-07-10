"use client";

import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { track } from "@/lib/analytics";

export default function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/95 p-3 backdrop-blur md:hidden">
      <div className="flex gap-2">
        <a
          href="#modelos"
          className="flex-1 rounded-full bg-white py-3 text-center text-sm font-medium text-black lowercase"
        >
          ver modelos
        </a>
        <a
          href={buildWhatsAppUrl({ kind: "geral" })}
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-full bg-[#22c55e] py-3 text-center text-sm font-medium text-white lowercase"
          onClick={() => track.whatsappClick("sticky-mobile")}
        >
          falar com a equipe
        </a>
      </div>
    </div>
  );
}
