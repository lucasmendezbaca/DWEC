const body = document.getElementById("body");
body.onload = main;

function main() {
    canvas();
}

function canvas() {
    document.write("<table cellspacing='0' cellpadding='0'>");
    for(let j=0; j<=100; j++) {
        document.write('<tr>');
        for(let i=0; i<=100; i++) {
            document.write('<td onmouseover="pintarCeldas(this)" width="5px" height="5px>"');
            document.write('</td>');
        }
        document.write('<tr>');
    }
    document.write("</table>");
}

function pintarCeldas(e) {
    e.style.backgroundColor = "red";
}