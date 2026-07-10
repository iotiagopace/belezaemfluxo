export type SiteCase = {
  url: string;
  type: string;
  name: string;
  domain: string;
  noPreview?: boolean;
};

export const SITE_CASES: SiteCase[] = [
  {
    url: "https://www.studiobarra.com.br/",
    type: "studio · arquitetura",
    name: "barra studio criativo",
    domain: "studiobarra.com.br",
  },
  {
    url: "https://www.nomosestudio.com.br/",
    type: "studio criativo",
    name: "nomos studio",
    domain: "nomosestudio.com.br",
    noPreview: true,
  },
  {
    url: "https://www.mecanicarodricar.com.br/",
    type: "oficina mecânica",
    name: "mecânica rodricar",
    domain: "mecanicarodricar.com.br",
  },
  {
    url: "https://www.dranaielisantana.com.br/",
    type: "clínica · saúde",
    name: "dra. anaieli santana",
    domain: "dranaielisantana.com.br",
  },
  {
    url: "https://www.frutmel.com.br/",
    type: "indústria · alimentos",
    name: "frutmel",
    domain: "frutmel.com.br",
  },
  {
    url: "https://www.sevenperformance.com.br/",
    type: "consultoria · franquias",
    name: "seven performance",
    domain: "sevenperformance.com.br",
  },
  {
    url: "https://checkfastvistorias.com.br/sejaumfranqueado/",
    type: "franquias · inspeção veicular",
    name: "checkfast vistorias",
    domain: "checkfastvistorias.com.br",
  },
];
