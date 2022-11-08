var segundos = 0;
var minutos = 0;
var intervalo;
var minutosElemento = document.getElementById("minutos");
var segundosElemento = document.getElementById("segundos");
var cronometro = document.getElementById('cronometro');
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

start.addEventListener('click', function() {
    if(minutos < 10) {
        minutos = '0' + minutos;
    }
    intervalo = setInterval(function() {
    segundos++;
    if(segundos == 60) {
        segundos = 0;
        minutos++;
    }

    if(segundos < 10) {
        segundos = '0' + segundos;
    }

    cronometro.innerHTML = minutos + ':' + segundos;
    }, 1000);
});

stop.addEventListener('click', function() {
    clearInterval(intervalo);
});

reset.addEventListener('click', function() {
    clearInterval(intervalo);
    segundos = 0;
    minutos = 0;

    if(segundos < 10) {
        segundos = '0' + segundos;
    }

    if(minutos < 10) {
        minutos = '0' + minutos;
    }
    cronometro.innerHTML = minutos + ':' + segundos;
});
