alto = parseInt(prompt("Alto en px"));
ancho = parseInt(prompt("Ancho en px"));


document.write(`<table bgcolor="black">`)

function printBlackSquares(contador) {
    if (contador % 2 != 0) {
        document.write(`<td bgcolor="black" width="${ancho}">`)
    }else {
        document.write(`<td width="${ancho}">`)
    }
}

function printWhiteSquares(contador) {
    if (contador % 2 == 0) {
        document.write(`<td bgcolor="black" width="${ancho}">`)
    }else {
        document.write(`<td width="${ancho}">`)
    }
}

// Bloque del programa principal
for (let j=0; j<=8; j++) {
document.write(`<tr bgcolor="white" height="${alto}">`)

    for (let i=0; i<=8; i++) {
        if (j % 2 != 0) {
            printBlackSquares(i);
        }
        if (j % 2 == 0) {
            printWhiteSquares(i);
        }
    }

document.write("</tr>")
}


document.write("</table>")