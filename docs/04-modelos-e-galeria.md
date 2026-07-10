# Organização dos Modelos e Galeria

## Objetivo
A galeria é o principal elemento de desejo da Landing Page.

## Estrutura de cada card
- thumbnail desktop
- thumbnail mobile
- nome do modelo
- segmento recomendado
- descrição curta
- lista de diferenciais
- CTA de demonstração
- CTA de seleção

## Página individual de demonstração
Rota:
`/modelos/{slug}`

Cada demonstração deve ter:
- barra superior informando que é um modelo
- botão "Quero este modelo"
- botão "Voltar para os modelos"
- aviso de que imagens, cores e conteúdos serão personalizados
- CTA fixo no mobile
- captura do modelo em campo oculto

## Slugs
- `/modelos/essencia`
- `/modelos/aura`
- `/modelos/movimento`
- `/modelos/traco`
- `/modelos/forma`
- `/modelos/urbano`

## Taxonomia
Cada modelo deve ter:
- slug
- nome
- descrição
- categorias
- destaque
- ordem
- imagem_desktop
- imagem_mobile
- url_demo
- ativo
- tags

## Filtros
- todos
- saloes
- cilios-sobrancelhas
- estetica
- unhas
- cabelo
- autonomos

## Regras de UX
- filtro em formato de chips
- primeira imagem carregar imediatamente
- restante em lazy loading
- não abrir imagens em modal pesado
- demonstração deve abrir em nova rota
- manter o botão de seleção sempre visível