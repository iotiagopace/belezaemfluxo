# Auditoria — Beleza em Fluxo by Metry

Documento consolidado para auditoria externa. Lista todos os pedidos do cliente, o que foi entregue, os bugs que introduzi e como foram corrigidos.

**Repositório:** <https://github.com/iotiagopace/belezaemfluxo>
**Produção:** <https://belezaemfluxo.vercel.app>
**Stack:** Next.js 14.2.34 (App Router) · React 18 · TypeScript · TailwindCSS · framer-motion 11
**Total de arquivos-fonte:** ~50 arquivos, ~5.000 linhas

---

## Sumário executivo

| # | Item pedido | Status | Commit / arquivo principal |
|---|-------------|--------|---------------------------|
| 1 | LP com 16 seções + 6 templates | ✅ Entregue | `14b17cc` |
| 2 | Filtros + URL params + form auto-fill | ✅ Entregue | `components/ModelGallery.tsx`, `components/LeadForm.tsx` |
| 3 | Eventos de mensuração dataLayer/GTM | ✅ Entregue | `lib/analytics.ts` |
| 4 | Deploy Vercel (com `vercel.json`) | ✅ Entregue | `f0e8e8f` |
| 5 | Tipografia Metry + cases reais | ✅ Entregue | `f7eaf5d` |
| 6 | Add 5 cases nos dois projetos | ✅ Entregue (2 commits) | `c8512ce`, `d3fe08b` |
| 7 | Hero stats + footer Metry + contatos | ✅ Entregue | `f7eaf5d` |
| 8 | Animações de scroll (framer-motion) | ✅ Entregue | `components/Reveal.tsx` |
| 9 | Performance (Next bump, otimizações) | ✅ Entregue | `f7eaf5d` |
| 10 | SEO completo (sitemap, robots, JSON-LD) | ✅ Entregue | `lib/seo.ts`, `app/sitemap.ts`, `app/robots.ts` |
| 11 | GA4 + Atriva snippet | ✅ Entregue | `ae102f5` |
| 12 | Refactor visual da seção CRM | ✅ Entregue | `fbd9a79`, `e8d6a72` |
| 13 | Rewrite dos 6 templates (imagens quebradas) | ✅ Entregue | `dd01719` |
| 14 | **[Bug 1]** Templates renderizavam brancos | ✅ Corrigido | `6bbe369` |
| 15 | **[Bug 2]** CTAs sumindo dentro da LP | ✅ Corrigido | `b1d71bb` |

---

## 1. LP + 6 templates de modelo

### Pedido inicial
> Gerar os 6 templates (Essência, Aura, Movimento, Traço, Forma, Urbano) e integrar à seção 4 da LP.

### Entregue
- ✅ LP principal com 16 seções: Header, Hero, Problema, Proposta de valor, **Modelos** (seção 4), Cases, O que está incluso, CRM, Planos, Como funciona, Comparação, Público, Diferenciais, Institucional, FAQ, CTA final, Formulário, Rodapé, Sticky mobile
- ✅ 6 templates completos em [`app/modelos/*/page.tsx`](app/modelos/):

| Slug | Estilo | Tipografia | Segmento |
|------|--------|------------|----------|
| `essencia` | Leve, feminino | Cormorant Garamond | Cílios, sobrancelhas, maquiagem, autônomo |
| `aura` | Minimalista, clínico | Inter | Clínicas de estética, studios |
| `movimento` | Moderno, dinâmico | Space Grotesk | Salões com equipe |
| `traco` | Editorial, autoral | Playfair Display | Brow designer, especialistas |
| `forma` | Premium editorial | Cormorant | Salões alto ticket |
| `urbano` | Direto, forte | Barlow Condensed | Barbearias |

- ✅ Cada template: hero, sobre, serviços, galeria, depoimentos/equipe, contato
- ✅ WhatsApp flutuante em todos
- ✅ Metadata SEO específico

---

## 2. Filtros, URL params e formulário

### Entregue

**Chips de filtro:** Todos · Salões · Cílios e Sobrancelhas · Estética · Unhas · Cabelo · Profissional Independente

**URL params suportados:**
| Param | Efeito |
|-------|--------|
| `?segmento=cilios-sobrancelhas` | Reordena grid priorizando o segmento |
| `?modelo=aura` | Destaca no grid + pré-seleciona no form |
| `?plano=pagina` ou `?plano=completo` | Pré-seleciona plano |
| `?origem=sdr` | Registra origem |
| `?sdr=nome` | Registra SDR |
| `utm_*`, `gclid`, `fbclid` | Capturados como campos ocultos |

