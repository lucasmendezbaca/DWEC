const imagenes = ['img/1.png', 'img/2.png', 'img/3.png', 'img/4.png', 'img/5.png'];
const cards = document.querySelectorAll('.card');
const reset = document.getElementById('reset');

var segundos = 0;
var minutos = 0;
var intervalo;
var minutosElemento = document.getElementById("minutos");
var segundosElemento = document.getElementById("segundos");

function iniciarCronometro() {
    intervalo = setInterval(function() {
        segundos++;
        if(segundos == 60) {
            segundos = 0;
            minutos++;
        }

        if(minutos < 10) {
            minutosElemento.innerHTML = "0" + minutos;
        } else {
            minutosElemento.innerHTML = minutos;
        }

        if(segundos < 10) {
            segundosElemento.innerHTML = "0" + segundos;
        } else {
            segundosElemento.innerHTML = segundos;
        }

    }, 1000);

    cards.forEach((card) => {
        card.removeEventListener('click', iniciarCronometro);
    });
}

function avilitarClicks() {
    cards.forEach((card) => {
        card.addEventListener('click', voltearCarta);
        card.addEventListener('click', comprobarSiSonIguales);
    });
}

function desavilitarClicks() {
    cards.forEach((card) => {
        card.removeEventListener('click', voltearCarta);
        card.removeEventListener('click', comprobarSiSonIguales);
    });
}

function voltearCarta() {
    this.style.backgroundImage = `url(${this.dataset.imagen})`;
    this.classList.add('volteada');
}

function comprobarSiSonIguales() {
    const cardsVolteadas = document.getElementsByClassName('volteada');

    if (cardsVolteadas.length === 2) {
        if (cardsVolteadas[0].dataset.imagen === cardsVolteadas[1].dataset.imagen) {
            cardsVolteadas[0].classList.add('acertada');
            cardsVolteadas[1].classList.add('acertada');
            cardsVolteadas[0].classList.remove('volteada');
            cardsVolteadas[0].classList.remove('volteada');
            
            cardsAcertadas = document.getElementsByClassName('acertada');
            if (cardsAcertadas.length === 10) {
                clearInterval(intervalo);
            }
        } else {
            desavilitarClicks();

            setTimeout(() => {
                cardsVolteadas[0].style.backgroundImage = 'url(img/normal.png)';
                cardsVolteadas[1].style.backgroundImage = 'url(img/normal.png)';
                cardsVolteadas[0].classList.remove('volteada');
                cardsVolteadas[0].classList.remove('volteada');
                
                avilitarClicks();
            }, 1000);
        }
    }
}

function asignarImagenes() {
    const imagenesDuplicadas = [...imagenes, ...imagenes];
    const imagenesMezcladas = mezclar(imagenesDuplicadas);

    cards.forEach((card, index) => {
        const imagen = imagenesMezcladas[index];
        card.dataset.imagen = imagen;
    });

}

function mezclar(array) {
    const arrayCopia = [...array];
    const arrayMezclado = [];

    while (arrayCopia.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * arrayCopia.length);
        const elemento = arrayCopia[indiceAleatorio];

        arrayCopia.splice(indiceAleatorio, 1);
        arrayMezclado.push(elemento);
    }

    return arrayMezclado;
}

function reiniciarContador() {
    clearInterval(intervalo);
    segundos = 0;
    minutos = 0;

    segundosElemento.innerHTML = '0' + segundos;
    minutosElemento.innerHTML = '0' + minutos;
}

function resetGame() {
    cards.forEach((card) => {
        card.style.backgroundImage = 'url(img/normal.png)';
        card.classList.remove('volteada');
        card.classList.remove('acertada');
    });

    reiniciarContador();
    iniciarJuego();
}

function iniciarJuego() {
    cards.forEach((card) => {
        card.addEventListener('click', iniciarCronometro);
    });
    
    asignarImagenes();
    avilitarClicks();
}

iniciarJuego();

reset.addEventListener('click', resetGame);