/**
 * dataLayer helper — envia eventos para o GTM.
 * Se o GTM não estiver instalado (env sem NEXT_PUBLIC_GTM_ID), os eventos
 * ficam empilhados no window.dataLayer e podem ser lidos manualmente.
 */

type Primitive = string | number | boolean | null | undefined;
export type EventPayload = Record<string, Primitive | Record<string, Primitive>>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

function push(event: string, payload: EventPayload = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
}

export const track = {
  pageView: (extra: EventPayload = {}) => push("page_view", extra),
  viewModels: () => push("view_models"),
  filterModels: (segmento: string) => push("filter_models", { segmento }),
  modelClick: (modelo: string) => push("model_click", { modelo }),
  demoOpen: (modelo: string) => push("demo_open", { modelo }),
  modelSelect: (modelo: string) => push("model_select", { modelo }),
  planView: (plano: string) => push("plan_view", { plano }),
  packageSelect: (plano: string) => push("package_select", { plano }),
  whatsappClick: (origin: string, extra: EventPayload = {}) =>
    push("whatsapp_click", { origin, ...extra }),
  formStart: () => push("form_start"),
  formSubmit: (payload: EventPayload) => push("form_submit", payload),
  sdrOrigin: (origem: string) => push("sdr_origin", { origem }),
  faqOpen: (pergunta: string) => push("faq_open", { pergunta }),
};
