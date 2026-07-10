export type SegmentoKey =
  | "todos"
  | "saloes"
  | "cilios-sobrancelhas"
  | "estetica"
  | "unhas"
  | "cabelo"
  | "autonomos";

export const SEGMENTOS: { key: SegmentoKey; label: string }[] = [
  { key: "todos", label: "Todos" },
  { key: "saloes", label: "Salões" },
  { key: "cilios-sobrancelhas", label: "Cílios e Sobrancelhas" },
  { key: "estetica", label: "Estética" },
  { key: "unhas", label: "Unhas" },
  { key: "cabelo", label: "Cabelo" },
  { key: "autonomos", label: "Profissional Independente" },
];

export type Modelo = {
  slug: string;
  numero: string;
  nome: string;
  estilo: string;
  descricao: string;
  segmentoLabel: string;
  segmentos: SegmentoKey[];
  destaques: string[];
  preview: string;
  previewMobile: string;
  paletaHex: string[];
  ordem: number;
};

export const MODELOS: Modelo[] = [
  {
    slug: "essencia",
    numero: "01",
    nome: "Essência",
    estilo: "Leve, elegante, feminino",
    descricao:
      "Perfeito para quem trabalha com cílios, sobrancelhas, maquiagem ou atende como profissional independente.",
    segmentoLabel: "Cílios · Sobrancelhas · Maquiagem",
    segmentos: ["cilios-sobrancelhas", "autonomos"],
    destaques: [
      "Apresentação profissional",
      "Galeria de resultados",
      "Depoimentos",
      "WhatsApp em destaque",
    ],
    preview:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=80",
    previewMobile:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    paletaHex: ["#f5e9df", "#c98a7a", "#b6975c", "#1c1614"],
    ordem: 1,
  },
  {
    slug: "movimento",
    numero: "03",
    nome: "Movimento",
    estilo: "Moderno, visual, dinâmico",
    descricao:
      "Ideal para salões com equipe grande e múltiplos serviços que precisam mostrar tudo de forma organizada.",
    segmentoLabel: "Salões · Cabelo · Unhas · Maquiagem",
    segmentos: ["saloes", "cabelo", "unhas"],
    destaques: [
      "Serviços por categoria",
      "Equipe com fotos",
      "Galeria em grid",
      "Localização e horários",
    ],
    preview:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=80",
    previewMobile:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    paletaHex: ["#0a0a0a", "#ffffff", "#7c1d3f", "#e6e6e6"],
    ordem: 2,
  },
  {
    slug: "aura",
    numero: "02",
    nome: "Aura",
    estilo: "Minimalista, sofisticado, clínico",
    descricao:
      "Pensado para clínicas estéticas, studios e espaços de beleza com posicionamento sério e cuidadoso.",
    segmentoLabel: "Estética · Clínicas · Studios",
    segmentos: ["estetica", "saloes"],
    destaques: [
      "Tratamentos com descrição",
      "Profissionais em destaque",
      "Estrutura do espaço",
      "FAQ e formulário",
    ],
    preview:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1400&q=80",
    previewMobile:
      "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=80",
    paletaHex: ["#ffffff", "#f4f2ec", "#6b7a63", "#131413"],
    ordem: 3,
  },
  {
    slug: "traco",
    numero: "04",
    nome: "Traço",
    estilo: "Marca pessoal, autoridade, editorial",
    descricao:
      "Feito para designers de sobrancelhas, lash designers e especialistas que constroem autoridade na própria marca.",
    segmentoLabel: "Especialistas · Autoridade",
    segmentos: ["cilios-sobrancelhas", "autonomos"],
    destaques: [
      "Bio da profissional",
      "Técnicas e métodos",
      "Before/after",
      "Cursos e certificações",
    ],
    preview:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80",
    previewMobile:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    paletaHex: ["#f2ede4", "#7a5a41", "#3a2a20", "#0f0d0b"],
    ordem: 4,
  },
  {
    slug: "forma",
    numero: "05",
    nome: "Forma",
    estilo: "Editorial, premium, imagens grandes",
    descricao:
      "Para salão, clínica e studio com posicionamento superior. Pra quem cobra bem e quer parecer bem.",
    segmentoLabel: "Premium · Alto ticket",
    segmentos: ["saloes", "estetica"],
    destaques: [
      "Hero fullscreen",
      "Serviços em destaque",
      "Equipe com fotos grandes",
      "Storytelling visual",
    ],
    preview:
      "https://images.unsplash.com/photo-1470259078422-826894b933aa?auto=format&fit=crop&w=1400&q=80",
    previewMobile:
      "https://images.unsplash.com/photo-1470259078422-826894b933aa?auto=format&fit=crop&w=800&q=80",
    paletaHex: ["#0b0b0b", "#c9a35b", "#ffffff", "#2a2a2a"],
    ordem: 5,
  },
  {
    slug: "urbano",
    numero: "06",
    nome: "Urbano",
    estilo: "Direto, forte, contemporâneo",
    descricao:
      "Para barbearias, salões unissex e profissionais de cabelo com pegada urbana e serviços diretos.",
    segmentoLabel: "Barbearias · Cabelo",
    segmentos: ["cabelo", "saloes"],
    destaques: [
      "Tabela direta de serviços",
      "Equipe com especialidade",
      "Ambiente",
      "Localização e agendamento",
    ],
    preview:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1400&q=80",
    previewMobile:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
    paletaHex: ["#0a0a0a", "#ffffff", "#c8102e", "#1f1f1f"],
    ordem: 6,
  },
];

export function priorizarPorSegmento(segmento: SegmentoKey | null): Modelo[] {
  const base = [...MODELOS].sort((a, b) => a.ordem - b.ordem);
  if (!segmento || segmento === "todos") return base;
  const match = base.filter((m) => m.segmentos.includes(segmento));
  const rest = base.filter((m) => !m.segmentos.includes(segmento));
  return [...match, ...rest];
}

export function findModelo(slug: string): Modelo | undefined {
  return MODELOS.find((m) => m.slug === slug);
}
