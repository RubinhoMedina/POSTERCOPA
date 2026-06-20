/*
  Configure aqui o link real de compra.
  Exemplos:
  const CHECKOUT_URL = "https://pay.kiwify.com.br/SEU-LINK";
  const CHECKOUT_URL = "https://wa.me/5511999999999?text=Quero%20baixar%20o%20Kit%20Craques%20do%20Mundo";
*/

const CHECKOUT_URL = "https://seu-link-de-checkout-aqui.com";
const OPEN_IN_NEW_TAB = false;

const faqAnswers = {
  digital: {
    title: "O produto é digital ou físico?",
    answer: "É um produto digital. Você recebe os arquivos em PDF para baixar e imprimir. Não enviamos material físico pelos Correios."
  },
  impressora: {
    title: "Preciso de impressora especial?",
    answer: "Não. Cada pôster gigante vem dividido em 4 folhas A4 comuns. Você pode imprimir em casa ou em uma gráfica."
  },
  recebo: {
    title: "Recebo na hora?",
    answer: "Sim. Após a confirmação da compra, o acesso ao kit digital é liberado para download."
  },
  imprimir: {
    title: "Posso imprimir quantas vezes quiser?",
    answer: "Sim. Você pode imprimir novamente sempre que precisar, para uso pessoal, familiar ou nas suas atividades com crianças."
  },
  idade: {
    title: "Serve para qual idade?",
    answer: "É indicado principalmente para crianças de 5 a 12 anos, mas pode funcionar para qualquer criança que goste de futebol, pintura e atividades manuais."
  }
};

function goToCheckout(source) {
  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "cta_click",
      cta_source: source || "unknown",
      product: "craques_do_mundo"
    });
  } catch (err) {}

  if (!CHECKOUT_URL || CHECKOUT_URL.includes("seu-link-de-checkout")) {
    alert("CTA funcionando. Agora troque o CHECKOUT_URL no arquivo script.js pelo seu link de checkout, WhatsApp ou Pix.");
    return;
  }

  if (OPEN_IN_NEW_TAB) {
    window.open(CHECKOUT_URL, "_blank", "noopener,noreferrer");
  } else {
    window.location.href = CHECKOUT_URL;
  }
}

document.querySelectorAll("[data-cta]").forEach((el) => {
  el.addEventListener("click", (event) => {
    event.preventDefault();
    goToCheckout(el.dataset.cta);
  });
});

const modal = document.querySelector(".faq-modal");
const modalBackdrop = document.querySelector(".modal-backdrop");
const modalTitle = document.querySelector("#faq-title");
const modalAnswer = document.querySelector("#faq-answer");
const modalClose = document.querySelector(".modal-close");

function openFaq(key) {
  const item = faqAnswers[key];
  if (!item) return;

  modalTitle.textContent = item.title;
  modalAnswer.textContent = item.answer;
  modalBackdrop.hidden = false;

  if (typeof modal.showModal === "function") {
    modal.showModal();
  } else {
    modal.setAttribute("open", "");
  }
}

function closeFaq() {
  modalBackdrop.hidden = true;
  if (typeof modal.close === "function") {
    modal.close();
  } else {
    modal.removeAttribute("open");
  }
}

document.querySelectorAll("[data-faq]").forEach((el) => {
  el.addEventListener("click", () => openFaq(el.dataset.faq));
});

modalClose.addEventListener("click", closeFaq);
modalBackdrop.addEventListener("click", closeFaq);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeFaq();
});
