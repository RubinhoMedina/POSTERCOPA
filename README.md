# Craques do Mundo — Landing Page Fidelidade Máxima

Esta é a **Opção 1 — Fidelidade máxima visual**.

A página usa a arte principal como imagem base intacta e adiciona camadas clicáveis por cima dos CTAs e FAQs.

## Arquivos

- `index.html` — página principal
- `style.css` — posicionamento, responsividade e hotspots
- `script.js` — CTA, FAQ modal e configuração de checkout
- `assets/landing-craques-do-mundo.png` — arte principal da página

## Como testar

Abra o arquivo `index.html` no navegador.

## Como publicar na Netlify

1. Entre na Netlify.
2. Clique em **Add new site**.
3. Escolha **Deploy manually**.
4. Arraste a pasta ou o ZIP para a Netlify.
5. A página será publicada.

## Como trocar o link do botão

Abra o arquivo `script.js` e troque:

```js
const CHECKOUT_URL = "https://seu-link-de-checkout-aqui.com";
```

Por exemplo:

```js
const CHECKOUT_URL = "https://pay.kiwify.com.br/SEU-LINK";
```

Ou WhatsApp:

```js
const CHECKOUT_URL = "https://wa.me/5511999999999?text=Quero%20baixar%20o%20Kit%20Craques%20do%20Mundo";
```

## Coordenadas dos botões

Os botões são áreas invisíveis posicionadas sobre a imagem no `style.css`.

Se você trocar a imagem por outra arte, talvez precise ajustar:

- `.hotspot-hero`
- `.hotspot-offer`
- `.hotspot-final`
- `.faq-1` até `.faq-5`

## Observação importante

Esta versão preserva o visual da arte praticamente intacto, mas não é a melhor para SEO nem para edição de texto. 
Para uma versão mais profissional e escalável, o ideal é a **Opção 2 — página real editável em HTML/CSS**.
