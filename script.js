let ventana = document.getElementsByClassName("ventana-emergente");

let botonAbrirVentana = document.getElementById("boton-abrir");

let botonCerrarVentana = document.getElementById("boton-cerrar");

botonAbrirVentana.onclick = function () {
  //console.log("clic en el boton abrir");
  // ventana[0].style.backgroundColor = "red"; /* css: background-color */
  ventana[0].style.display =
    "block"; /*block efecto de ocupar espacio a lo ancho de la pantalla*/
};

/* sugerencia: escribir en camelCase las variables en JS */

botonCerrarVentana.onclick = function () {
  ventana[0].style.display = "none";
};

// Para controlar audio a través de un botón

// var audio = document.getElementById("Bowie-cover");

// var botonPlay = document.getElementById("boton-play");

// botonPlay.onclick  = function () {
//   audio.play();
// }

// otra forma

function playSound() {
  var audio = document.getElementById("Bowie-cover");

  audio.play();
}
