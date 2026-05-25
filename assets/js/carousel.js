export function initCarousel() {
  const carousel = document.getElementById("dashboard-carousel");
  const btnPrev = document.getElementById("carousel-prev");
  const btnNext = document.getElementById("carousel-next");

  btnPrev.addEventListener("click", () => scrollByCard(carousel, -1));
  btnNext.addEventListener("click", () => scrollByCard(carousel, 1));
}

function scrollByCard(carousel, dir) {
  const card = carousel.querySelector(".dashboard-thumb");
  const gap = parseInt(getComputedStyle(carousel).gap) || 20;
  const step = (card ? card.offsetWidth : 320) + gap;
  carousel.scrollBy({ left: dir * step, behavior: "smooth" });
}
