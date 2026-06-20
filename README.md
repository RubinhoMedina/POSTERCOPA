# Craques do Mundo — Landing Page Corrigida para GitHub

Esta versão foi corrigida para evitar imagens quebradas.

## Estrutura obrigatória

Ao subir para o GitHub, Netlify ou qualquer hospedagem, mantenha esta estrutura:

```txt
index.html
style.css
script.js
package.json
README.md
assets/
  todas-as-imagens.png
```

O arquivo `index.html` precisa ficar no mesmo nível da pasta `assets`.

## Erro comum

Se aparecer ícone de imagem quebrada no navegador, quase sempre é porque você subiu apenas:

```txt
index.html
style.css
script.js
```

e esqueceu de subir a pasta:

```txt
assets/
```

Ou colocou `index.html` fora da pasta onde está `assets`.

## Como testar localmente

Opção simples: abra `index.html`.

Opção recomendada:

```bash
python -m http.server 8080
```

Depois acesse:

```txt
http://localhost:8080
```

## Como subir no GitHub

1. Crie o repositório.
2. Envie todos os arquivos deste ZIP.
3. Confirme que a pasta `assets` foi enviada junto.
4. Ative GitHub Pages na branch principal.
5. Abra o link publicado.

## Como trocar o link de compra

Abra `script.js` e troque:

```js
const CHECKOUT_URL = "https://seu-link-de-checkout-aqui.com";
```

pelo link real de checkout, WhatsApp, Pix ou DEPix.
