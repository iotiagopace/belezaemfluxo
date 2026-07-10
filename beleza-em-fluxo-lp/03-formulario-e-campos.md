# Formulário e Campos

## Campos visíveis
- nome
- nome_negocio
- whatsapp
- email
- cidade
- estado
- segmento
- possui_site
- organizacao_contatos
- interesse_plano
- modelo_interesse

## Campos ocultos
- utm_source
- utm_medium
- utm_campaign
- utm_content
- utm_term
- origem
- sdr
- modelo_origem
- segmento_origem
- pagina_origem
- referrer
- gclid
- fbclid
- data_hora_envio

## Condicionais

### Caso selecione "Tenho apenas Instagram"
Exibir:
"Seu Instagram pode continuar sendo um canal importante. A página organiza as informações que hoje ficam espalhadas."

### Caso selecione CRM
Exibir:
"Ótimo. Nossa equipe poderá avaliar se faz sentido manter sua ferramenta atual ou apresentar o Atriva."

### Caso selecione "Não tenho processo definido"
Exibir:
"O plano completo pode ajudar a organizar os contatos desde o primeiro atendimento."

## Validações
- WhatsApp obrigatório
- Nome obrigatório
- Segmento obrigatório
- Consentimento obrigatório
- E-mail opcional ou obrigatório conforme estratégia
- máscara de telefone brasileiro
- bloqueio de envios duplicados em curto intervalo

## Pós-envio
1. mostrar confirmação;
2. exibir modelo selecionado;
3. oferecer WhatsApp;
4. enviar lead ao CRM;
5. atribuir à SDR pela origem;
6. disparar evento de conversão;
7. enviar e-mail de confirmação, se aplicável.