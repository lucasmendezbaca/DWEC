numColums = parseInt(prompt("Número de columnas"));
alto = parseInt(prompt("Alto en px"));
ancho = parseInt(prompt("Ancho en px"));


document.write(`<table bgcolor="black">`)

document.write(`<tr bgcolor="white" height="${alto}">`)

for (let i=0; i<= numColums; i++) {
    if (i % 2 == 0) {
        document.write(`<td bgcolor="black" width="${ancho}">`)
    }else {
        document.write(`<td width="${ancho}">`)
    }

    document.write("</td>")
}

document.write("</tr>")

document.write("</table>")