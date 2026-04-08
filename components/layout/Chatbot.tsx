"use client";
import { useEffect } from "react";

// Inject the exact chatbot HTML/CSS/JS from the design spec as a client-side component
export default function Chatbot() {
  useEffect(() => {
    // ── Inject styles ──────────────────────────────────────────────
    const style = document.createElement("style");
    style.id = "ana-chatbot-styles";
    style.textContent = `
      #chat-toggle {
        position: fixed; bottom: 28px; right: 28px;
        width: 62px; height: 62px; border-radius: 50%;
        border: 1px solid rgba(255,255,255,0.70);
        cursor: pointer; z-index: 9999;
        background: rgba(255,255,255,0.55);
        backdrop-filter: blur(18px) saturate(1.8);
        -webkit-backdrop-filter: blur(18px) saturate(1.8);
        box-shadow: 0 8px 32px rgba(120,140,200,0.25), inset 0 1px 0 rgba(255,255,255,0.8);
        transition: transform 0.25s cubic-bezier(.34,1.56,.64,1), box-shadow 0.25s ease;
        display: flex; align-items: center; justify-content: center; overflow: visible;
      }
      #chat-toggle::before {
        content: ''; position: absolute; inset: 0; border-radius: 50%;
        background: radial-gradient(circle at 35% 30%, rgba(59,139,250,0.18), transparent 65%),
                    radial-gradient(circle at 70% 70%, rgba(167,139,250,0.15), transparent 60%);
      }
      #chat-toggle svg {
        width: 26px; height: 26px; position: relative;
        transition: transform 0.3s ease, opacity 0.3s ease;
      }
      #chat-toggle .icon-chat  { color: #3b8bfa; }
      #chat-toggle .icon-close { color: #4a5573; position: absolute; opacity: 0; transform: rotate(-90deg) scale(0.7); }
      #chat-toggle.open .icon-chat  { opacity: 0; transform: rotate(90deg) scale(0.7); }
      #chat-toggle.open .icon-close { opacity: 1; transform: rotate(0deg) scale(1); }
      #chat-toggle:hover { transform: translateY(-3px) scale(1.05); box-shadow: 0 16px 48px rgba(100,140,220,0.3), inset 0 1px 0 rgba(255,255,255,0.9); }
      #chat-toggle::after {
        content: ''; position: absolute; inset: -4px; border-radius: 50%;
        border: 2px solid rgba(59,139,250,0.3);
        animation: ana-pulse-ring 2.8s ease-out infinite;
      }
      @keyframes ana-pulse-ring {
        0%  { transform: scale(1); opacity: 0.7; }
        80% { transform: scale(1.4); opacity: 0; }
        100% { opacity: 0; }
      }

      #chat-widget {
        position: fixed; bottom: 106px; right: 28px;
        width: 390px; height: 580px;
        background: rgba(255,255,255,0.42);
        backdrop-filter: blur(24px) saturate(1.9) brightness(1.05);
        -webkit-backdrop-filter: blur(24px) saturate(1.9) brightness(1.05);
        border-radius: 28px;
        border: 1px solid rgba(255,255,255,0.72);
        box-shadow: 0 24px 64px rgba(100,130,200,0.22), 0 8px 24px rgba(100,130,200,0.14),
                    inset 0 1px 0 rgba(255,255,255,0.85), inset 0 -1px 0 rgba(255,255,255,0.35);
        display: flex; flex-direction: column; overflow: hidden; z-index: 9998;
        opacity: 0; transform: translateY(20px) scale(0.97); pointer-events: none;
        transition: opacity 0.35s cubic-bezier(.4,0,.2,1), transform 0.35s cubic-bezier(.34,1.56,.64,1);
      }
      #chat-widget::before {
        content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
        background: linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.9) 30%, rgba(255,255,255,0.9) 70%, transparent 95%);
        border-radius: 28px 28px 0 0; z-index: 0;
      }
      #chat-widget::after {
        content: ''; position: absolute; inset: 0;
        background: radial-gradient(ellipse 80% 50% at 0% 0%, rgba(59,139,250,0.06) 0%, transparent 65%),
                    radial-gradient(ellipse 60% 60% at 100% 100%, rgba(167,139,250,0.07) 0%, transparent 65%);
        pointer-events: none; border-radius: 28px; z-index: 0;
      }
      #chat-widget.visible { opacity: 1; transform: translateY(0) scale(1); pointer-events: all; }

      #chat-header {
        position: relative; z-index: 1; padding: 18px 20px 16px;
        display: flex; align-items: center; gap: 14px;
        border-bottom: 1px solid rgba(255,255,255,0.55);
        background: rgba(255,255,255,0.30); backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px); flex-shrink: 0;
      }
      .ana-avatar { position: relative; flex-shrink: 0; }
      .ana-avatar-ring {
        width: 46px; height: 46px; border-radius: 16px;
        background: linear-gradient(135deg, #3b8bfa, #a78bfa);
        display: flex; align-items: center; justify-content: center;
        box-shadow: 0 4px 16px rgba(59,139,250,0.30), inset 0 1px 0 rgba(255,255,255,0.3);
      }
      .ana-avatar-ring svg { width: 24px; height: 24px; color: #fff; }
      .ana-status-dot {
        position: absolute; bottom: -2px; right: -2px; width: 13px; height: 13px;
        background: #22c55e; border-radius: 50%; border: 2px solid rgba(255,255,255,0.8);
        box-shadow: 0 0 8px rgba(34,197,94,0.55);
      }
      .ana-status-dot::after {
        content: ''; position: absolute; inset: -3px; border-radius: 50%;
        background: rgba(34,197,94,0.28);
        animation: ana-pulse-status 1.8s ease-out infinite;
      }
      @keyframes ana-pulse-status {
        0%   { transform: scale(1); opacity: 1; }
        100% { transform: scale(2.2); opacity: 0; }
      }
      .ana-header-info { flex: 1; min-width: 0; }
      .ana-header-name {
        font-family: 'Syne', sans-serif; font-size: 15px; font-weight: 700;
        color: #1e2a40; letter-spacing: 0.01em; white-space: nowrap;
        overflow: hidden; text-overflow: ellipsis;
      }
      .ana-header-sub { font-size: 11.5px; color: #00c9a7; margin-top: 3px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; }
      .ana-header-action {
        width: 34px; height: 34px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.60);
        background: rgba(255,255,255,0.45); backdrop-filter: blur(8px); color: #4a5573;
        cursor: pointer; display: flex; align-items: center; justify-content: center;
        transition: background 0.2s, color 0.2s, box-shadow 0.2s; flex-shrink: 0;
      }
      .ana-header-action:hover { background: rgba(255,255,255,0.70); color: #1e2a40; box-shadow: 0 2px 12px rgba(100,130,200,0.15); }
      .ana-header-action svg { width: 16px; height: 16px; }

      #ana-chat-messages {
        flex: 1; overflow-y: auto; padding: 20px 18px; display: flex;
        flex-direction: column; gap: 14px; position: relative; z-index: 1;
        background: transparent; scroll-behavior: smooth;
      }
      #ana-chat-messages::-webkit-scrollbar { width: 5px; }
      #ana-chat-messages::-webkit-scrollbar-track { background: transparent; }
      #ana-chat-messages::-webkit-scrollbar-thumb { background: rgba(100,130,200,0.18); border-radius: 99px; }

      .ana-msg-divider {
        display: flex; align-items: center; gap: 10px; color: #9ba8c4;
        font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; font-weight: 500;
      }
      .ana-msg-divider::before, .ana-msg-divider::after {
        content: ''; flex: 1; height: 1px; background: rgba(150,170,220,0.25);
      }
      .ana-msg-row {
        display: flex; gap: 10px; align-items: flex-end;
        animation: ana-msg-in 0.3s cubic-bezier(.34,1.3,.64,1) both;
      }
      @keyframes ana-msg-in {
        from { opacity: 0; transform: translateY(10px) scale(0.97); }
        to   { opacity: 1; transform: translateY(0) scale(1); }
      }
      .ana-msg-row.user { flex-direction: row-reverse; }
      .ana-msg-avatar-small {
        width: 28px; height: 28px; border-radius: 10px;
        background: linear-gradient(135deg, #3b8bfa, #a78bfa);
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0; margin-bottom: 2px; box-shadow: 0 2px 8px rgba(59,139,250,0.25);
      }
      .ana-msg-avatar-small svg { width: 14px; height: 14px; color: #fff; }
      .ana-msg {
        max-width: 78%; padding: 12px 16px; font-size: 13.5px; line-height: 1.55;
        word-wrap: break-word; white-space: pre-wrap; position: relative;
        font-family: 'DM Sans', sans-serif;
      }
      .ana-msg.bot {
        background: rgba(255,255,255,0.58); backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px); color: #1e2a40;
        border-radius: 20px 20px 20px 6px;
        border: 1px solid rgba(255,255,255,0.75);
        box-shadow: 0 4px 20px rgba(100,130,200,0.15), inset 0 1px 0 rgba(255,255,255,0.85);
      }
      .ana-msg.user {
        background: linear-gradient(135deg, rgba(59,139,250,0.82), rgba(167,139,250,0.82));
        backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
        color: #fff; border-radius: 20px 20px 6px 20px;
        border: 1px solid rgba(255,255,255,0.35);
        box-shadow: 0 6px 24px rgba(59,139,250,0.28), inset 0 1px 0 rgba(255,255,255,0.30);
      }
      .ana-typing {
        display: flex; align-items: center; gap: 5px; padding: 14px 16px;
        background: rgba(255,255,255,0.55); backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-radius: 20px 20px 20px 6px;
        border: 1px solid rgba(255,255,255,0.72); width: fit-content;
        box-shadow: 0 4px 16px rgba(100,130,200,0.12);
      }
      .ana-typing span {
        width: 6px; height: 6px; background: rgba(100,130,200,0.45); border-radius: 50%;
        animation: ana-typing-dot 1.4s ease-in-out infinite;
      }
      .ana-typing span:nth-child(2) { animation-delay: 0.2s; }
      .ana-typing span:nth-child(3) { animation-delay: 0.4s; }
      @keyframes ana-typing-dot {
        0%, 60%, 100% { transform: translateY(0); background: rgba(100,130,200,0.4); }
        30%            { transform: translateY(-6px); background: #3b8bfa; }
      }

      #ana-chat-input-area {
        position: relative; z-index: 1; padding: 14px 16px;
        border-top: 1px solid rgba(255,255,255,0.55);
        background: rgba(255,255,255,0.28); backdrop-filter: blur(8px);
        display: flex; align-items: center; gap: 10px; flex-shrink: 0;
      }
      .ana-input-wrap {
        flex: 1; display: flex; align-items: center;
        background: rgba(255,255,255,0.60); border: 1px solid rgba(255,255,255,0.75);
        border-radius: 16px; padding: 0 14px; gap: 8px;
        transition: border-color 0.2s, box-shadow 0.2s;
        box-shadow: inset 0 1px 3px rgba(100,130,200,0.08), 0 2px 8px rgba(100,130,200,0.06);
      }
      .ana-input-wrap:focus-within {
        border-color: rgba(59,139,250,0.45);
        box-shadow: 0 0 0 3px rgba(59,139,250,0.10), inset 0 1px 3px rgba(100,130,200,0.08);
      }
      .ana-input-icon { color: #9ba8c4; flex-shrink: 0; }
      .ana-input-icon svg { width: 15px; height: 15px; display: block; }
      #ana-chat-input {
        flex: 1; background: none; border: none; outline: none;
        color: #1e2a40; font-family: 'DM Sans', sans-serif; font-size: 13.5px;
        padding: 13px 0; caret-color: #3b8bfa;
      }
      #ana-chat-input::placeholder { color: #9ba8c4; }
      #ana-chat-send {
        width: 44px; height: 44px; border-radius: 14px;
        border: 1px solid rgba(59,139,250,0.35); cursor: pointer;
        background: linear-gradient(135deg, rgba(59,139,250,0.85), rgba(167,139,250,0.85));
        backdrop-filter: blur(8px); color: #fff;
        display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        transition: transform 0.2s cubic-bezier(.34,1.56,.64,1), opacity 0.2s, box-shadow 0.2s;
        box-shadow: 0 4px 16px rgba(59,139,250,0.28), inset 0 1px 0 rgba(255,255,255,0.25);
      }
      #ana-chat-send:hover { transform: scale(1.08); box-shadow: 0 8px 24px rgba(59,139,250,0.38); }
      #ana-chat-send:active { transform: scale(0.96); }
      #ana-chat-send svg { width: 18px; height: 18px; }
      .ana-footer-note {
        text-align: center; font-size: 10.5px; color: #9ba8c4;
        padding: 0 16px 11px; background: rgba(255,255,255,0.20); letter-spacing: 0.02em;
        position: relative; z-index: 1; font-family: 'DM Sans', sans-serif;
      }
      .ana-footer-note span { color: #3b8bfa; font-weight: 600; }

      @media (max-width: 480px) {
        #chat-widget { width: calc(100vw - 20px); height: 75dvh; right: 10px; bottom: 88px; border-radius: 22px; }
        #chat-toggle { right: 16px; bottom: 16px; }
      }
    `;
    if (!document.getElementById("ana-chatbot-styles")) {
      document.head.appendChild(style);
    }

    // ── Inject HTML ────────────────────────────────────────────────
    if (document.getElementById("chat-toggle")) return;

    const WEBHOOK_URL = "https://darespinel123.app.n8n.cloud/webhook/chat-web";

    const toggleBtn = document.createElement("button");
    toggleBtn.id = "chat-toggle";
    toggleBtn.setAttribute("aria-label", "Abrir chat");
    toggleBtn.innerHTML = `
      <svg class="icon-chat" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 16c0 1.1-.9 2-2 2H7l-4 4V6c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v10z"/>
      </svg>
      <svg class="icon-close" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    `;

    const widget = document.createElement("div");
    widget.id = "chat-widget";
    widget.setAttribute("role", "dialog");
    widget.innerHTML = `
      <div id="chat-header">
        <div class="ana-avatar">
          <div class="ana-avatar-ring">
            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/>
            </svg>
          </div>
          <div class="ana-status-dot"></div>
        </div>
        <div class="ana-header-info">
          <div class="ana-header-name">Ana, tu asistente virtual</div>
          <div class="ana-header-sub">En línea · Respuesta inmediata</div>
        </div>
        <button class="ana-header-action" id="ana-btn-minimize" aria-label="Minimizar">
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </button>
      </div>
      <div id="ana-chat-messages">
        <div class="ana-msg-divider">Hoy</div>
      </div>
      <div id="ana-chat-input-area">
        <div class="ana-input-wrap">
          <div class="ana-input-icon">
            <svg fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
            </svg>
          </div>
          <input id="ana-chat-input" type="text" placeholder="Escribe un mensaje..." autocomplete="off" />
        </div>
        <button id="ana-chat-send" aria-label="Enviar">
          <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/>
          </svg>
        </button>
      </div>
      <div class="ana-footer-note">Desarrollado con <span>IA</span> · Inteliabyte</div>
    `;

    document.body.appendChild(toggleBtn);
    document.body.appendChild(widget);

    // ── Logic ──────────────────────────────────────────────────────
    const messagesEl = document.getElementById("ana-chat-messages")!;
    const inputEl = document.getElementById("ana-chat-input") as HTMLInputElement;
    const sendBtn = document.getElementById("ana-chat-send")!;
    const minimizeBtn = document.getElementById("ana-btn-minimize")!;
    let isOpen = false;

    function getSessionId() {
      let id = localStorage.getItem("webchat_session_id");
      if (!id) { id = "web-" + Math.random().toString(36).slice(2) + Date.now(); localStorage.setItem("webchat_session_id", id); }
      return id;
    }

    const BOT_SVG = `<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/></svg>`;

    function addMessage(text: string, sender: string) {
      const row = document.createElement("div");
      row.className = `ana-msg-row ${sender}`;
      if (sender === "bot") {
        const av = document.createElement("div");
        av.className = "ana-msg-avatar-small";
        av.innerHTML = BOT_SVG;
        row.appendChild(av);
      }
      const bubble = document.createElement("div");
      bubble.className = `ana-msg ${sender}`;
      bubble.textContent = text;
      row.appendChild(bubble);
      messagesEl.appendChild(row);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function addTyping() {
      const row = document.createElement("div");
      row.className = "ana-msg-row bot"; row.id = "ana-typing-row";
      const av = document.createElement("div"); av.className = "ana-msg-avatar-small"; av.innerHTML = BOT_SVG;
      const ind = document.createElement("div"); ind.className = "ana-typing"; ind.innerHTML = "<span></span><span></span><span></span>";
      row.appendChild(av); row.appendChild(ind); messagesEl.appendChild(row);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function removeTyping() { document.getElementById("ana-typing-row")?.remove(); }

    function openChat() {
      isOpen = true; widget.classList.add("visible"); toggleBtn.classList.add("open"); inputEl.focus();
      if (messagesEl.querySelectorAll(".ana-msg-row").length === 0) {
        setTimeout(() => addMessage("¡Hola! 👋 Soy Ana, tu asistente virtual de Inteliabyte. ¿En qué puedo ayudarte hoy?", "bot"), 200);
      }
    }
    function closeChat() { isOpen = false; widget.classList.remove("visible"); toggleBtn.classList.remove("open"); }

    toggleBtn.addEventListener("click", () => isOpen ? closeChat() : openChat());
    minimizeBtn.addEventListener("click", closeChat);

    async function sendMessage() {
      const text = inputEl.value.trim(); if (!text) return;
      addMessage(text, "user"); inputEl.value = "";
      (sendBtn as HTMLButtonElement).style.opacity = "0.5"; (sendBtn as HTMLButtonElement).disabled = true;
      addTyping();
      try {
        const res = await fetch(WEBHOOK_URL, { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({ sessionId: getSessionId(), message: text, source:"webchat" }) });
        const data = await res.json(); removeTyping();
        addMessage(data.reply || "No se recibió respuesta del servidor.", "bot");
      } catch {
        removeTyping();
        addMessage("No fue posible conectar con el asistente en este momento. Intenta de nuevo.", "bot");
      } finally {
        (sendBtn as HTMLButtonElement).style.opacity = "1"; (sendBtn as HTMLButtonElement).disabled = false; inputEl.focus();
      }
    }

    sendBtn.addEventListener("click", sendMessage);
    inputEl.addEventListener("keydown", (e: KeyboardEvent) => { if (e.key === "Enter" && !e.shiftKey) sendMessage(); });

    return () => {
      document.getElementById("chat-toggle")?.remove();
      document.getElementById("chat-widget")?.remove();
      document.getElementById("ana-chatbot-styles")?.remove();
    };
  }, []);

  return null;
}
