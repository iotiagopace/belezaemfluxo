# Beleza em Fluxo by Metry

Landing page comercial + 6 templates de página profissional para negócios de beleza. Produto Metry.

## Rodando localmente

```bash
npm install
npm run dev
```

Servidor em <http://localhost:3000>.

## Deploy na Vercel

Repo pronto para deploy: importe em <https://vercel.com/new> e a Vercel detecta o Next.js automaticamente. Nenhuma configuração de Root Directory necessária.

Variáveis de ambiente esperadas (opcionais para dev):

- `NEXT_PUBLIC_GTM_ID` — Google Tag Manager
- `NEXT_PUBLIC_WHATSAPP_PHONE` — WhatsApp da equipe (E.164 sem `+`)
- `NEXT_PUBLIC_LEAD_WEBHOOK` — endpoint de recebimento dos leads (Atriva / n8n)

## Estrutura

```
belezaemfluxo/
├── app/                     # Rotas Next.js (App Router)
│   ├── page.tsx             # Landing page
│   ├── obrigado/page.tsx    # Confirmação pós-envio
│   └── modelos/{slug}/      # 6 demonstrações (essencia, aura, movimento, traco, forma, urbano)
├── components/              # Header, Hero, ModelGallery, LeadForm, ...
├── data/                    # modelos.ts, cases.ts
├── lib/                     # analytics (dataLayer), whatsapp (URL builder)
├── public/                  # Assets estáticos
├── docs/                    # Briefings originais (copy, arquitetura, mensuração)
├── package.json
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Rotas

- `/` — landing page (16 seções)
- `/modelos/{essencia,aura,movimento,traco,forma,urbano}` — demonstrações dos 6 modelos
- `/obrigado` — confirmação após envio do formulário

## Parâmetros de URL

| Parâmetro | Efeito |
|-----------|--------|
| `?segmento=` | Ordena os modelos priorizando o segmento (`saloes`, `cilios-sobrancelhas`, `estetica`, `unhas`, `cabelo`, `autonomos`) |
| `?modelo=` | Destaca um modelo no grid e pré-seleciona no formulário |
| `?plano=` | Pré-seleciona o plano (`pagina` ou `completo`) |
| `?origem=`, `?sdr=` | Registram origem do lead |
| `?utm_*`, `?gclid=`, `?fbclid=` | Capturados como campos ocultos |

## Eventos de mensuração (dataLayer / GTM)

`page_view` · `filter_models` · `model_click` · `demo_open` · `model_select` · `package_select` · `whatsapp_click` · `form_start` · `form_submit` · `sdr_origin` · `faq_open` · `thank_you_view`

## Stack

- Next.js 14 (App Router) · React 18 · TypeScript
- TailwindCSS
- Fontes: League Spartan (display, tipografia Metry) + Inter (body) + fontes específicas por modelo (Cormorant Garamond, Playfair Display, Space Grotesk, Cormorant, Barlow Condensed)

## Documentos

Os briefings de referência ficam em [`docs/`](docs/):

- [`docs/briefing-README.md`](docs/briefing-README.md)
- [`docs/01-estrutura-e-copy.md`](docs/01-estrutura-e-copy.md) — Copy completo da LP
- [`docs/02-arquitetura-de-conversao.md`](docs/02-arquitetura-de-conversao.md)
- [`docs/03-formulario-e-campos.md`](docs/03-formulario-e-campos.md)
- [`docs/04-modelos-e-galeria.md`](docs/04-modelos-e-galeria.md)
- [`docs/05-requisitos-tecnicos.md`](docs/05-requisitos-tecnicos.md)
- [`docs/06-checklist-de-publicacao.md`](docs/06-checklist-de-publicacao.md)
- [`docs/site-README.md`](docs/site-README.md) — README anterior da app

## Notas

- Os templates de referência do Envato (Main Files, Modis, Saloni) usados durante a pesquisa **não** estão no repositório — são produtos comerciais licenciados.
- O conteúdo dos 6 modelos é fictício e realista. Para cada cliente real, o modelo é clonado e personalizado com marca, fotos e copy próprios.
