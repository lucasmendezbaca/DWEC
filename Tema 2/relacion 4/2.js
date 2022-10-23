document.write("<table border='1'")
for(let propiedad in screen) {
    document.write("<tr>")
    document.write(`<td>${propiedad}</td>`)
    document.write(`<td>${screen[propiedad]}</td>`)
    document.write("</tr>")
}
document.write("</table>")