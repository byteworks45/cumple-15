// CONTADOR
const fechaObjetivo = new Date(2026, 4, 16, 0, 0, 0);

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const celebracion = document.getElementById("celebracion");
const countdown = document.querySelector(".countdown");

function actualizarContador() {
  const ahora = new Date();
  const diff = fechaObjetivo - ahora;

  if (diff <= 0) {
    countdown.style.display = "none";
    celebracion.classList.remove("hidden");
    iniciarConfetti();
    clearInterval(intervalo);
    return;
  }

  const s = Math.floor(diff / 1000);
  daysEl.textContent = Math.floor(s / 86400);
  hoursEl.textContent = Math.floor((s / 3600) % 24);
  minutesEl.textContent = Math.floor((s / 60) % 60);
  secondsEl.textContent = Math.floor(s % 60);
}

const intervalo = setInterval(actualizarContador, 1000);
actualizarContador();

// CONFETTI
function iniciarConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confettis = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 6 + 3,
    c: `hsl(${Math.random() * 360},100%,60%)`
  }));

  setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettis.forEach(o => {
      ctx.beginPath();
      ctx.fillStyle = o.c;
      ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
      ctx.fill();
      o.y += o.d;
      if (o.y > canvas.height) o.y = -10;
    });
  }, 20);
}

// MÚSICA
const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");
let playing = false;

music.volume = 0.7;

btn.addEventListener("click", async () => {
  if (!playing) {
    await music.play();
    btn.textContent = "⏸ Pausar";
  } else {
    music.pause();
    btn.textContent = "▶ Música";
  }
  playing = !playing;
});
