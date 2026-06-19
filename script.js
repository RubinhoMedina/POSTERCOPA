const track = document.querySelector("#flagTrack");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (track) {
  const originals = [...track.children];
  originals.forEach((flag) => track.append(flag.cloneNode(true)));

  let offset = 0;
  let previousTime = 0;
  const speed = 46;

  function animate(time) {
    if (!previousTime) previousTime = time;
    const delta = Math.min((time - previousTime) / 1000, 0.05);
    previousTime = time;

    if (!prefersReducedMotion.matches) {
      offset += speed * delta;
      const loopWidth = track.scrollWidth / 2;
      if (offset >= loopWidth) offset -= loopWidth;
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    } else {
      track.style.transform = "none";
    }

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}

document.querySelectorAll('a[href="#checkout"]').forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("#checkout")?.setAttribute("tabindex", "-1");
  });
});
