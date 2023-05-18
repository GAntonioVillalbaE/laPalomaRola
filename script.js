let botonAbrirVentana1 = document.getElementById("boton-abrir-ventana-1");
let botonCerrarVentana1 = document.getElementById("boton-cerrar-ventana-1");

let ventana = document.getElementById("ventana-emergente-x");

try {
  botonAbrirVentana1.onclick = function () {
    ventana.style.display = "block";
  };

  botonCerrarVentana1.onclick = function () {
    ventana.style.display = "none";
  };
} catch (e) {}

try {
  let zonaclickeable1 = document.getElementById("zona-clickeable-1");

  zonaclickeable1.onclick = function () {
    window.location.href = "https://es.wikipedia.org/wiki/Ojo";
  };

  let zonaclickeable2 = document.getElementById("zona-clickeable-2");

  zonaclickeable2.onclick = function () {
    window.location.href = "https://es.wikipedia.org/wiki/Nariz";
  };
} catch (e) {}

/*  audio */
let sonido = document.getElementById("sonido-automatico");

try {
  document.onmousemove = function () {
    console.log("se movio el mouse");
    sonido.play();
  };
} catch (e) {}
