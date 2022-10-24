document.addEventListener('click', canvas);

function canvas() {
    document.write("<table>");
    for(let j=0; j<=100; j++) {
        document.write('<tr>');
        for(let i=0; i<=100; i++) {
            document.write('<td width=5px; height=5px>');
            document.write('</td>');
        }
        document.write('<tr>');
    }
    document.write("</table>");
}