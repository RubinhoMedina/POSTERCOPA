const offerButton = document.querySelector(".cta-hotspot--offer");

document.querySelectorAll('a[href="#checkout"]').forEach((button) => {
  button.addEventListener("click", (event) => {
    if (button === offerButton) {
      event.preventDefault();
      offerButton.focus({ preventScroll: true });
      return;
    }

    event.preventDefault();
    offerButton?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "center"
    });
    history.replaceState(null, "", "#checkout");
  });
});
