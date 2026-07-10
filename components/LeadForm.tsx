"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { track } from "@/lib/analytics";
import { MODELOS } from "@/data/modelos";
import { ArrowRight, Check } from "@/components/icons";

type FormState = {
  nome: string;
  nome_negocio: string;
  whatsapp: string;
  email: string;
  cidade: string;
  estado: string;
  segmento: string;
  possui_site: string;
  organizacao_contatos: string;
  interesse_plano: string;
  modelo_interesse: string;
  consentimento: boolean;
};

type Hidden = {
  origem: string;
  sdr: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  gclid: string;
  fbclid: string;
  pagina_origem: string;
  referrer: string;
};

const initialForm: FormState = {
  nome: "",
  nome_negocio: "",
  whatsapp: "",
  email: "",
  cidade: "",
  estado: "",
  segmento: "",
  possui_site: "",
  organizacao_contatos: "",
  interesse_plano: "",
  modelo_interesse: "",
  consentimento: false,
};

const initialHidden: Hidden = {
  origem: "",
  sdr: "",
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_content: "",
  utm_term: "",
  gclid: "",
  fbclid: "",
  pagina_origem: "",
  referrer: "",
};

type Props = {
  presetModelo?: string;
  presetPlano?: "pagina" | "completo";
};

export default function LeadForm({ presetModelo, presetPlano }: Props) {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(initialForm);
  const [hidden, setHidden] = useState<Hidden>(initialHidden);
  const [started, setStarted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const preset: Partial<FormState> = {};
    const h: Hidden = {
      origem: params.get("origem") || "",
      sdr: params.get("sdr") || "",
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_content: params.get("utm_content") || "",
      utm_term: params.get("utm_term") || "",
      gclid: params.get("gclid") || "",
      fbclid: params.get("fbclid") || "",
      pagina_origem: window.location.pathname,
      referrer: document.referrer || "",
    };
    setHidden(h);

    if (params.get("modelo")) preset.modelo_interesse = params.get("modelo")!;
    if (params.get("plano")) preset.interesse_plano = params.get("plano")!;
    if (params.get("segmento")) preset.segmento = params.get("segmento")!;
    if (presetModelo) preset.modelo_interesse = presetModelo;
    if (presetPlano)
      preset.interesse_plano = presetPlano === "pagina" ? "Página profissional" : "Página + gestão de contatos";

    if (Object.keys(preset).length) {
      setForm((prev) => ({ ...prev, ...preset }));
    }
    if (h.origem) track.sdrOrigin(h.origem);
  }, [presetModelo, presetPlano]);

  useEffect(() => {
    if (presetModelo) setForm((prev) => ({ ...prev, modelo_interesse: presetModelo }));
  }, [presetModelo]);

  useEffect(() => {
    if (presetPlano) {
      const label = presetPlano === "pagina" ? "Página profissional" : "Página + gestão de contatos";
      setForm((prev) => ({ ...prev, interesse_plano: label }));
    }
  }, [presetPlano]);

  const contextualMessage = useMemo(() => {
    if (form.possui_site === "Tenho apenas Instagram") {
      return "seu instagram pode continuar sendo um canal importante. a página organiza as informações que hoje ficam espalhadas.";
    }
    if (form.organizacao_contatos === "CRM") {
      return "ótimo. nossa equipe pode avaliar se faz sentido manter sua ferramenta atual ou apresentar o atriva.";
    }
    if (form.organizacao_contatos === "Não tenho processo definido") {
      return "o plano completo pode ajudar a organizar os contatos desde o primeiro atendimento.";
    }
    return "";
  }, [form.possui_site, form.organizacao_contatos]);

  function update<K extends keyof FormState>(k: K, v: FormState[K]) {
    if (!started) {
      setStarted(true);
      track.formStart();
    }
    setForm((prev) => ({ ...prev, [k]: v }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting) return;
    if (!form.nome || !form.whatsapp || !form.segmento || !form.consentimento) return;

    setSubmitting(true);
    const payload = {
      ...form,
      ...hidden,
      data_hora_envio: new Date().toISOString(),
    };

    track.formSubmit({
      segmento: form.segmento,
      plano: form.interesse_plano,
      modelo: form.modelo_interesse,
      origem: hidden.origem,
      sdr: hidden.sdr,
    });

    try {
      const endpoint = process.env.NEXT_PUBLIC_LEAD_WEBHOOK;
      if (endpoint) {
        await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      }
    } catch {
      /* GTM já registrou */
    }

    router.push(
      `/obrigado?modelo=${encodeURIComponent(form.modelo_interesse || "")}&plano=${encodeURIComponent(form.interesse_plano || "")}`
    );
  }

  const modeloLabel = form.modelo_interesse
    ? MODELOS.find((m) => m.slug === form.modelo_interesse)?.nome || form.modelo_interesse
    : "";

  return (
    <section id="formulario" className="section-divider bg-black py-24 md:py-32">
      <div className="container-max">
        <div className="mx-auto max-w-3xl">
          <p className="section-label mb-6">/ formulário</p>
          <h2 className="display text-white text-4xl md:text-6xl">
            conte um pouco sobre o seu negócio.
          </h2>
          <p className="mt-6 text-white/70 text-[16px] leading-relaxed">
            preencha os dados e nossa equipe apresentará os modelos mais
            adequados para você.
          </p>

          {modeloLabel && (
            <div className="mt-8 flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white lowercase">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-black">
                <Check size={12} />
              </span>
              modelo selecionado: <span className="font-medium">{modeloLabel.toLowerCase()}</span>
            </div>
          )}

          <form className="mt-10 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit}>
            <Field label="nome" required>
              <input required value={form.nome} onChange={(e) => update("nome", e.target.value)} className={inputClass} />
            </Field>
            <Field label="nome do negócio">
              <input value={form.nome_negocio} onChange={(e) => update("nome_negocio", e.target.value)} className={inputClass} />
            </Field>
            <Field label="whatsapp" required>
              <input
                required
                inputMode="tel"
                placeholder="(11) 99999-9999"
                value={form.whatsapp}
                onChange={(e) => update("whatsapp", maskPhone(e.target.value))}
                className={inputClass}
              />
            </Field>
            <Field label="e-mail">
              <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass} />
            </Field>
            <Field label="cidade">
              <input value={form.cidade} onChange={(e) => update("cidade", e.target.value)} className={inputClass} />
            </Field>
            <Field label="estado">
              <input maxLength={2} placeholder="SP" value={form.estado} onChange={(e) => update("estado", e.target.value.toUpperCase())} className={inputClass} />
            </Field>

            <Field label="segmento" required>
              <select required value={form.segmento} onChange={(e) => update("segmento", e.target.value)} className={inputClass}>
                <option value="" className="text-black">selecione</option>
                <option className="text-black">Salão de beleza</option>
                <option className="text-black">Cílios</option>
                <option className="text-black">Sobrancelhas</option>
                <option className="text-black">Estética</option>
                <option className="text-black">Unhas</option>
                <option className="text-black">Cabelo</option>
                <option className="text-black">Barbearia</option>
                <option className="text-black">Outro</option>
              </select>
            </Field>

            <Field label="hoje você possui uma página ou site?">
              <select value={form.possui_site} onChange={(e) => update("possui_site", e.target.value)} className={inputClass}>
                <option value="" className="text-black">selecione</option>
                <option className="text-black">Sim</option>
                <option className="text-black">Não</option>
                <option className="text-black">Tenho apenas Instagram</option>
                <option className="text-black">Não sei informar</option>
              </select>
            </Field>

            <Field label="como organiza os novos contatos?">
              <select value={form.organizacao_contatos} onChange={(e) => update("organizacao_contatos", e.target.value)} className={inputClass}>
                <option value="" className="text-black">selecione</option>
                <option className="text-black">WhatsApp</option>
                <option className="text-black">Agenda física</option>
                <option className="text-black">Planilha</option>
                <option className="text-black">Sistema de agendamento</option>
                <option className="text-black">CRM</option>
                <option className="text-black">Não tenho processo definido</option>
              </select>
            </Field>

            <Field label="interesse">
              <select value={form.interesse_plano} onChange={(e) => update("interesse_plano", e.target.value)} className={inputClass}>
                <option value="" className="text-black">selecione</option>
                <option className="text-black">Página profissional</option>
                <option className="text-black">Página + gestão de contatos</option>
                <option className="text-black">Ainda quero entender as diferenças</option>
              </select>
            </Field>

            {contextualMessage && (
              <div className="sm:col-span-2 rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 lowercase">
                {contextualMessage}
              </div>
            )}

            <label className="sm:col-span-2 mt-2 flex items-start gap-3 text-sm text-white/70">
              <input
                type="checkbox"
                required
                checked={form.consentimento}
                onChange={(e) => update("consentimento", e.target.checked)}
                className="mt-1 h-4 w-4 accent-white"
              />
              <span className="lowercase leading-relaxed">
                ao enviar, você concorda em receber contato da equipe sobre esta
                solicitação. seus dados serão utilizados para atendimento e
                apresentação da solução.
              </span>
            </label>

            <div className="sm:col-span-2 mt-4 flex flex-wrap gap-3">
              <button type="submit" disabled={submitting} className="btn-primary disabled:opacity-60">
                {submitting ? "enviando…" : "quero receber os detalhes"}
                <ArrowRight size={16} />
              </button>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                onClick={() => track.whatsappClick("form")}
              >
                prefiro falar no whatsapp
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-xl border border-white/15 bg-white/5 text-white px-4 py-3 text-sm outline-none placeholder:text-white/30 focus:border-white/60 focus:bg-white/10";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-1.5 text-sm">
      <span className="text-white/70 lowercase">
        {label}
        {required && <span className="text-white ml-0.5">*</span>}
      </span>
      {children}
    </label>
  );
}

function maskPhone(v: string): string {
  const digits = v.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10)
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}
