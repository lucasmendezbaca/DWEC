const palabras = ["HOLA", "ADIOS", "PERRO", "GATO", "CASA", "COCHE", "MESA", "SILLA", "ORDENADOR", "LIBRO", "PAPEL", "LAPIZ", "BOLIGRAFO", "PIZARRA", "VENTANA", "PUERTA", "SUELO", "TECHO", "PARED", "CAMA", "SILLON", "SOFA", "ALFOMBRA", "LAMPARA", "MESA", "SILLA", "ORDENADOR", "LIBRO", "PAPEL", "LAPIZ", "BOLIGRAFO", "PIZARRA", "VENTANA", "PUERTA", "SUELO", "TECHO", "PARED", "CAMA", "SILLON", "SOFA", "ALFOMBRA", "LAMPARA", "MESA", "SILLA", "ORDENADOR", "LIBRO", "PAPEL", "LAPIZ", "BOLIGRAFO", "PIZARRA", "VENTANA", "PUERTA", "SUELO", "TECHO", "PARED", "CAMA", "SILLON", "SOFA", "ALFOMBRA", "LAMPARA", "MESA", "SILLA", "ORDENADOR", "LIBRO", "PAPEL", "LAPIZ", "BOLIGRAFO", "PIZARRA", "VENTANA", "PUERTA", "SUELO", "TECHO", "PARED", "CAMA", "SILLON", "SOFA", "ALFOMBRA", "LAMPARA", "MESA", "SILLA", "ORDENADOR", "LIBRO", "PAPEL", "LAPIZ", "BOLIGRAFO", "PIZARRA", "VENTANA", "PUERTA", "SUELO", "TECHO", "PARED", "CAMA", "SILLON", "SOFA", "ALFOMBRA", "LAMPARA", "MESA", "SILLA", "ORDENADOR", "LIBRO"];
const palabra = palabras[Math.floor(Math.random() * palabras.length)];

function resetGame() {
    mostrarPosicionesPalabra(palabra);
}

resetGame();

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
    boton.addEventListener("click", restarVidas);
    boton.addEventListener("click", mostrarEnPalabra);
});

var vidas = 10;
function restarVidas(e) {
    const letra = e.target.innerText;
    if(!palabra.includes(letra)){
        vidas--;
    }
    document.getElementById("vidas").innerText = vidas;
    if (vidas === 0) {
        gameOver();
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

function gameOver() {
    const gameOver = document.getElementById("game_over_container");
    gameOver.style.display = "block";

    const html = document.getElementById("html");
    const volver = document.getElementById("volver_jugar");
    volver.addEventListener("click", () => {
        gameOver.style.display = "none";
        resetGame();
    });
}