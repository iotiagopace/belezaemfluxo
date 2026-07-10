# Beleza em Fluxo by Metry — Landing Page + Templates

Landing page comercial + 6 templates demonstrativos de página profissional para negócios de beleza, construídos em **Next.js 14 (App Router)** com **TypeScript** e **TailwindCSS**.

## Rodando localmente

```bash
cd site
npm install
npm run dev
```

Abra <http://localhost:3000>.

## Variáveis de ambiente

Crie um `.env.local` na pasta `site/`:

```bash
NEXT_PUBLIC_GTM_ID=GTM-XXXXXX          # opcional — Google Tag Manager
NEXT_PUBLIC_WHATSAPP_PHONE=5511999999999 # WhatsApp da equipe (E.164, sem "+")
NEXT_PUBLIC_LEAD_WEBHOOK=https://n8n.metry.com.br/webhook/beleza-em-fluxo # endpoint que recebe o payload do formulário
```

Sem essas variáveis, a LP funciona normalmente — apenas eventos e envio de lead não vão a nenhum destino remoto (o `dataLayer` local ainda registra os eventos para inspeção).

## Deploy na Vercel

1. Suba a pasta `site/` como um projeto separado (ou aponte a root do repositório para `beleza-em-fluxo-lp/site`).
2. Adicione as variáveis de ambiente acima no painel do projeto.
3. Faça o merge / push — Vercel builda e publica automaticamente.

## Estrutura

```
site/
├── app/
│   ├── layout.tsx            # metadata global, fontes, GTM
│   ├── page.tsx              # LP principal (16 seções)
│   ├── globals.css
│   ├── obrigado/page.tsx     # página pós-envio
│   └── modelos/
│       ├── essencia/         # Modelo 01 — Essência
│       ├── aura/             # Modelo 02 — Aura
│       ├── movimento/        # Modelo 03 — Movimento
│       ├── traco/            # Modelo 04 — Traço
│       ├── forma/            # Modelo 05 — Forma
│       └── urbano/           # Modelo 06 — Urbano
├── components/               # Header, Hero, ModelGallery, LeadForm, ...
├── data/modelos.ts           # metadata dos 6 modelos (nome, slug, segmentos, destaques)
├── lib/
│   ├── analytics.ts          # dataLayer / eventos
│   └── whatsapp.ts           # gerador de URLs de WhatsApp por contexto
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Parâmetros de URL suportados

| Parâmetro     | Efeito                                                                 |
|---------------|------------------------------------------------------------------------|
| `?segmento=`  | Ordena os modelos priorizando o segmento. Ex.: `?segmento=cilios-sobrancelhas` |
| `?modelo=`    | Destaca um modelo no grid e pré-seleciona no formulário. Ex.: `?modelo=aura` |
| `?plano=`     | Pré-seleciona o plano no formulário. Aceita `pagina` ou `completo`.    |
| `?origem=`    | Registra a origem do lead (ex.: `?origem=sdr`).                        |
| `?sdr=`       | Registra o nome da SDR (ex.: `?sdr=marina`).                           |
| `?utm_*`      | Todos os `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term` são capturados como campos ocultos e enviados junto com o lead. |
| `?gclid=`, `?fbclid=` | Também capturados como campos ocultos.                         |

Valores de `segmento` aceitos:
- `saloes`
- `cilios-sobrancelhas`
- `estetica`
- `unhas`
- `cabelo`
- `autonomos`

## Eventos disparados (dataLayer / GTM)

| Evento             | Trigger                                          | Params                         |
|--------------------|--------------------------------------------------|--------------------------------|
| `page_view`        | Carregamento da LP                               | —                              |
| `filter_models`    | Clique em um chip de segmento                    | `segmento`                     |
| `model_click`      | Clique em "Ver demonstração"                     | `modelo`                       |
| `demo_open`        | Abertura da demonstração                         | `modelo`                       |
| `model_select`     | Clique em "Quero este modelo"                    | `modelo`                       |
| `package_select`   | Escolha de plano na seção de pricing             | `plano`                        |
| `whatsapp_click`   | Qualquer clique em botão de WhatsApp             | `origin`, `modelo?`, `plano?`  |
| `form_start`       | Primeira interação com o formulário              | —                              |
| `form_submit`      | Envio do formulário                              | `segmento`, `plano`, `modelo`, `origem`, `sdr` |
| `sdr_origin`       | Chegada com `?origem=…`                          | `origem`                       |
| `faq_open`         | Abertura de uma pergunta do FAQ                  | `pergunta`                     |
| `thank_you_view`   | Visualização da página de obrigado               | `modelo`, `plano`              |

## Rotas

- `/` — Landing page (todas as 16 seções + formulário)
- `/modelos/essencia` — Modelo 01
- `/modelos/aura` — Modelo 02
- `/modelos/movimento` — Modelo 03
- `/modelos/traco` — Modelo 04
- `/modelos/forma` — Modelo 05
- `/modelos/urbano` — Modelo 06
- `/obrigado` — Confirmação após envio do formulário

## Substituição do conteúdo

Todo o conteúdo textual e visual das 6 páginas de modelo é fictício mas realista. Para produção real, cada uma será clonada, personalizada com marca/foto/copy do cliente e servida em um subdomínio próprio do cliente.

O grid de modelos e a metadata usada na LP (segmentos, thumbnails, destaques, ordem) ficam em `data/modelos.ts` — edite ali para ajustar prioridades ou adicionar novos modelos.

## Notas de mensuração

- Nenhum evento é disparado se o usuário não interagir — sem pop-up inicial, sem tracking invasivo.
- O GTM inicial usa `strategy="afterInteractive"`, então não bloqueia o LCP.
- O `dataLayer` funciona sem GTM instalado (útil para desenvolvimento local: `window.dataLayer` no console mostra tudo).

## Próximos passos sugeridos

- [ ] Instalar o webhook do Atriva/n8n em `NEXT_PUBLIC_LEAD_WEBHOOK`.
- [ ] Adicionar sitemap.xml e robots.txt em `app/sitemap.ts` e `app/robots.ts`.
- [ ] Habilitar OG image dinâmica em `app/opengraph-image.tsx`.
- [ ] Trocar as imagens do Unsplash pelos assets reais quando disponíveis.
- [ ] Preencher `/politica-de-privacidade` e `/termos-de-uso`.