**Formulário** ([`components/LeadForm.tsx`](components/LeadForm.tsx)):
- 11 campos visíveis: nome, nome_negocio, whatsapp, email, cidade, estado, segmento (select), possui_site (select), organizacao_contatos (select), interesse_plano (select), modelo_interesse (hidden autopreenchido)
- 14 campos ocultos: utm_source/medium/campaign/content/term, gclid, fbclid, origem, sdr, pagina_origem, referrer, modelo_origem, segmento_origem, data_hora_envio
- Mensagens contextuais dinâmicas ("Tenho apenas Instagram" → texto reativo)
- Máscara brasileira de telefone
- Pós-envio: redireciona para `/obrigado?modelo=X&plano=Y`

---

## 3. Eventos de mensuração

**Todos os 12 eventos disparados** ([`lib/analytics.ts`](lib/analytics.ts) → `window.dataLayer.push`):

```
page_view · filter_models · model_click · demo_open · model_select
package_select · whatsapp_click · form_start · form_submit
sdr_origin · faq_open · thank_you_view
```

Compatível com GTM e GA4. Verificação em produção:
```javascript
window.dataLayer  // → [...eventos]
```

---

## 4. Deploy Vercel

### Bugs encontrados + fix
- **Bug**: primeiro deploy retornou 404 → Vercel não achou app na raiz porque estava em `beleza-em-fluxo-lp/site/`
- **Fix 1** (`46e2973`): flatten do repo — moveu tudo pra raiz, briefings pra `docs/`
- **Bug 2**: build passou mas Vercel procurou output em `public/` (framework detectado como "Other")
- **Fix 2** (`f0e8e8f`): criado `vercel.json` com `"framework": "nextjs"` — forçou preset correto

Resultado: <https://belezaemfluxo.vercel.app> no ar.

### Envs suportadas
| Variável | Uso | Default |
|----------|-----|---------|
| `NEXT_PUBLIC_WHATSAPP_PHONE` | Número do WhatsApp | `5511999999999` |
| `NEXT_PUBLIC_LEAD_WEBHOOK` | Webhook do form (Atriva/n8n) | vazio |
| `NEXT_PUBLIC_GA_ID` | Measurement ID GA4 | `G-SE8JBMPE0S` |
| `NEXT_PUBLIC_GTM_ID` | Container GTM (opcional) | vazio |
| `NEXT_PUBLIC_ATRIVA_SNIPPET` | Snippet Atriva | URL padrão |

---

## 5. Tipografia Metry + cases

### Pedido
> "A página oficial ficou muito fraca, podemos utilizar a tipografia que tem no site da metry, inclusive trazer os cases reais de sites."

### Entregue
- ✅ Fonte display: **League Spartan** (idêntica à Metry)
- ✅ Fonte body: **Inter** (idêntica à Metry)
- ✅ Todo texto em lowercase
- ✅ Prefixos `/ label` em cada seção (padrão Metry)
- ✅ Componente [`ShinyText.tsx`](components/ShinyText.tsx) copiado do Metry (gradiente cyan animado)
- ✅ Métricas grandes lowercase no hero

### Escolha
Cliente pediu paleta preta inicialmente, depois trocou para branca. Implementado via CSS overrides — **esta escolha causou os dois bugs críticos** (documentados no fim).

---

## 6. Cases de sites (12 no total)

### Pedidos consolidados
5 sites adicionados em **belezaemfluxo E em Sitemetry** (dois commits separados no Sitemetry, mantendo outras mudanças em andamento do cliente):

1. `landing.hemissul.com.br` — Proteção veicular Roraima
2. `imobiliaria-ks.vercel.app` — Imóveis Bombinhas/SC
3. `trancatto-novo.vercel.app` — Cordas e tricô náutico
4. `lokmais.com` — Locação de motos Honda
5. `flashcar-henna.vercel.app` — Compra/venda de carros via PIX

### Cases originais preservados (7)
Barra Studio · Nomos · Rodricar · Dra. Anaieli · Frutmel · Seven Performance · CheckFast

**Total: 12 cases** exibidos com screenshot ao vivo via microlink.io em [`components/SitesCases.tsx`](components/SitesCases.tsx) e [`data/cases.ts`](data/cases.ts).

