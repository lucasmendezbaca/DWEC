// mostrar el numero de enlaces de la pagina
var enlaces = document.getElementsByTagName("a");
console.log("Hay " + enlaces.length + " enlaces en la página");

// mostrar la direccion del penultimo enlace
var penultimo = enlaces[enlaces.length - 2];
console.log("La dirección del penúltimo enlace es: " + penultimo.href);

// mostrar el numero de enlaces que apuntan a https://google.es
var contador = 0;
for (var i = 0; i < enlaces.length; i++) {
    if (enlaces[i].href == "https://www.google.es") {
        contador++;
    }
}

console.log("Hay " + contador + " enlaces que apuntan a https://www.google.es");

// mostrar el numero de enlaces del tercer parrafo
var parrafos = document.getElementsByTagName("p");
var tercerParrafo = parrafos[2];
var enlacesParrafo = tercerParrafo.getElementsByTagName("a");
console.log("Hay " + enlacesParrafo.length + " enlaces en el tercer párrafo");
