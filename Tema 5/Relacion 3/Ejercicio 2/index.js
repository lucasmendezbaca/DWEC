const palabras = ["HOLA", "ADIOS", "PERRO", "GATO", "CASA", "COCHE", "MESA", "SILLA", "ORDENADOR", "LIBRO", "PAPEL", "LAPIZ", "BOLIGRAFO", "PIZARRA", "VENTANA", "PUERTA", "SUELO", "TECHO", "PARED", "CAMA", "SILLON", "SOFA", "ALFOMBRA", "LAMPARA", "MESA", "SILLA", "ORDENADOR", "LIBRO", "PAPEL", "LAPIZ", "BOLIGRAFO", "PIZARRA", "VENTANA", "PUERTA", "SUELO", "TECHO", "PARED", "CAMA", "SILLON", "SOFA", "ALFOMBRA", "LAMPARA", "MESA", "SILLA", "ORDENADOR", "LIBRO", "PAPEL", "LAPIZ", "BOLIGRAFO", "PIZARRA", "VENTANA", "PUERTA", "SUELO", "TECHO", "PARED", "CAMA", "SILLON", "SOFA", "ALFOMBRA", "LAMPARA", "MESA", "SILLA", "ORDENADOR", "LIBRO", "PAPEL", "LAPIZ", "BOLIGRAFO", "PIZARRA", "VENTANA", "PUERTA", "SUELO", "TECHO", "PARED", "CAMA", "SILLON", "SOFA", "ALFOMBRA", "LAMPARA", "MESA", "SILLA", "ORDENADOR", "LIBRO", "PAPEL", "LAPIZ", "BOLIGRAFO", "PIZARRA", "VENTANA", "PUERTA", "SUELO", "TECHO", "PARED", "CAMA", "SILLON", "SOFA", "ALFOMBRA", "LAMPARA", "MESA", "SILLA", "ORDENADOR", "LIBRO"];
var palabra = undefined;
var letrasPalabra = undefined;
var letrasAcertadas = 0;
var vidas = 10;

function generarPalabra() {
    return palabras[Math.floor(Math.random() * palabras.length)];
}

function resetGame() {
    vidas = 10;
    document.getElementById("vidas").innerText = vidas;
    document.getElementById("palabra").innerHTML = "";
    palabra = generarPalabra();
    letrasPalabra = palabra.length;
    letrasAcertadas = 0;
    mostrarPosicionesPalabra(palabra);
    const botones = document.querySelectorAll("button");
    botones.forEach(boton => {
        boton.disabled = false;
        boton.style.opacity = "1";
    });
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
    boton.addEventListener("click", restarVidas);
    boton.addEventListener("click", mostrarEnPalabra);
});

function restarVidas(e) {
    const letra = e.target.innerText;

    // numero de veces que aparece la letra en la palabra
    const numLetras = palabra.split(letra).length - 1;

    if(!palabra.includes(letra)){
        vidas--;
        console.log(letrasAcertadas);
    } else{
        letrasAcertadas += numLetras;
        console.log(letrasAcertadas);
        if(letrasAcertadas === palabra.length){
            endGame("Has ganado!");
        }
    }

    document.getElementById("vidas").innerText = vidas;
    if (vidas === 0) {
        endGame("GAME OVER");
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

function endGame(mensaje) {
    const gameOver = document.getElementById("game_over_container");
    const endMessage = document.getElementById("game_over");
    endMessage.innerHTML = mensaje;
    gameOver.style.display = "block";

    const html = document.getElementById("html");
    const volver = document.getElementById("volver_jugar");
    volver.addEventListener("click", () => {
        gameOver.style.display = "none";
        resetGame();
    });
}

// Ejecución del programa
resetGame();