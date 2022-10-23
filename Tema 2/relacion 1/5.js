
function reloj() {
    let fecha = new Date();
    document.write(fecha.getHours() + ":");
    document.write(fecha.getMinutes() + ":");
    document.write(fecha.getSeconds() + "<br>");
    setTimeout(reloj, 1000);
}

setTimeout(reloj, 1000);