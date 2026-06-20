# Craques do Mundo — Landing Page GitHub

Página de vendas estática, editável e pronta para commit no GitHub.

## Estrutura

```txt
craques-do-mundo-github/
  index.html
  style.css
  script.js
  assets/
    mockup-referencia.png
    ...assets internos da página...
    raw-generated/
      ...cópias das imagens individuais geradas...
```

## Como testar localmente

Abra o arquivo `index.html` no navegador.

Também pode rodar um servidor local:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Como trocar o link de compra

Abra `script.js` e altere:

```js
const CHECKOUT_URL = "https://seu-link-de-checkout-aqui.com";
```

Pode usar link de checkout, WhatsApp, Pix, Kiwify, página de pagamento ou rota própria.

## O que foi incluído

- Página de vendas real em HTML/CSS/JS.
- Imagens internas em `/assets`.
- Mockup de referência em `/assets/mockup-referencia.png`.
- Cópia das imagens individuais em `/assets/raw-generated`.
- FAQ funcional.
- CTAs clicáveis.
- CTA fixo no mobile.
- Layout responsivo.
- Sem CDN de imagens e sem dependência externa.

## Deploy

Pode subir diretamente em:

- GitHub Pages
- Netlify
- Vercel como site estático
- Hostinger/cPanel

## Observação

Alguns textos e botões foram mantidos como HTML/CSS sempre que possível para edição futura. Os assets visuais criados individualmente foram incorporados como imagens locais para preservar fidelidade visual.
