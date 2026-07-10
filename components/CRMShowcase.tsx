import Reveal from "@/components/Reveal";

/**
 * Two-card visual illustrating the CRM value:
 *  1) Pipeline visual em Kanban (light card, kanban mockup with focused deal)
 *  2) WhatsApp nativo (green card, chat mockup)
 */
export default function CRMShowcase() {
  return (
    <div className="mt-16 grid gap-5 md:gap-6 md:grid-cols-2">
      <Reveal>
        <PipelineCard />
      </Reveal>
      <Reveal delay={0.1}>
        <WhatsAppCard />
      </Reveal>
    </div>
  );
}

function PipelineCard() {
  return (
    <article
      className="relative overflow-hidden rounded-3xl p-8 md:p-10 h-full"
      style={{ background: "#F6F8FB", border: "1px solid #E4E9F0" }}
    >
      <div
        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl mb-8"
        style={{ background: "#EEF2FA", border: "1px solid #E4E9F0" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="4" width="4" height="12" rx="1" fill="#1E3A8A" />
          <rect x="10" y="4" width="4" height="16" rx="1" fill="#1E3A8A" />
          <rect x="17" y="4" width="4" height="8" rx="1" fill="#1E3A8A" />
        </svg>
      </div>

      <h3 className="text-neutral-900 text-2xl md:text-3xl font-semibold tracking-tight">
        Funil visual em Kanban
      </h3>
      <p className="mt-4 text-neutral-600 text-[15px] leading-relaxed max-w-sm">
        Arraste o contato entre as etapas, edita valor na hora, cria campo
        do jeito do seu negócio. Todo movimento fica registrado.
      </p>

      {/* Kanban mockup */}
      <div
        className="mt-8 rounded-xl p-4"
        style={{ background: "#EEF2F7", border: "1px solid #E4E9F0" }}
      >
        <div className="grid grid-cols-4 gap-3">
          <KanbanColumn label="Novo" dotColor="#3B82F6" placeholders={2} />
          <KanbanColumn label="Contato" dotColor="#10B981" placeholders={2} />
          <KanbanColumn label="Negociando" dotColor="#8B5CF6" placeholders={1} focused />
          <KanbanColumn label="Proposta" dotColor="#F59E0B" placeholders={1} />
        </div>
      </div>
    </article>
  );
}

function KanbanColumn({
  label,
  dotColor,
  placeholders,
  focused = false,
}: {
  label: string;
  dotColor: string;
  placeholders: number;
  focused?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1.5 text-[10px] font-semibold text-neutral-700">
        <span
          className="inline-block h-1.5 w-1.5 rounded-full flex-shrink-0"
          style={{ background: dotColor }}
        />
        <span className="truncate">{label}</span>
      </div>
      {Array.from({ length: placeholders }).map((_, i) => (
        <div
          key={i}
          className="h-6 rounded-md"
          style={{ background: "#E1E7EF" }}
        />
      ))}
      {focused && (
        <div
          className="h-6 rounded-md"
          style={{
            background: "#F3F6FB",
            border: "2px solid #1E3A8A",
          }}
        />
      )}
      {!focused && placeholders === 1 && (
        <div className="h-6 rounded-md" style={{ background: "#E1E7EF" }} />
      )}
    </div>
  );
}

function WhatsAppCard() {
  return (
    <article
      className="relative overflow-hidden rounded-3xl p-8 md:p-10 h-full text-white"
      style={{ background: "#095F53" }}
    >
      <div
        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl mb-8"
        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)" }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M21 12a8 8 0 1 1-3.5-6.6L21 4l-1.4 3.5A8 8 0 0 1 21 12z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
        WhatsApp nativo
      </h3>
      <p className="mt-4 text-white/85 text-[15px] leading-relaxed max-w-sm">
        Conversa e contato no mesmo lugar. O WhatsApp já vem por dentro. Não
        é plugin. Não é integração de terceiro.
      </p>

      {/* Chat mockup */}
      <div
        className="mt-8 rounded-xl p-4 flex flex-col gap-2.5"
        style={{ background: "#E5DBC7" }}
      >
        <ChatBubble side="in">Oi! Recebi a proposta, valeu 😊</ChatBubble>
        <ChatBubble side="in">Posso pagar parcelado?</ChatBubble>
        <ChatBubble side="out" time="14:32">
          Sim, em até 6x sem juros
        </ChatBubble>
        <ChatBubble side="in">Fechado, manda o link</ChatBubble>
      </div>
    </article>
  );
}

function ChatBubble({
  children,
  side,
  time,
}: {
  children: React.ReactNode;
  side: "in" | "out";
  time?: string;
}) {
  const isOut = side === "out";
  return (
    <div className={`flex ${isOut ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] px-3 py-2 text-[13px] leading-tight ${
          isOut ? "rounded-lg" : "rounded-lg"
        }`}
        style={{
          background: isOut ? "#DCF8C6" : "#FFFFFF",
          color: "#111827",
          boxShadow: "0 1px 0.5px rgba(0,0,0,0.05)",
          borderRadius: isOut ? "10px 10px 2px 10px" : "10px 10px 10px 2px",
        }}
      >
        <span>{children}</span>
        {time && (
          <span className="ml-2 text-[10px] text-neutral-500 whitespace-nowrap">
            {time} <span style={{ color: "#22c55e" }}>✓✓</span>
          </span>
        )}
      </div>
    </div>
  );
}
