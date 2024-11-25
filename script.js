const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.querySelector('.progress-container');
const currentTimeElement = document.getElementById('current-time');
const durationElement = document.getElementById('duration');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');

// Reproducir o pausar
playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playIcon.classList.add('hidden'); // Oculta el ícono de play
    pauseIcon.classList.remove('hidden'); // Muestra el ícono de pause
  } else {
    audio.pause();
    playIcon.classList.remove('hidden'); // Muestra el ícono de play
    pauseIcon.classList.add('hidden'); // Oculta el ícono de pause
  }
});

// Actualizar la barra de progreso
audio.addEventListener('timeupdate', () => {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progressPercent}%`;
  currentTimeElement.textContent = formatTime(audio.currentTime);
});

// Mostrar duración del audio
audio.addEventListener('loadeddata', () => {
  durationElement.textContent = formatTime(audio.duration);
});

// Cambiar posición del audio al hacer clic en la barra de progreso
progressContainer.addEventListener('click', (e) => {
  const clickX = e.offsetX;
  const width = progressContainer.offsetWidth;
  const newTime = (clickX / width) * audio.duration;
  audio.currentTime = newTime;
});

// Formatear tiempo (segundos a minutos:segundos)
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}


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

// Para forzar el autoplay, apenas se cargue la página. Con onload en el <body> del HTML
// function playSound2() {
//   var audio = document.getElementById("audio");
//   audio.play(); // pause()
// }

//OTRAS FORMAS DE SINTAXIS DE POP-UP PARA JAVASCRIPT-HTML

// DESDE HTML con onclick = "myFunction()", etc

//DIRECTA

// document.getElementById("ventana-emergente").style.display = "block";

// Escuchando eventos - HTML DOM - desde JS (sin atributos en HTML):

// document.getElementById("ventana-emergente").addEventListener("click", botonAbrirVentana); /* Aquí es click en vez de onclick*/

// function botonAbrirVentana() {

//   ventana[0].style.display = "block";
// }

/* OTRA FORMA DE SINTAXIS DE POP UP */

// Función para abrir el pop-up
// function abrirPopup() {
//   document.getElementById("miPopup").style.display = "block";
// }

// Función para cerrar el pop-up
// function cerrarPopup() {
//   document.getElementById("miPopup").style.display = "none";
// }

// Asignar evento click al botón para abrir el pop-up. Esto es otra forma diferente de hacerlo: si no queremos usar dentro de nuestra etiqueta de botón el método onclick lo hacemos directamente en la hoja Javascript:
// document.getElementById("abrirPopup").addEventListener("click", abrirPopup);

/* OTRA FORMA ES ASIGNANDO EL ONCLICK DESDE EL BOTÓN y nombrando desde el botón la función */
