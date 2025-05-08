
const mensajesReales = {
  contextmenu: {
    mensaje: "🔐 DO NOT TOUCH THE QUEEN'S CODE 👸💫\nThis realm is protected by royal magic.",
    emoji: "👑"
  },
  ctrlU: {
    mensaje: "🧙‍♀️ SORCERY DETECTED!\nYou are not authorized to uncover the Queen’s secrets.",
    emoji: "⚡"
  },
  ctrlShiftI: {
    mensaje: "🛑 INTRUSION BLOCKED!\nThe Royal Guard has intercepted your inspection attempt.",
    emoji: "🛡"
  },
  f12: {
    mensaje: "⚔️ F12 IS FORBIDDEN IN THE ROYAL KINGDOM\nStep away from the Queen’s spellbook!",
    emoji: "🗡"
  },
  ctrlC: {
    mensaje: "📜 COPYING DENIED!\nThese scrolls are enchanted — no stealing royal wisdom!",
    emoji: "📚"
  }
};

function mostrarMensajeReal(clave) {
  const { mensaje, emoji } = mensajesReales[clave];
  if (!mensaje) return;
  const div = document.getElementById("royalMessage");
  const texto = document.getElementById("royalText");
  const sonido = document.getElementById("royalSound");
  const emojiDiv = document.getElementById("emojiRain");

  texto.innerText = mensaje;
  emojiDiv.innerText = emoji;
  div.style.display = "flex";

  sonido.currentTime = 0;
  sonido.play();

  clearTimeout(div.timer);
}

document.getElementById("royalBtn").addEventListener("click", () => {
  document.getElementById("royalMessage").style.display = "none";
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  mostrarMensajeReal("contextmenu");
});
document.addEventListener("keydown", function (e) {
  const k = e.key.toLowerCase();
  if (e.ctrlKey && k === "u") {
    e.preventDefault();
    mostrarMensajeReal("ctrlU");
  }
  if (e.ctrlKey && e.shiftKey && k === "i") {
    e.preventDefault();
    mostrarMensajeReal("ctrlShiftI");
  }
  if (e.key === "F12" || e.keyCode === 123) {
    e.preventDefault();
    mostrarMensajeReal("f12");
  }
  if (e.ctrlKey && k === "c") {
    e.preventDefault();
    mostrarMensajeReal("ctrlC");
  }
});
