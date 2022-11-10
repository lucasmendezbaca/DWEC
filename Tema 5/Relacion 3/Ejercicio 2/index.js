const palabras = ["HOLA", "ADIOS", "PERRO", "GATO", "CASA", "COCHE", "MESA", "SILLA", "ORDENADOR", "LIBRO", "PAPEL", "LAPIZ", "BOLIGRAFO", "PIZARRA", "VENTANA", "PUERTA", "SUELO", "TECHO", "PARED", "CAMA", "SILLON", "SOFA", "ALFOMBRA", "LAMPARA", "MESA", "SILLA", "ORDENADOR", "LIBRO", "PAPEL", "LAPIZ", "BOLIGRAFO", "PIZARRA", "VENTANA", "PUERTA", "SUELO", "TECHO", "PARED", "CAMA", "SILLON", "SOFA", "ALFOMBRA", "LAMPARA", "MESA", "SILLA", "ORDENADOR", "LIBRO", "PAPEL", "LAPIZ", "BOLIGRAFO", "PIZARRA", "VENTANA", "PUERTA", "SUELO", "TECHO", "PARED", "CAMA", "SILLON", "SOFA", "ALFOMBRA", "LAMPARA", "MESA", "SILLA", "ORDENADOR", "LIBRO", "PAPEL", "LAPIZ", "BOLIGRAFO", "PIZARRA", "VENTANA", "PUERTA", "SUELO", "TECHO", "PARED", "CAMA", "SILLON", "SOFA", "ALFOMBRA", "LAMPARA", "MESA", "SILLA", "ORDENADOR", "LIBRO", "PAPEL", "LAPIZ", "BOLIGRAFO", "PIZARRA", "VENTANA", "PUERTA", "SUELO", "TECHO", "PARED", "CAMA", "SILLON", "SOFA", "ALFOMBRA", "LAMPARA", "MESA", "SILLA", "ORDENADOR", "LIBRO"];

window.onload = function () {
    const palabra = palabras[Math.floor(Math.random() * palabras.length)];
    mostrarPosicionesPalabra(palabra);
}

function mostrarPosicionesPalabra(palabra) {
    for (let i = 0; i < palabra.length; i++) {
        const span = document.createElement("span");
        span.className = "letra_palabra";
        span.innerText = palabra[i];
        document.getElementById("palabra").appendChild(span);
    }
}

const botones = document.querySelectorAll("button");
botones.forEach(boton => {
    boton.addEventListener("click", desabilitarBoton);
    boton.addEventListener("click", contarIntento);
    boton.addEventListener("click", mostrarEnPalabra);
});

var intentos = 10;
function contarIntento() {
    intentos--;
    document.getElementById("intentos").innerText = intentos;
    if (intentos === 0) {
        // alert("Has perdido");
    }
}

function desabilitarBoton(e) {
    e.target.disabled = true;
    e.target.style.opacity = "0.5";
}

function mostrarEnPalabra(e) {
    const letra = e.target.innerText;
    const spans = document.querySelectorAll("span");
    spans.forEach(span => {
        if (span.innerText === letra) {
            span.style.color = "white";
        }
    });
}




