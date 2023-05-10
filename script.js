let botonAbrirVentana1 = document.getElementById("boton-abrir-ventana-1");
let botonCerrarVentana1 = document.getElementById("boton-cerrar-ventana-1");

let ventana = document.getElementById("ventana-emergente-x");


botonAbrirVentana1.onclick = function(){
  ventana.style.display = "block";
}

botonCerrarVentana1.onclick = function(){
  ventana.style.display = "none";
}

