function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

function crearDivs(numeroDivs) {
    for(let i = 0; i < numeroDivs; i++) {
        let div = document.createElement("div");
        div.className = "hijo";
        div.addEventListener("click", colorCorrecto);
        const container = document.getElementById("container");
        container.appendChild(div);
    }

    colorearDivs(numeroDivs);
}

var adivinarColor = undefined;
function colorearDivs(numeroDivs) {
    let iteracionAleatoria = random(numeroDivs - 1);
    const divs = document.getElementsByClassName("hijo");
    let contadorIteraciones = 0;
    for(let div of divs) {
        let rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        div.style.backgroundColor = rndCol;
        if(contadorIteraciones == iteracionAleatoria) {
            adivinarColor = rndCol;
        }

        contadorIteraciones++;
    }
    document.getElementsByTagName("h1")[0].innerHTML = adivinarColor;

}

function colorCorrecto(e) {
    let elementStyle = window.getComputedStyle(e.target);
    let elementColor = elementStyle.getPropertyValue('background-color');

    if(elementColor == adivinarColor) {
        // evitar que se pueda seguir jugando
        const divs = document.getElementsByClassName("hijo");
        for(let div of divs) {
            div.removeEventListener("click", colorCorrecto);
        }

        document.getElementsByTagName("h2")[0].innerHTML = "¡Has Ganado!";
    }else {
        document.getElementsByTagName("h2")[0].innerHTML = "";
        e.target.style.backgroundColor = 'transparent';
    }
}

function eliminarDivs() {
    const divs = document.getElementsByClassName("hijo");
    while(divs.length > 0) {
        divs[0].remove();
    }
}

function reiniciar(numeroDivs) {
    eliminarDivs();
    crearDivs(numeroDivs);
    document.getElementsByTagName("h2")[0].innerHTML = "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Ejecución del programa
crearDivs(6);
setCookie("dificultad", "hard", 1);

const newColors = document.getElementById("new_colors");
newColors.addEventListener("click", () => {
    if(getCookie("dificultad") == "easy") {
        reiniciar(3);
    }else {
        reiniciar(6);
    }
});

const hard = document.getElementById("hard");
hard.addEventListener("click", () => {
    reiniciar(6);
    setCookie("dificultad", "hard", 1);
});

const easy = document.getElementById("easy");
easy.addEventListener("click", () => {
    reiniciar(3);
    setCookie("dificultad", "easy", 1);
});
