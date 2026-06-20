
// Diagnóstico/fallback de imagens.
// Se você mover index.html sem a pasta assets ao lado, as imagens quebram.
// Este trecho tenta alguns caminhos comuns antes de desistir.
(function () {
  const candidatesFor = (path) => {
    const clean = path.replace(/^\.?\//, "");
    if (!clean.startsWith("assets/")) return [];
    return [
      "./" + clean,
      clean,
      "../" + clean,
      "./craques-do-mundo-github/assets/" + clean.split("/").pop(),
      "./craques-do-mundo-github-fixado/assets/" + clean.split("/").pop()
    ];
  };

  function testImage(url) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(url);
      img.onerror = () => resolve(null);
      img.src = url;
    });
  }

  async function repairBrokenImages() {
    const imgs = Array.from(document.images);
    for (const img of imgs) {
      const original = img.getAttribute("src") || "";
      if (!original.includes("assets/")) continue;
      if (img.complete && img.naturalWidth > 0) continue;

      const candidates = candidatesFor(original);
      for (const candidate of candidates) {
        const ok = await testImage(candidate);
        if (ok) {
          img.src = ok;
          break;
        }
      }
    }
  }

  window.addEventListener("load", repairBrokenImages);
})();


// Troque aqui pelo seu link de checkout, WhatsApp, Pix ou página de pagamento.
const CHECKOUT_URL = "https://seu-link-de-checkout-aqui.com";
const OPEN_IN_NEW_TAB = false;

function goToCheckout(source = "cta") {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "cta_click", source, product: "craques_do_mundo" });
  } catch (e) {}

  if (!CHECKOUT_URL || CHECKOUT_URL.includes("seu-link-de-checkout")) {
    alert("CTA funcionando. Agora troque o CHECKOUT_URL no arquivo script.js pelo seu link de checkout, WhatsApp, Pix ou página de pagamento.");
    return;
  }
  if (OPEN_IN_NEW_TAB) window.open(CHECKOUT_URL, "_blank", "noopener,noreferrer");
  else window.location.href = CHECKOUT_URL;
}

document.querySelectorAll(".cta-link").forEach((el, index) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    goToCheckout(`cta_${index + 1}`);
  });
});
