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
