# Beleza em Fluxo by Metry

Landing page comercial + 6 templates de página profissional para negócios de beleza. Produto Metry.

## Estrutura do repositório

```
belezaemfluxo/
├── beleza-em-fluxo-lp/
│   ├── README.md                    # Visão geral do pacote
│   ├── 01-estrutura-e-copy.md       # Copy completo da LP
│   ├── 02-arquitetura-de-conversao.md
│   ├── 03-formulario-e-campos.md
│   ├── 04-modelos-e-galeria.md
│   ├── 05-requisitos-tecnicos.md
│   ├── 06-checklist-de-publicacao.md
│   ├── copy/                        # Mensagens auxiliares
│   ├── data/                        # Contratos de dados (JSON)
│   └── site/                        # Aplicação Next.js (o que roda)
└── README.md
```

## Rodando o projeto

```bash
cd beleza-em-fluxo-lp/site
npm install
npm run dev
```

Servidor em <http://localhost:3000>. Detalhes de variáveis de ambiente, rotas, parâmetros de URL suportados e eventos de mensuração ficam no [README do site](beleza-em-fluxo-lp/site/README.md).

## Deploy na Vercel

Ao importar o repo na Vercel, aponte o **Root Directory** para `beleza-em-fluxo-lp/site`. A Vercel detecta o Next.js automaticamente.

Variáveis de ambiente esperadas (opcionais para dev):

- `NEXT_PUBLIC_GTM_ID` — Google Tag Manager
- `NEXT_PUBLIC_WHATSAPP_PHONE` — WhatsApp da equipe (E.164 sem `+`)
- `NEXT_PUBLIC_LEAD_WEBHOOK` — endpoint de recebimento dos leads (Atriva / n8n)

## Rotas

- `/` — landing page
- `/modelos/{essencia,aura,movimento,traco,forma,urbano}` — demonstrações dos 6 modelos
- `/obrigado` — confirmação pós-envio do formulário

## Stack

- Next.js 14 (App Router) · React 18 · TypeScript
- TailwindCSS
- Fontes: League Spartan (display, tipografia Metry) + Inter (body) + fontes específicas por modelo (Cormorant Garamond, Playfair Display, Space Grotesk, Cormorant, Barlow Condensed)

## Notas

- Os templates de referência do Envato (Main Files, Modis, Saloni) usados durante a pesquisa **não** estão no repositório — são produtos comerciais licenciados.
- O conteúdo dos 6 modelos é fictício e realista. Para cada cliente real, o modelo é clonado e personalizado com marca, fotos e copy próprios.
