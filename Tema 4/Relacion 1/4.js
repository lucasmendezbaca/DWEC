const body = document.getElementById("body");
body.onload = main;

function main() {
    canvas();
}

let contadorTd = 0;

function canvas() {
    document.write("<table cellspacing='0' cellpadding='0'>");
    for(let j=0; j<=100; j++) {
        document.write('<tr>');
        for(let i=0; i<=100; i++) {
            document.write('<td class="celda" width="5px" height="5px>"');
            document.write('</td>');
            document.getElementsByTagName("td")[contadorTd].onmouseover = pintarCeldas;
            contadorTd++;
        }
        document.write('<tr>');
    }
    document.write("</table>");

    document.write("<button>Borrar</button>");
    document.getElementsByTagName("button")[0].click = borrar;
}

function pintarCeldas(e) {
    if(e.ctrlKey) {
        e.target.style.backgroundColor = "red";
    }else if(e.shiftKey){
        e.target.style.backgroundColor = "blue";
    }else if(e.altKey) {
        e.target.style.backgroundColor = "white";
    }
}

function borrar() {
    let celdas = document.getElementsByClassName("celda");
    for(let celda of celdas) {
        celda.style.backgroundColor = 'white';
    }
    // celdas.map(function(celda) {celda.style.backgroundColor = 'white';}); 
}
