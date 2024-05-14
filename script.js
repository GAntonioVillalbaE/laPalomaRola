// Funciones para Pop Ups

let ventana = document.getElementsByClassName("ventana-emergente");

let botonAbrirVentana = document.getElementById("boton-abrir");

let botonCerrarVentana = document.getElementById("boton-cerrar");

botonAbrirVentana.onclick = function () {
  // console.log("click para abrir pop up"); /* usar consola para imprimrir eventos */
  // ventana[0].style.backgroundColor = "red"; /* css: background-color */
  ventana[0].style.display = /* [0] es el primer elemento que encuentra de esa clase "ventana-emergente"*/
    "block"; /*block efecto de ocupar espacio a lo ancho de la pantalla*/
};

/* sugerencia: escribir en camelCase las variables en JS */

botonCerrarVentana.onclick = function () {
    // console.log("se cerró el pop up");
  ventana[0].style.display = "none"; /* No muestra la ventana */
};

// Para controlar reproducción de audio a través de un botón. Otra forma de escuchar eventos. 

function playSound() {
  var audio = document.getElementById("audio");
  audio.play(); // pause()
}



//OTRAS FORMAS DE SINTAXIS PARA JAVASCRIPT-HTML


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