Commits:
- Beleza em Fluxo: `c8512ce`, `d3fe08b`
- Sitemetry (produção `metry.cc/sites`): `4d249d9a`, `2ac97c90`

---

## 7. Hero, footer e contatos

### Pedidos
- Hero stats sem abreviações (não usar "1k")
- Rodapé no padrão Metry
- Contato: `tiago@metry.cc` · Instagram `@cc.metry` · sem telefone

### Entregue
- ✅ Hero: `6 modelos prontos` · `r$ 1.000` · `r$ 1.200` · `10x no cartão` (valores por extenso)
- ✅ Footer refeito no padrão Metry: 4 colunas (marca+social, Navegação, Modelos, Contato), bottom bar com copyright + Política + Termos + link metry.cc
- ✅ Header em tema claro com transição on-scroll (fixed, backdrop-blur, aparece no scroll)

---

## 8. Animações de scroll

### Pedido
> Aplicar animações e transições para scroll

### Entregue
- ✅ `framer-motion 11` instalado
- ✅ Componente reutilizável [`Reveal.tsx`](components/Reveal.tsx) com 3 variantes: `Reveal`, `RevealStagger`, `RevealItem`
- ✅ Padrão fade-up on entrance (y+24 → 0, opacity 0 → 1, viewport once:true, margin -80px, ease [0.22,1,0.36,1])
- ✅ Respeita `prefers-reduced-motion`
- ✅ Aplicado em 12 seções: Hero (escalonado), Problem, Value, ModelGallery, SitesCases (hover-lift), WhatsIncluded, CRM (kanban + stagger), HowItWorks, FAQ, Pricing, FinalCTA, CRMShowcase, CRMProductShots

---

## 9. Performance

### Entregue
- ✅ **Next 14.2.15 → 14.2.34** (patched CVE)
- ✅ Fonte Archivo removida (não usada)
- ✅ Font-display: swap para todas as 8 famílias
- ✅ `Math.random()` em SSR removido → sem hydration mismatch
- ✅ Listeners passivos no scroll
- ✅ `sizes` correto em todos os `next/image`
- ✅ 12 rotas prerenderizadas como estático
- ✅ First Load JS shared: 87.3 kB
- ✅ Bundle home: 50.5 kB (com framer-motion)

---

## 10. SEO

### Entregue
- ✅ **Sitemap dinâmico** em [`app/sitemap.ts`](app/sitemap.ts) — 10 URLs
- ✅ **robots.txt** em [`app/robots.ts`](app/robots.ts) apontando pro sitemap
- ✅ **OG image dinâmica 1200x630** em [`app/opengraph-image.tsx`](app/opengraph-image.tsx) (Edge Runtime, League Spartan, métricas)
- ✅ **JSON-LD schemas**:
  - `Organization` na raiz ([`app/layout.tsx`](app/layout.tsx))
  - `FAQPage` no FAQ
  - `Service` × 2 (R$ 1.000 e R$ 1.200) no Pricing
  - `BreadcrumbList` em cada modelo (via ModelPageBar)
- ✅ **Metadata expandido**: canonical URL, googleBot rules, viewport com theme-color, publisher, creator, category
- ✅ Per-page metadata em cada template (Aura e Movimento via `layout.tsx` sibling porque são client components)
- ✅ `lang="pt-BR"` e `locale: pt_BR`
- ✅ Preconnect para fontes

**Utilitário central:** [`lib/seo.ts`](lib/seo.ts)

---

## 11. GA4 + Atriva snippet

### Entregue ([`app/layout.tsx`](app/layout.tsx))
- ✅ **GA4** `G-SE8JBMPE0S` — carregamento `afterInteractive` (não bloqueia LCP)
- ✅ **Atriva** `atv_5af799ed15a2827f8cacec56` — carregamento `afterInteractive`
- ✅ Env-override via `NEXT_PUBLIC_GA_ID` e `NEXT_PUBLIC_ATRIVA_SNIPPET`
- ✅ `datalayer-init` em `beforeInteractive` (evita race)

Verificado no HTML servido:
```
gtag/js?id=G-SE8JBMPE0S
atriva.com.br/api/public/leads/snippet/atv_5af799ed15a2827f8cacec56.js
```

---

## 12. Refactor da seção CRM (2 rodadas)

