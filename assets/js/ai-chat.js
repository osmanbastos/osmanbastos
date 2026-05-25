import { sendMessage } from "./ai-service.js";
import { systemPrompt } from "./profile.js";

export function initAiChat() {
  document.body.appendChild(createWidget());

  const toggle = document.getElementById("ai-chat-toggle");
  const panel = document.getElementById("ai-chat-panel");
  const closeBtn = document.getElementById("ai-chat-close");
  const input = document.getElementById("ai-chat-input");
  const sendBtn = document.getElementById("ai-chat-send");
  const messagesEl = document.getElementById("ai-chat-messages");

  const history = [{ role: "system", content: systemPrompt }];

  addBotMessage(messagesEl, "Olá! Sou o assistente virtual do Osman. Posso responder perguntas sobre sua experiência, stack técnica, projetos ou disponibilidade. Como posso ajudar?");

  toggle.addEventListener("click", () => panel.classList.toggle("open"));
  closeBtn.addEventListener("click", () => panel.classList.remove("open"));
  sendBtn.addEventListener("click", () => handleSend(input, sendBtn, messagesEl, history));
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSend(input, sendBtn, messagesEl, history);
  });
}

async function handleSend(input, sendBtn, messagesEl, history) {
  const text = input.value.trim();
  if (!text || sendBtn.disabled) return;

  addUserMessage(messagesEl, text);
  input.value = "";
  sendBtn.disabled = true;

  history.push({ role: "user", content: text });

  const typingEl = addTypingIndicator(messagesEl);

  try {
    const reply = await sendMessage(history);
    history.push({ role: "assistant", content: reply });
    typingEl.remove();
    addBotMessage(messagesEl, reply);
  } catch (err) {
    typingEl.remove();
    addBotMessage(messagesEl, "Desculpe, ocorreu um erro. Tente novamente mais tarde.");
    console.error(err);
  } finally {
    sendBtn.disabled = false;
    input.focus();
  }
}

function createWidget() {
  const widget = document.createElement("div");
  widget.id = "ai-chat-widget";
  widget.innerHTML = `
    <div id="ai-chat-panel" role="dialog" aria-label="Chat com Osman AI">
      <div id="ai-chat-header">
        <div>
          <h3>Osman AI</h3>
          <p>Pergunte sobre minha experiência</p>
        </div>
        <button id="ai-chat-close" aria-label="Fechar chat">✕</button>
      </div>
      <div id="ai-chat-messages" role="log" aria-live="polite"></div>
      <div id="ai-chat-input-area">
        <input id="ai-chat-input" type="text" placeholder="Pergunte algo sobre o Osman..." aria-label="Mensagem" />
        <button id="ai-chat-send">Enviar</button>
      </div>
    </div>
    <button id="ai-chat-toggle" aria-label="Abrir chat com Osman AI">🤖</button>
  `;
  return widget;
}

function addUserMessage(container, text) {
  appendMessage(container, text, "user");
}

function addBotMessage(container, text) {
  appendMessage(container, text, "bot");
}

function addTypingIndicator(container) {
  return appendMessage(container, "Digitando...", "bot typing");
}

function appendMessage(container, text, className) {
  const el = document.createElement("div");
  el.className = `ai-msg ${className}`;
  el.textContent = text;
  container.appendChild(el);
  container.scrollTop = container.scrollHeight;
  return el;
}
