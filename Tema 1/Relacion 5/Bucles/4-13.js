numColums = parseInt(prompt("Número de columnas"));
alto = parseInt(prompt("Alto en px"));
ancho = parseInt(prompt("Ancho en px"));


document.write(`<table bgcolor="black">`)

document.write(`<tr bgcolor="white" height="${alto}">`)

contador = 0;

while (contador <= numColums) {
    document.write(`<td width="${ancho}">`)
    document.write("</td>")
    contador++;
}

document.write("</tr>")

document.write("</table>")