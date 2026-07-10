# Auditoria — Beleza em Fluxo by Metry

Documento de referência para auditoria externa. Lista tudo que foi pedido pelo cliente ao longo da conversa e o que foi efetivamente entregue, com links para arquivos e commits.

**Repositório:** <https://github.com/iotiagopace/belezaemfluxo>
**Produção:** <https://belezaemfluxo.vercel.app>
**Stack:** Next.js 14.2.34 (App Router) · React 18 · TypeScript · TailwindCSS · framer-motion 11

---

## 1. Briefing inicial — LP + 6 templates de modelo

### Pedido
> Gerar os 6 templates de modelos de página (Essência, Aura, Movimento, Traço, Forma, Urbano) e integrar à seção 4 da LP como demonstrações reais.

### Entregue
- ✅ LP principal com 16 seções (Header, Hero, Problema, Proposta de valor, Modelos, O que está incluso, CRM, Planos, Como funciona, Comparação, Público, Diferenciais, Institucional, FAQ, CTA final, Formulário, Rodapé, Sticky mobile)
- ✅ 6 templates completos com identidade própria:
  - `/modelos/essencia` — Cormorant Garamond, paleta nude/rosa, lash designer independente
  - `/modelos/aura` — Inter, paleta off-white/sage, clínica estética
  - `/modelos/movimento` — Space Grotesk, preto/vinho, salão com equipe
  - `/modelos/traco` — Playfair Display, tons terrosos, brow designer autoral
  - `/modelos/forma` — Cormorant, preto/dourado, editorial premium
  - `/modelos/urbano` — Barlow Condensed, preto/vermelho, barbearia
- ✅ Cada template tem: hero, sobre/apresentação, serviços/tratamentos, galeria, depoimentos/equipe, contato
- ✅ WhatsApp flutuante em todas as páginas de modelo
- ✅ Metadata SEO específica para cada template

**Arquivos:** [`app/modelos/*/page.tsx`](app/modelos/)

### Escolha declarada
Cliente escolheu **Next.js + Vercel + os 6 modelos completos** entre as opções apresentadas.

---

## 2. Filtros, URL params e formulário

### Pedido
> Filtros por segmento, botão "Ver demonstração" e "Quero este modelo", campo `modelo` preenchido automaticamente pelo URL param, formulário com 11 campos visíveis + campos ocultos, tracking dataLayer.

### Entregue
- ✅ Filtros em chips: Todos, Salões, Cílios e Sobrancelhas, Estética, Unhas, Cabelo, Profissional Independente
- ✅ Cada card na galeria com: preview 4:3, badge de segmento, número do modelo, título, estilo, descrição, 4 destaques, dois CTAs
- ✅ **URL params suportados:**
  - `?segmento=cilios-sobrancelhas` — reordena o grid priorizando o segmento
  - `?modelo=aura` — destaca no grid + pré-seleciona no form
  - `?plano=pagina` ou `?plano=completo` — pré-seleciona plano
  - `?origem=sdr` — registra origem
  - `?sdr=nome` — registra sdr
  - `utm_*`, `gclid`, `fbclid` — capturados como campos ocultos
- ✅ Formulário [`components/LeadForm.tsx`](components/LeadForm.tsx) com todos os 11 campos visíveis + 14 campos ocultos
- ✅ Mensagens contextuais dinâmicas ("Tenho apenas Instagram" → texto reativo)
- ✅ Máscara brasileira de telefone
- ✅ Pós-envio: redireciona para `/obrigado?modelo=X&plano=Y` mostrando o que foi enviado

**Arquivos:** [`components/ModelGallery.tsx`](components/ModelGallery.tsx), [`components/LeadForm.tsx`](components/LeadForm.tsx), [`app/page.tsx`](app/page.tsx), [`app/obrigado/page.tsx`](app/obrigado/page.tsx)

---

## 3. Eventos de mensuração

### Pedido (12 eventos mínimos)
```
page_view · model_click · demo_open · model_select · plan_view
whatsapp_click · form_start · form_submit · package_select · sdr_origin
```

### Entregue
- ✅ Todos os 12 disparados via [`lib/analytics.ts`](lib/analytics.ts) → `window.dataLayer.push`
- ✅ Eventos adicionais: `filter_models`, `faq_open`, `thank_you_view`
- ✅ Compatível com GTM e GA4

---

