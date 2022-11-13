var segundos = 0;
var minutos = 0;
var intervalo;
var minutosElemento = document.getElementById("minutos");
var segundosElemento = document.getElementById("segundos");
var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

start.addEventListener('click', function() {
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
});

stop.addEventListener('click', function() {
    clearInterval(intervalo);
});

reset.addEventListener('click', function() {
    clearInterval(intervalo);
    segundos = 0;
    minutos = 0;

    segundosElemento.innerHTML = '0' + segundos;
    minutosElemento.innerHTML = '0' + minutos;
});
