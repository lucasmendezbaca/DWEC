document.write("<table border='1'")
for(let propiedad in navigator) {
    document.write("<tr>")
    document.write(`<td>${propiedad}</td>`)
    document.write(`<td>${navigator[propiedad]}</td>`)
    document.write("</tr>")
}
document.write("</table>")