### Rodada 1 — pedido: "insere essa imagem quando fala de CRM"
- ✅ Componente [`CRMShowcase.tsx`](components/CRMShowcase.tsx) em JSX/SVG puro (opção escolhida pelo cliente)
- ✅ Card esquerdo: Pipeline Kanban com 4 colunas, deal em foco com borda azul
- ✅ Card direito: WhatsApp mockup verde `#095F53`, chat bege `#E5DBC7`, bolhas alternadas, `14:32 ✓✓` em verde

### Rodada 2 — pedido: "adicione essas fotos na parte do CRM" (3 screenshots reais)
- ✅ Componente [`CRMProductShots.tsx`](components/CRMProductShots.tsx) com tabs
- ✅ Imagens salvas em `public/images/atriva-{pipeline,dashboard,tarefas}.png` (commit `b620c58` pelo cliente)
- ✅ Tabs: Pipeline · Dashboard · Tarefas
- ✅ Frame com border, aspecto 16:10, priority load, legenda por tab

---

## 13. Rewrite dos 6 templates

### Pedido
> "TODOS os templates estão quebrados, faltando imagem, conteúdo sem contraste"

### Diagnóstico
- Várias URLs do Unsplash retornavam **404** (fotos removidas)
- Contraste ruim: texto sobre imagens sem overlay suficiente
- Opacidades altas em corpo de texto prejudicavam legibilidade
- CTAs sem hierarquia visual
- `sizes` faltando em `next/image`

### Ação (`dd01719`)
- ✅ Teste bulk de dezenas de IDs do Unsplash → catálogo verificado por segmento
- ✅ Reescrita completa dos 6 templates:
  - Catálogo `IMG` no topo com IDs testados
  - Overlays escuros nos heros (`from-black/70 via-black/40 to-black`)
  - Cores hex explícitas (`#3d322d` em vez de opacidades)
  - `sizes` em todos os `next/image`
  - CTAs com shadow-lg e hover states
  - Faixa de credibilidade sob CTAs (+500 clientes · X anos · certificação)

---

## 🐛 Bugs críticos que introduzi + fix

### Bug 1 — Overrides globais vazando para os templates

**Origem:** Quando o cliente pediu pra trocar a paleta da LP de preta pra clara, eu tomei uma decisão *"esperta"*: em vez de reescrever cada componente pra usar `text-neutral-900` etc., adicionei overrides globais no `globals.css`:

```css
.bg-black { background-color: #fafafa !important; }
.text-white { color: #0a0a0a !important; }
.text-white\/70 { color: rgba(10,10,10,0.65) !important; }
/* ...etc */
```

Isso funcionou pra LP. **Mas afetou TODAS as páginas** — inclusive os 6 templates que são desenhados escuros por design (Urbano, Forma, hero de Movimento/Aura/Essência).

**Sintoma:** cliente reportou "TODOS os templates estão quebrados, sem contraste, absolutamente TODOS". A página do Urbano (por exemplo) renderizava:
- `bg-black` → fundo BRANCO
- `text-white` (sobre imagem escura da barbearia) → texto PRETO INVISÍVEL
- Vermelho `#c8102e` sobre overlay = contraste ilegível
- Tabela com `border-white/15` → borda preta 12% opaca sobre bg branco = invisível

**Fix (`6bbe369`):** escopar todos os overrides pra `.lp-scope`:
```css
.lp-scope .bg-black { background-color: #fafafa !important; }
.lp-scope .text-white { color: #0a0a0a !important; }
/* ...etc */
```

E envolver a LP + `/obrigado` com `<div className="lp-scope">`. Templates ficam intocados e renderizam do jeito que foram desenhados.

**Onde eu errei:** não abri o navegador em nenhum momento. Confiei que o build passar era suficiente. Só descobri quando o cliente reportou.

---

### Bug 2 — Ilhas de escuro dentro da LP também sofreram override

**Sintoma:** cliente mandou print do header — botão "Escolher meu modelo" (bg preto com `text-white`) aparecia sem contraste, texto invisível.

**Origem:** o override `.lp-scope .text-white → preto` acerta TODO `text-white` dentro da LP, mesmo em elementos que são intencionalmente ilhas escuras (botões com bg-neutral-900, sticky mobile bar, FloatingWhatsApp, plan 2 do pricing).

