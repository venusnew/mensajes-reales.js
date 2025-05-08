  const mensajesReales = {
    contextmenu: {
      mensaje: &quot;🔐 DO NOT TOUCH THE QUEEN&#39;S CODE 👸💫\nThis realm is protected by royal magic.&quot;,
      emoji: &quot;👑&quot;
    },
    ctrlU: {
      mensaje: &quot;🧙&#8205;&#9792;&#65039; SORCERY DETECTED!\nYou are not authorized to uncover the Queen&#8217;s secrets.&quot;,
      emoji: &quot;&#9889;&quot;
    },
    ctrlShiftI: {
      mensaje: &quot;🛑 INTRUSION BLOCKED!\nThe Royal Guard has intercepted your inspection attempt.&quot;,
      emoji: &quot;🛡&quot;
    },
    f12: {
      mensaje: &quot;&#9876;&#65039; F12 IS FORBIDDEN IN THE ROYAL KINGDOM\nStep away from the Queen&#8217;s spellbook!&quot;,
      emoji: &quot;🗡&quot;
    },
    ctrlC: {
      mensaje: &quot;📜 COPYING DENIED!\nThese scrolls are enchanted &#8212; no stealing royal wisdom!&quot;,
      emoji: &quot;📚&quot;
    }
  };

  function mostrarMensajeReal(clave) {
    const { mensaje, emoji } = mensajesReales[clave];
    if (!mensaje) return;
    const div = document.getElementById(&quot;royalMessage&quot;);
    const texto = document.getElementById(&quot;royalText&quot;);
    const sonido = document.getElementById(&quot;royalSound&quot;);
    const emojiDiv = document.getElementById(&quot;emojiRain&quot;);
    
    // Mostrar mensaje y emoji correspondiente
    texto.innerText = mensaje;
    emojiDiv.innerText = emoji; // Cambia el emoji
    div.style.display = &quot;flex&quot;;
    
    // Reproducir sonido mágico
    sonido.currentTime = 0;
    sonido.play();
    
    clearTimeout(div.timer);
  }

  document.getElementById(&quot;royalBtn&quot;).addEventListener(&quot;click&quot;, () =&gt; {
    document.getElementById(&quot;royalMessage&quot;).style.display = &quot;none&quot;;
  });

  // Detectar acciones prohibidas
  document.addEventListener(&quot;contextmenu&quot;, function(e) {
    e.preventDefault();
    mostrarMensajeReal(&quot;contextmenu&quot;);
  });
  document.addEventListener(&quot;keydown&quot;, function(e) {
    const k = e.key.toLowerCase();
    if (e.ctrlKey &amp;&amp; k === &quot;u&quot;) {
      e.preventDefault();
      mostrarMensajeReal(&quot;ctrlU&quot;);
    }
    if (e.ctrlKey &amp;&amp; e.shiftKey &amp;&amp; k === &quot;i&quot;) {
      e.preventDefault();
      mostrarMensajeReal(&quot;ctrlShiftI&quot;);
    }
    if (e.key === &quot;F12&quot; || e.keyCode === 123) {
      e.preventDefault();
      mostrarMensajeReal(&quot;f12&quot;);
    }
    if (e.ctrlKey &amp;&amp; k === &quot;c&quot;) {
      e.preventDefault();
      mostrarMensajeReal(&quot;ctrlC&quot;);
    }
  });
