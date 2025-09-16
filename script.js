window.onload = function () {
  // falling greenhouse emojis
  const falling = document.getElementById('falling');
  const iconCount = 20;

  const symbols = ["🌱", "💊", "⚕️", "🌿"];

  for (let i = 0; i < iconCount; i++) {
    let icon = document.createElement("div");
    icon.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    icon.className = "icon";
    icon.style.left = Math.random() * 100 + "vw";
    icon.style.fontSize = (20 + Math.random()*20) + "px";
    icon.style.animationDuration = 3 + Math.random() * 6 + "s";
    icon.style.animationDelay = Math.random() * 5 + "s";
    falling.appendChild(icon);
  }
};