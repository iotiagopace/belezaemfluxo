# Requisitos Técnicos

## Rotas
- `/`
- `/modelos`
- `/modelos/{slug}`
- `/obrigado`
- `/politica-de-privacidade`
- `/termos-de-uso`

## Estrutura técnica sugerida
- framework React/Next.js ou equivalente
- deploy em Vercel
- imagens otimizadas
- conteúdo dos modelos em JSON ou CMS simples
- formulários integrados ao Atriva por webhook/API disponível
- fallback de envio por e-mail ou n8n
- ambiente de staging

## SEO
- title e meta description exclusivos
- canonical
- Open Graph
- Twitter Cards
- sitemap
- robots.txt
- schema Organization
- schema Service
- schema FAQPage
- schema BreadcrumbList nas páginas de modelos
- imagens com alt text
- URLs amigáveis

## Performance
- LCP abaixo de 2,5 s
- CLS abaixo de 0,1
- INP abaixo de 200 ms
- imagens WebP/AVIF
- fontes otimizadas
- scripts de terceiros carregados com atraso
- lazy loading abaixo da dobra

## Analytics
- GA4
- Google Tag Manager
- Meta Pixel, quando houver campanha
- eventos customizados
- parâmetros de origem preservados
- integração com CRM

## Segurança
- HTTPS
- validação server-side
- rate limit
- honeypot ou captcha invisível
- sanitização de campos
- política de privacidade
- consentimento explícito

## Acessibilidade
- contraste adequado
- navegação por teclado
- foco visível
- labels associados
- textos alternativos
- hierarquia correta de títulos
- botões com nomes claros

## Componentes
- Header
- Hero
- ProblemCards
- BenefitsGrid
- ModelFilter
- ModelCard
- CRMFlow
- FeatureCards
- PricingCards
- ProcessSteps
- Comparison
- AudienceGrid
- Differentials
- AboutMetry
- FAQ
- LeadForm
- StickyMobileBar
- Footer