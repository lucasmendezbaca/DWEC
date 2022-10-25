function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

var adivinarColor = undefined;
let iteracionAleatoria = random(5);
function colorearDivs() {
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

}

colorearDivs();

document.getElementsByTagName("h1")[0].innerHTML = adivinarColor;

for(let i=0; i<=6; i++) {
    document.getElementsByClassName("hijo")[i].onclick = colorCorrecto;
}


function colorCorrecto(e) {
    let elementStyle = window.getComputedStyle(e.target);
    let elementColor = elementStyle.getPropertyValue('background-color');

    if(elementColor == adivinarColor) {
        document.getElementsByTagName("h2")[0].innerHTML = "Has ganado";
        colorearDivs();
    }else {
        document.getElementsByTagName("h2")[0].innerHTML = "";
        e.target.style.backgroundColor = 'white';
        numeroIntentos++;
    }
}