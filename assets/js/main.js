import { initLightbox, open, close, navigate } from "./lightbox.js";
// import { initCarousel } from "./carousel.js";
import { initAiChat } from "./ai-chat.js";

document.getElementById("year").textContent = new Date().getFullYear();

initLightbox();
// initCarousel();
initAiChat();

// Expose lightbox functions for inline HTML onclick attributes
window.openLb = open;
window.closeLb = close;
window.lbNav = navigate;