**Fix (`b1d71bb`):** classe helper `.dark-on-light`:
```css
.lp-scope .dark-on-light,
.lp-scope .dark-on-light * { color: #ffffff !important; }
.lp-scope .dark-on-light .text-white\/70 { color: rgba(255,255,255,0.7) !important; }
/* ...escala completa de opacidade */
.lp-scope .dark-on-light .text-black { color: #0a0a0a !important; } /* reversão para pills internos */
```

Aplicada em 5 lugares:
- Header (CTA principal + CTA do menu mobile)
- StickyMobileBar (ambos os botões)
- Footer ("Fale conosco")
- FloatingWhatsApp (botão redondo verde)
- PricingSection (Plano 2 refeito como card `bg-neutral-900` com botões brancos internos)

---

## Histórico completo de commits

```
b1d71bb  fix(lp): dark-on-light — reversal para ilhas escuras dentro da LP
6bbe369  fix: scopa overrides bg-black/text-white pra .lp-scope
c0f0df2  docs: relatório de auditoria completo
dd01719  fix(modelos): reescreve os 6 templates com imagens verificadas + contraste
b620c58  chore: adiciona screenshots do atriva crm
e8d6a72  feat(crm): adiciona showcase de 3 telas reais do atriva
fbd9a79  feat(crm): substitui pipeline mockup por showcase de dois cards
ae102f5  feat: adiciona ga4 (gtag) e atriva lead snippet
f7eaf5d  feat: polish, animations, SEO and perf sweep
d3fe08b  feat: add lokmais e flash car store aos sites cases
c8512ce  feat: add hemissul, imobiliária ks, trançatto aos sites cases
f0e8e8f  chore: force next.js framework preset on vercel
46e2973  chore: flatten repo for vercel autodetect
14b17cc  initial commit: landing page beleza em fluxo by metry
```

---

## Estado final do repositório

```
belezaemfluxo/
├── AUDITORIA.md                # Este documento
├── README.md
├── vercel.json                 # framework=nextjs
├── package.json                # next 14.2.34, framer-motion 11
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
├── app/
│   ├── layout.tsx              # Metadata, GA4, Atriva, GTM opcional, fontes
│   ├── page.tsx                # LP (com <div className="lp-scope">)
│   ├── globals.css             # Overrides escopados em .lp-scope + .dark-on-light
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── opengraph-image.tsx
│   ├── obrigado/page.tsx       # Também em .lp-scope
│   └── modelos/
│       ├── essencia/page.tsx
│       ├── aura/{layout,page}.tsx
│       ├── movimento/{layout,page}.tsx
│       ├── traco/page.tsx
│       ├── forma/page.tsx
│       └── urbano/page.tsx
├── components/                 # 22 componentes
│   ├── LP: Header, Hero, ProblemSection, ValueProposition,
│   │       ModelGallery, SitesCases, WhatsIncluded, CRMSection,
│   │       CRMShowcase, CRMProductShots, PricingSection,
│   │       HowItWorks, Comparison, Audience, Differentials,
│   │       AboutMetry, FAQ, FinalCTA, LeadForm, Footer,
│   │       StickyMobileBar, FloatingWhatsApp
│   └── Utilitários: ShinyText, Reveal, ModelPageBar, icons, icons-lucide
├── data/
│   ├── modelos.ts              # Metadata dos 6 modelos + filtro
│   └── cases.ts                # 12 sites reais
├── lib/
│   ├── analytics.ts            # dataLayer helpers
│   ├── whatsapp.ts             # URL builder contextual
│   └── seo.ts                  # JSON-LD schemas, canonical, per-page metadata
├── public/
│   └── images/
│       ├── atriva-pipeline.png
│       ├── atriva-dashboard.png
│       └── atriva-tarefas.png
└── docs/                       # Briefings originais em md
```

---

## O que ainda pode melhorar (não bloqueia produção)

> Atualização de 10/07/2026: a diversificação visual dos seis templates foi aplicada. Cada rota agora possui assinatura estrutural própria por segmento, a barra de demonstração ficou mais discreta e a galeria comercial passou a enfatizar a comparação entre direções de marca. Permanecem recomendados testes visuais automatizados e a substituição das imagens de demonstração por assets finais do cliente.

1. **Rewrite completo dos componentes de LP** — atualmente eles usam `text-white`/`bg-black` com override CSS. Uma abordagem mais limpa seria refatorar cada componente pra usar `text-neutral-900`/`bg-neutral-50` diretamente. Beneficia manutenibilidade e elimina a necessidade de `.lp-scope` e `.dark-on-light`. Não fiz porque é ~15 componentes e a alternativa atual funciona.

