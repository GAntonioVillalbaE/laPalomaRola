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

// Para controlar reproducción de audio a través de un botón

function playSound() {
  var audio = document.getElementById("audio");
  audio.play(); // pause()
}




/* OTRA FORMA DE SINTAXIS DE POP UP */


// Función para abrir el pop-up
function abrirPopup() {
  document.getElementById("miPopup").style.display = "block";
}

// Función para cerrar el pop-up
function cerrarPopup() {
  document.getElementById("miPopup").style.display = "none";
}

// Asignar evento click al botón para abrir el pop-up. Esto es otra forma diferente de hacerlo: si no queremos usar dentro de nuestra etiqueta de botón el método onclick lo hacemos directamente en la hoja Javascript:
document.getElementById("abrirPopup").addEventListener("click", abrirPopup);