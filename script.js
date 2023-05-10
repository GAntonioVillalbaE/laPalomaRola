let botonAbrir = document.getElementsByIdName("boton-abrir-ventana");
let botonCerrar = document.getElementByIdName("boton-cerrar-ventana");

let ventana1 = document.getElementById("ventana-emergente-1");


console.log(botonAbrir.length);

botonAbrir.onclick = function(){
  ventana1.style.display = "block";
}