## 4. Setup / Deploy

### Pedido
> Deploy Vercel + domínio

### Entregue
- ✅ Repo público em <https://github.com/iotiagopace/belezaemfluxo>
- ✅ Projeto flatten (Next.js na raiz) para autodetect da Vercel — briefings movidos para `docs/`
- ✅ `vercel.json` com `framework: nextjs` forçado (evitou o erro "No Output Directory named public")
- ✅ Produção: <https://belezaemfluxo.vercel.app>
- ✅ `.env.local.example` documentando as envs

### Envs disponíveis
| Variável | Uso | Default |
|----------|-----|---------|
| `NEXT_PUBLIC_WHATSAPP_PHONE` | Número do WhatsApp para os botões | `5511999999999` |
| `NEXT_PUBLIC_LEAD_WEBHOOK` | Webhook do formulário (Atriva/n8n) | vazio |
| `NEXT_PUBLIC_GA_ID` | Measurement ID do GA4 | `G-SE8JBMPE0S` |
| `NEXT_PUBLIC_GTM_ID` | Container do GTM (opcional) | vazio |
| `NEXT_PUBLIC_ATRIVA_SNIPPET` | Snippet Atriva do cliente | URL padrão fornecida |

---

## 5. Tipografia e visual — refatoração Metry

### Pedido
> "A página oficial ficou muito fraca, podemos utilizar a tipografia que tem no site da metry, inclusive trazer os cases reais de sites que tem no site da metry"

### Entregue
- ✅ Fonte display: **League Spartan** (mesma da Metry) para todos os headlines
- ✅ Fonte body: **Inter** (mesma da Metry)
- ✅ Prefixos `/ label` em cada seção (padrão Metry)
- ✅ Métricas grandes lowercase no hero
- ✅ Componente `ShinyText` copiado do padrão Metry (gradiente cyan)
- ✅ Nova seção `/ cases` com **10 sites reais** que a Metry construiu (7 originais + 3 adicionados depois + 2 outros)

**Escolha do cliente:** paleta **preta** inicialmente, depois trocada para **branca** — troca feita apenas no `globals.css` via overrides (nenhum componente tocado).

**Arquivos:** [`app/globals.css`](app/globals.css), [`components/ShinyText.tsx`](components/ShinyText.tsx)

---

## 6. Cases de sites da Metry

### Pedido (múltiplos)
Adicionar em `belezaemfluxo` E em `Sitemetry/src/app/pages/Sites.tsx`:
1. `landing.hemissul.com.br`
2. `imobiliaria-ks.vercel.app`
3. `trancatto-novo.vercel.app`
4. `lokmais.com`
5. `flashcar-henna.vercel.app`

### Entregue
- ✅ Todos os 5 adicionados em ambos os projetos
- ✅ Metadata correto (tipo/segmento) puxado do próprio site de cada um
- ✅ Preview via `microlink.io` (screenshot em tempo real)
- ✅ Commits separados no Sitemetry (só o Sites.tsx foi commitado; outras mudanças em andamento no working tree preservadas)

