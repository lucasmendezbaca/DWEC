for (let i=0; i<=10; i++) {
    document.write("<h2>Tabla del " + i + "<br></h2>")
    for (let j=0; j<=10; j++) {
        document.write(i + "x" + j + "=" + i*j + "<br>")
    }
    document.write("<br>")
}