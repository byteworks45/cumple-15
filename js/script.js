// MUSICA
const music = document.getElementById("music");
const btn = document.getElementById("musicBtn");

btn.onclick = () => {
  if (music.paused) {
    music.play();
    btn.textContent = "⏸ Música";
  } else {
    music.pause();
    btn.textContent = "▶ Música";
  }
};

// CONTADOR
const target = new Date("2026-05-16T00:00:00");

setInterval(() => {
  const now = new Date();
  const diff = target - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor(diff / (1000 * 60 * 60) % 24);
  const m = Math.floor(diff / (1000 * 60) % 60);
  const s = Math.floor(diff / 1000 % 60);

  document.getElementById("countdown").innerHTML =
    `${d} días ${h} hs ${m} min ${s} seg`;
}, 1000);

// LLUVIA DE ROSAS
const roses = document.getElementById("roses");

setInterval(() => {
  const rose = document.createElement("img");
  rose.src = "assets/images/rose.png";
  rose.style.left = Math.random() * 100 + "vw";
  rose.style.animationDuration = 5 + Math.random() * 5 + "s";
  roses.appendChild(rose);

  setTimeout(() => rose.remove(), 10000);
}, 400);