2. **Testes visuais automatizados** — nada existe. Para o próximo grande refactor, valeria adicionar Playwright + snapshot tests nas 8 páginas principais.

3. **Trocar Unsplash por assets locais** — quando o cliente entregar as fotos reais, colocar em `public/images/` e trocar as URLs. Já preparado — cada template tem um `IMG` const no topo, mudança pontual.

4. **Content real dos cases** — os 12 cases têm screenshot em tempo real via microlink.io (funciona) mas seria melhor snapshots locais em WebP para performance/estabilidade.

5. **Lighthouse audit não rodado** — o build indica bundle pequeno, static routes, mas Lighthouse formal em produção ainda não foi rodado. Recomendado como próximo passo.

---

## Verificação recomendada pelo auditor externo

### 1. Visual dos 6 templates
Abrir em produção. Depois do commit `6bbe369`, todos devem renderizar com o tema escuro/claro que foi desenhado, com contraste WCAG-AA:
- <https://belezaemfluxo.vercel.app/modelos/essencia> — light nude/rosa
- <https://belezaemfluxo.vercel.app/modelos/aura> — light off-white/sage
- <https://belezaemfluxo.vercel.app/modelos/movimento> — dark preto/vinho
- <https://belezaemfluxo.vercel.app/modelos/traco> — light bege terroso
- <https://belezaemfluxo.vercel.app/modelos/forma> — dark preto/dourado
- <https://belezaemfluxo.vercel.app/modelos/urbano> — dark preto/vermelho

### 2. Fluxo comercial (URL deep links)
- <https://belezaemfluxo.vercel.app/?modelo=aura> → destaca Aura + pré-seleciona no form
- <https://belezaemfluxo.vercel.app/?segmento=cilios-sobrancelhas> → reordena grid
- <https://belezaemfluxo.vercel.app/?origem=sdr&sdr=marina> → registra origem
- Clicar "Quero este modelo" em qualquer card → deve rolar até o form com o campo `modelo_interesse` preenchido

### 3. Rastreamento
Abrir console em qualquer página:
```javascript
window.dataLayer  // → array com eventos
```
Ao clicar botões, `whatsapp_click`, `model_click`, `filter_models` devem chegar. GA4 Realtime deve mostrar o acesso.

### 4. SEO
- <https://belezaemfluxo.vercel.app/sitemap.xml> → 10 URLs listadas
- <https://belezaemfluxo.vercel.app/robots.txt>
- <https://belezaemfluxo.vercel.app/opengraph-image> → PNG 1200x630
- <https://search.google.com/test/rich-results> com URL da home → deve detectar `Organization`, `FAQPage`, `Service`

### 5. Botões-CTA de contraste (o que quebrou nos bugs)
Verificar em todas as viewport sizes:
- Header "Escolher meu modelo" — botão preto com texto BRANCO visível
- Footer "Fale conosco" — mesmo
- Sticky mobile (só mobile) — dois botões brancos visíveis no fundo escuro
- Plano 2 do pricing — card preto sólido com texto branco e botão branco interno
- WhatsApp float — ícone branco no botão verde

### 6. Performance
Rodar Lighthouse mobile em <https://belezaemfluxo.vercel.app>. Esperado:
- Performance ≥ 85
- Accessibility ≥ 90
- Best Practices ≥ 90
- SEO 100

---

## Reflexão honesta sobre erros

**O que fiz de errado no processo:**
1. Escolhi o "atalho esperto" (overrides CSS globais) em vez do refactor correto quando o cliente pediu pra mudar de tema — economizei tempo no curto prazo mas cobrei horas de debug depois.
2. Não abri o navegador em nenhum momento durante 90% da sessão. Confiei que build passar significava OK.
3. Escrevi um AUDITORIA.md antes de o produto estar 100% funcionando visualmente. Prematuro.

**O que faria diferente:**
1. Rewrite direto quando o cliente pediu mudança de tema. Mais linhas trocadas, zero bugs.
2. Ter aberto o site depois de cada commit visual. As duas rodadas de bugs teriam sido pegas na hora, não pelo cliente.
3. Não gerar relatório antes de a auditoria visual passar.

---

Documento gerado em 10/07/2026 · Beleza em Fluxo by Metry
Última atualização: após commit `b1d71bb` (fix final dos CTAs escuros)
