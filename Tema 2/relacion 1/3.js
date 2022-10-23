let fecha = new Date();
let contador = 60;

function reloj() {
    document.write(contador + "<br>")
    contador --;
    if (contador >= 0) {
        setTimeout(reloj, 1000);
    }
}

setTimeout(reloj, 1000);


// Con interval
// function reloj() {
//     hora = new Date();
//     document.write(hora.getSeconds() + "<br>");
// }

// setInterval(reloj, 1000);