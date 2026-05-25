const images = [
  { src: "assets/images/advogado.png",  caption: "Landing Page para Advogado - Atuando internacionalmente" },
  { src: "assets/images/Dashboard.png", caption: "Dashboard de Execuções — Orquestrador de Automações Jurídicas" },
  { src: "assets/images/RabbitMQ.png",  caption: "Monitoramento RabbitMQ — Filas e mensageria em tempo real" },
  { src: "assets/images/usuarios.png",  caption: "Gestão de Usuários — Controle de acesso e permissões" },
  { src: "assets/images/inicial.png",   caption: "Interface Timeline do Sistema" },
];

let currentIndex = 0;

export function initLightbox() {
  document.getElementById("lightbox").addEventListener("click", function (e) {
    if (e.target === this) close();
  });

  document.addEventListener("keydown", function (e) {
    if (!document.getElementById("lightbox").classList.contains("active")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") navigate(-1);
    if (e.key === "ArrowRight") navigate(1);
  });
}

export function open(index) {
  currentIndex = index;
  updateImage();
  document.getElementById("lightbox").classList.add("active");
  document.body.style.overflow = "hidden";
}

export function close() {
  document.getElementById("lightbox").classList.remove("active");
  document.body.style.overflow = "";
}

export function navigate(dir) {
  currentIndex = (currentIndex + dir + images.length) % images.length;
  updateImage();
}

function updateImage() {
  const img = images[currentIndex];
  document.getElementById("lb-img").src = img.src;
  document.getElementById("lb-img").alt = img.caption;
  document.getElementById("lb-caption").textContent = img.caption;
}
