var posX = 0;
var direccionX = 1;
var direccionY = 1;

var pelota = document.getElementById("pelota");
var pala1 = document.getElementById("pala1");
var pala2 = document.getElementById("pala2");

var puntosJugador1 = 0;
var puntosJugador2 = 0;
const puntuacionJugador1 = document.getElementById("puntuacionJugador1");
const puntuacionJugador2 = document.getElementById("puntuacionJugador2");

console.log(pelota.getAttribute("cy"));

pelota.setAttribute("cx", 10);

function jugar() {
    let pelotaY = parseInt(pelota.getAttribute("cy"));
    let pala1Y = parseInt(pala1.getAttribute("y"));
    let pala2Y = parseInt(pala2.getAttribute("y"));

    if(posX > 800) {
        puntosJugador1++;
        reiniciar();
    }

    if(posX < 0) {
        puntosJugador2++;
        reiniciar();
    }

    if(posX > 786) {
        if(pelotaY > pala2Y && pelotaY < pala2Y + 80) {
            direccionX = -1;
        }
    }

    if(posX < 30 ) {
        if(pelotaY > pala1Y && pelotaY < pala1Y + 80) {
            direccionX = 1;
        }
    }

    if(pelotaY > 390 || pelotaY < 10) {
        direccionY = -direccionY;
    }

    posX += direccionX*10;
    pelotaY += direccionY*10;

    pelota.setAttribute("cx", posX);
    pelota.setAttribute("cy", pelotaY);
}

document.addEventListener("keydown", (e) => {
    if(e.key == "ArrowUp") {
        pala1.setAttribute("y", parseInt(pala1.getAttribute("y")) - 10);
    } else if(e.key == "ArrowDown") {
        pala1.setAttribute("y", parseInt(pala1.getAttribute("y")) + 10);
    }
});

document.addEventListener("keydown", (e) => {
    if(e.key == "w") {
        pala2.setAttribute("y", parseInt(pala2.getAttribute("y")) - 10);
    } else if(e.key == "s") {
        pala2.setAttribute("y", parseInt(pala2.getAttribute("y")) + 10);
    }
});

function reiniciar() {
    posX = 0;
    direccionX = 1;
    direccionY = 1;

    pelota.setAttribute("cx", 50);
    pelota.setAttribute("cy", 50);

    pala1.setAttribute("y", 0);
    pala2.setAttribute("y", 200);

    pala1.setAttribute("x", 0);
    pala2.setAttribute("x", 786);

}

setInterval(() => {
    jugar();
}, 50);