**Sitemetry commits:** `4d249d9a`, `2ac97c90` (produção em <https://metry.cc/sites>)
**Beleza em Fluxo:** [`data/cases.ts`](data/cases.ts) — total 12 cases

---

## 7. Ajustes de hero, footer e contatos

### Pedidos consolidados
- Trocar métricas "1k" por valores reais
- Rodapé no padrão da Metry
- Contato: `tiago@metry.cc`, Instagram `@cc.metry`, remover telefone

### Entregue
- ✅ Hero: `6 modelos prontos`, `R$ 1.000`, `R$ 1.200`, `10x no cartão` (valores por extenso, sem abreviação)
- ✅ Footer refeito no padrão Metry: 4 colunas (marca+social, Navegação, Modelos, Contato), bottom bar com copyright + Política de Privacidade + Termos + link metry.cc
- ✅ Contatos: `tiago@metry.cc` · `@cc.metry` (não mais `metry.cc`) · sem telefone
- ✅ Header refeito em tema claro com transição on-scroll

**Arquivos:** [`components/Hero.tsx`](components/Hero.tsx), [`components/Footer.tsx`](components/Footer.tsx), [`components/Header.tsx`](components/Header.tsx)

---

## 8. Animações de scroll

### Pedido
> Aplicar animações e transições para scroll

### Entregue
- ✅ `framer-motion 11` instalado
- ✅ Componente reutilizável `Reveal` + `RevealStagger` + `RevealItem` em [`components/Reveal.tsx`](components/Reveal.tsx)
- ✅ Padrão de fade-up on entrance (initial y+24, whileInView y:0, viewport once:true, margin -80px, duration 0.7s, ease [0.22,1,0.36,1])
- ✅ Respeita `prefers-reduced-motion` (retorna sem animação para acessibilidade)
- ✅ Aplicado em: Hero (escalonado por elemento), ProblemSection, ValueProposition, ModelGallery, SitesCases (com hover-lift nos cards), WhatsIncluded, CRMSection (grid e stagger nos benefícios), HowItWorks, FAQ, PricingSection, FinalCTA
- ✅ CRMShowcase com Reveal delay entre os dois cards
- ✅ CRMProductShots com Reveal no header e image switch

---

## 9. Performance

### Pedido
> Aplique melhorias de otimização

### Entregue
- ✅ **Next.js 14.2.15 → 14.2.34** (patched — CVE de segurança resolvida)
- ✅ Fonte Archivo removida do bundle (não estava sendo usada)
- ✅ Font loading com `display=swap` para todas as 8 famílias
- ✅ `Math.random()` em SSR (CRM kanban) trocado por dados determinísticos → sem hydration mismatch
- ✅ Listeners passivos no scroll do Header
- ✅ `sizes` correto em todos os `next/image` (fallback quando faltava)
- ✅ Todas as 12 rotas prerenderizadas como estático (`○ Static`)
- ✅ First Load JS shared: 87.3 kB (bom)
- ✅ Bundle da home: 50.5 kB (com framer-motion)

---

## 10. SEO

### Pedido
> Aplique /seo-audit analise e já aplique

### Entregue
- ✅ **Sitemap dinâmico** em [`app/sitemap.ts`](app/sitemap.ts) — todas as rotas (LP, /obrigado, 6 modelos)
- ✅ **robots.txt** em [`app/robots.ts`](app/robots.ts) apontando pro sitemap
- ✅ **OG image dinâmica 1200x630** em [`app/opengraph-image.tsx`](app/opengraph-image.tsx) — renderizada no Edge Runtime com League Spartan e métricas
- ✅ **JSON-LD schemas:**
  - `Organization` (raiz, em [`app/layout.tsx`](app/layout.tsx))
  - `FAQPage` (em [`components/FAQ.tsx`](components/FAQ.tsx))
  - `Service` (dois — R$ 1.000 e R$ 1.200 — em [`components/PricingSection.tsx`](components/PricingSection.tsx))
  - `BreadcrumbList` (em cada modelo, via [`components/ModelPageBar.tsx`](components/ModelPageBar.tsx))
- ✅ **Metadata expandido:** canonical URL, googleBot rules, viewport com theme-color por prefers-color-scheme, publisher, creator, category
- ✅ **Per-page metadata** em cada template
- ✅ `lang="pt-BR"` e `locale: pt_BR`
- ✅ Fontes com preconnect para `fonts.googleapis.com` e `fonts.gstatic.com`

**Utilitário central:** [`lib/seo.ts`](lib/seo.ts)

---

## 11. Google Analytics + Atriva

### Pedido
> Adicionar tags GA4 (gtag) e Atriva snippet

### Entregue
- ✅ **GA4** com measurement ID `G-SE8JBMPE0S` — carregamento `afterInteractive` (não bloqueia LCP)
- ✅ **Atriva snippet** `atv_5af799ed15a2827f8cacec56` — carregamento `afterInteractive`
- ✅ Ambos env-override via `NEXT_PUBLIC_GA_ID` e `NEXT_PUBLIC_ATRIVA_SNIPPET`
- ✅ `datalayer-init` reordenado para `beforeInteractive` (evita race com gtag)
- ✅ Verificado no HTML servido em produção:
  ```
  gtag/js?id=G-SE8JBMPE0S
  atriva.com.br/api/public/leads/snippet/atv_5af799ed15a2827f8cacec56.js
  ```

**Arquivo:** [`app/layout.tsx`](app/layout.tsx)

---

## 12. Seção CRM — refatoração visual

### Pedido 1
> "Insira essa imagem quando fala de CRM, ao invés da pipeline que voce fez"
> (imagem: dois cards side-by-side com Pipeline Kanban + WhatsApp)

### Entregue
- ✅ Componente [`components/CRMShowcase.tsx`](components/CRMShowcase.tsx) recriado 100% em JSX/SVG (opção escolhida pelo cliente)
- ✅ Card esquerdo: Pipeline Kanban com 4 colunas (Novo, Contato, Negociando, Proposta), bolinhas coloridas, cards placeholder, deal em foco com borda azul
- ✅ Card direito: fundo verde `#095F53`, chat mockup com fundo bege `#E5DBC7`, bolhas alternadas (branca in / verde out `#DCF8C6`), timestamp `14:32 ✓✓` em verde

### Pedido 2
> "Para deixar mais rico o site, adicione essa fotos na parte do CRM" (3 screenshots do CRM Atriva)

### Entregue
- ✅ Componente [`components/CRMProductShots.tsx`](components/CRMProductShots.tsx) com tabs Pipeline · Dashboard · Tarefas
- ✅ Imagens salvas em [`public/images/atriva-pipeline.png`](public/images/atriva-pipeline.png), [`atriva-dashboard.png`](public/images/atriva-dashboard.png), [`atriva-tarefas.png`](public/images/atriva-tarefas.png)
- ✅ Frame com border sutil, aspecto 16:10, `object-cover object-top`, priority load
- ✅ Legenda contextualizada por tab
- ✅ Inserido abaixo do CRMShowcase, antes do grid de benefícios

---

## 13. Refactor final dos 6 templates (auditoria)

### Pedido
> "TODOS os templates estão quebrados, faltando imagem, conteúdo sem contraste, absolutamente TODOS"

### Diagnóstico
- Várias URLs do Unsplash retornavam 404 (fotos que foram removidas ou tinham ID inválido)
- Contraste ruim: texto branco em hero sem overlay suficiente
- Opacidades excessivas em corpo de texto (`white/60`) prejudicavam legibilidade
- CTAs sem hierarquia clara ou sombra
- Missing `sizes` em `next/image` causando lazy carregado incorreto

### Entregue
- ✅ **Teste em bulk de dezenas de IDs do Unsplash** para montar catálogo de imagens verificadas por segmento (beauty, salon, barbershop, clinic, portraits)
- ✅ **Reescrita completa dos 6 templates** com:
  - Catálogo `IMG` no topo com IDs testados
  - Overlays mais escuros nos heros (`from-black/70 via-black/40 to-black`)
  - Cores de texto substituídas por hex explícito (`#3d322d` em vez de opacidades)
  - Font sizes maiores em bio/serviço/depoimento
  - `sizes` explícito em todos os `next/image`
  - CTAs com `shadow-lg` e hover states consistentes
  - Faixa de credibilidade sob CTA (+500 clientes, X anos etc.)
- ✅ Adições específicas:
  - Essência: seção Sobre agora tem foto ao lado da bio
  - Aura: hero fullscreen com overlay forte, texto claro sobre foto
  - Movimento: contraste hero elevado, stats no bottom
  - Traço: hero editorial verificado
  - Forma: hero mais dramático, form com bg preto sólido
  - Urbano: tabela com hover, tipografia Barlow refinada

**Commit:** `dd01719`

---

## Histórico de commits (últimos, em ordem cronológica)

```
14b17cc  initial commit: LP + 6 templates
46e2973  chore: flatten repo for vercel autodetect
f0e8e8f  chore: force next.js framework preset on vercel
c8512ce  feat: add hemissul, imobiliária ks, trançatto aos cases
d3fe08b  feat: add lokmais e flash car store aos cases
f7eaf5d  feat: polish, animations, SEO and perf sweep
ae102f5  feat: adiciona ga4 (gtag) e atriva lead snippet
fbd9a79  feat(crm): substitui pipeline mockup por showcase de dois cards
e8d6a72  feat(crm): adiciona showcase de 3 telas reais do atriva
b620c58  chore: adiciona screenshots do atriva crm
dd01719  fix(modelos): reescreve os 6 templates com imagens verificadas + contraste
```

---

## Estado do repositório

```
belezaemfluxo/
├── app/
│   ├── layout.tsx              # Metadata, GA4, Atriva, GTM opcional, fontes
│   ├── page.tsx                # LP principal (16 seções)
│   ├── globals.css             # Light theme com overrides para bg-black/text-white
│   ├── sitemap.ts              # Sitemap dinâmico
│   ├── robots.ts               # Robots dinâmico
│   ├── opengraph-image.tsx     # OG image 1200x630 no Edge
│   ├── obrigado/page.tsx       # Confirmação pós-envio
│   └── modelos/
│       ├── essencia/page.tsx   # Modelo 01 (leve, feminino)
│       ├── aura/{layout,page}.tsx   # Modelo 02 (clínico)
│       ├── movimento/{layout,page}.tsx  # Modelo 03 (salão)
│       ├── traco/page.tsx      # Modelo 04 (marca pessoal)
│       ├── forma/page.tsx      # Modelo 05 (premium)
│       └── urbano/page.tsx     # Modelo 06 (barbearia)
├── components/                 # 22 componentes (LP + reveal + crm + icons + etc)
├── data/
│   ├── modelos.ts              # Metadata dos 6 modelos + filtro por segmento
│   └── cases.ts                # 12 sites da Metry (7 originais + 5 adicionados)
├── lib/
│   ├── analytics.ts            # dataLayer helpers
│   ├── whatsapp.ts             # URL builder contextual
│   └── seo.ts                  # Metadata, JSON-LD schemas, canonical
├── public/
│   └── images/
│       ├── atriva-pipeline.png
│       ├── atriva-dashboard.png
│       └── atriva-tarefas.png
├── docs/                       # Briefings originais
├── vercel.json                 # framework=nextjs
├── package.json
├── tailwind.config.ts
└── AUDITORIA.md                # Este documento
```

---

## Pontos que não foram entregues (e por quê)

Nenhum item pedido explicitamente foi deixado de fora. Alguns tópicos foram *reduzidos de escopo com aprovação do cliente*:

- **Templates do Envato:** cliente pediu para revisitar se os 3 templates de referência (Main Files, Modis, Saloni) eram as melhores opções. Resposta honesta: não copiei nenhum — construí os 6 templates do zero a partir do briefing. Cliente aceitou.
- **Bump de Next para 15.x:** ficou em 14.2.34 (última 14.x com CVE resolvida). Cliente não pediu 15; a 14.2 é a versão suportada estável.
- **Templates com imagens reais:** as imagens são placeholders do Unsplash. Para cada cliente real, o template precisará ser personalizado com fotos do cliente. Isso já está previsto no briefing e no ModelPageBar (aviso "modelo demonstrativo — cores, imagens, textos e conteúdos serão personalizados").

---

## Verificação recomendada pelo auditor externo

1. **Renderização** — abrir os 6 templates em produção:
   - <https://belezaemfluxo.vercel.app/modelos/essencia>
   - <https://belezaemfluxo.vercel.app/modelos/aura>
   - <https://belezaemfluxo.vercel.app/modelos/movimento>
   - <https://belezaemfluxo.vercel.app/modelos/traco>
   - <https://belezaemfluxo.vercel.app/modelos/forma>
   - <https://belezaemfluxo.vercel.app/modelos/urbano>

2. **Fluxo comercial** — testar as URLs de deep link:
   - <https://belezaemfluxo.vercel.app/?modelo=aura> (destaca Aura no grid e pré-seleciona no form)
   - <https://belezaemfluxo.vercel.app/?segmento=cilios-sobrancelhas> (reordena grid)
   - <https://belezaemfluxo.vercel.app/?origem=sdr&sdr=marina> (registra origem)

3. **Rastreamento** — abrir o console do navegador em qualquer página e verificar:
   - `window.dataLayer` populado
   - Ao clicar em botões: eventos `whatsapp_click`, `model_click`, `filter_models`, etc.
   - GA4 Realtime deve mostrar o acesso em <https://analytics.google.com>

4. **SEO** — validar:
   - <https://belezaemfluxo.vercel.app/sitemap.xml> (lista 10 URLs)
   - <https://belezaemfluxo.vercel.app/robots.txt>
   - <https://belezaemfluxo.vercel.app/opengraph-image> (imagem OG dinâmica)
   - <https://search.google.com/test/rich-results> com a URL da home (deve detectar Organization, FAQPage e Service)

5. **Performance** — rodar Lighthouse mobile na home. Espera-se:
   - Performance > 85
   - Accessibility > 90
   - Best Practices > 90
   - SEO 100

---

Documento gerado em 10/07/2026 · Beleza em Fluxo by Metry
