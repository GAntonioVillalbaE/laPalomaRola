let ventana = document.getElementsByClassName("ventana-emergente");

let botonAbrirVentana = document.getElementById("boton-abrir");

let botonCerrarVentana = document.getElementById("boton-cerrar");

botonAbrirVentana.onclick = function () {
  //console.log("clic en el boton abrir");
  ventana[0].style.backgroundColor = "red"; /* css: background-color */
};

/* camelCase */
