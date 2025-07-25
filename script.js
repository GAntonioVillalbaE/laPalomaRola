const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause");
const progressBar = document.getElementById("progress-bar");
const progressContainer = document.querySelector(".progress-container");
const currentTimeElement = document.getElementById("current-time");
const durationElement = document.getElementById("duration");
const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");

// Reproducir o pausar
playPauseButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playIcon.classList.add("hidden"); // Oculta el ícono de play
    pauseIcon.classList.remove("hidden"); // Muestra el ícono de pause
  } else {
    audio.pause();
    playIcon.classList.remove("hidden"); // Muestra el ícono de play
    pauseIcon.classList.add("hidden"); // Oculta el ícono de pause
  }
});

// Actualizar la barra de progreso
audio.addEventListener("timeupdate", () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progressPercent}%`;
  currentTimeElement.textContent = formatTime(audio.currentTime);
});

// Mostrar duración del audio
audio.addEventListener("loadeddata", () => {
  durationElement.textContent = formatTime(audio.duration);
});

// Cambiar posición del audio al hacer clic en la barra de progreso
progressContainer.addEventListener("click", (e) => {
  const clickX = e.offsetX;
  const width = progressContainer.offsetWidth;
  const newTime = (clickX / width) * audio.duration;
  audio.currentTime = newTime;
});

// Formatear tiempo (segundos a minutos:segundos)
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header");
  const menuToggle = document.querySelector(".menu-toggle");
  const menuList = header.querySelector(".menu-list");

  function checkOverflow() {
    // Verifica si el contenido del <ul> se desborda
    const isOverflowing = menuList.scrollWidth > header.offsetWidth;

    if (isOverflowing) {
      menuList.classList.add("deplegable");
      menuToggle.style.display = "block";
    } else {
      menuList.classList.remove("deplegable");
      menuToggle.style.display = "none";
    }
  }

  // Alternar el menú desplegable al hacer clic en el botón
  menuToggle.addEventListener("click", function () {
    menuList.classList.toggle("show");
  });

  // Revisa el desbordamiento al cargar y redimensionar
  checkOverflow();
  window.addEventListener("resize", checkOverflow);
});

// código para forzar que primero cargue el contenido el HTML y luego sí la función en JS. Esto se puede evitar poniendo defer en la etiqueta script en HTML.
//   document.addEventListener('DOMContentLoaded', function() {
//     var audio2 = document.getElementById('audio2');
//     var playPauseBtn = document.getElementById('playPauseBtn');

//     playPauseBtn.addEventListener('click', function() {
//       if (audio2.paused) {
//         audio2.play();
//         playPauseBtn.textContent = 'Pausar';
//       } else {
//         audio2.pause();
//         playPauseBtn.textContent = 'Reproducir';
//       }
//     });
//   });
