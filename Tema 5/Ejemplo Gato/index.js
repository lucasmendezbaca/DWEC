const gato = document.getElementById("gato");
const clics = document.getElementById("clicks");

const otroGato = document.getElementById("otro_gato");
const clics_otroGato = document.getElementById("clicks_otroGato");

let clics_gato = 0;
let clics_otro_gato = 0;

function clickGato() {
    clics_gato++;
    clics.innerHTML = 'Gato: ' + clics_gato;
}

function clickOtroGato() {
    clics_otro_gato++;
    clics_otroGato.innerHTML = 'Otro Gato: ' + clics_otro_gato;
}

gato.addEventListener("click", clickGato);
otroGato.addEventListener("click", clickOtroGato);
