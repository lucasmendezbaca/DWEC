// a
function invertirCadena(cad_arg) {
    return cad_arg.split("").reverse().join("");
}
document.write(invertirCadena("hola") + "<br>");

//b
function invertirCadena(cad_arg) {
    return cad_arg.split(" ").reverse().join(" ");
}
document.write(invertirCadena("hola lucas mendez") + "<br>");

//c
function encuentraPalabraMasLarga(cad_arg) {
    palabras = cad_arg.split(" ");

    let max_length = 0;
    for(palabra of palabras) {
        if (palabra.length > max_length) {
            max_length = palabra.length;
        }
    }

    return max_length;
}

document.write("La longitud de la plabra más larga es " + encuentraPalabraMasLarga("La plabra mas larga") + " caracteres");

//d
function filtraPalabrasMasLargas(cad_arg, i) {
    palabras = cad_arg.split(" ");

    contador = 0;
    for(palabra of palabras) {
        if (palabra.length > i) {
            contador++;
        }
    }

    return contador;
}

document.write("Hay " + filtraPalabrasMasLargas("filtrar palabras mas largas", 4) + " palabras más largas<br>");

//e
function cadenaBienFormada(cad_arg) {
    let minusculas = cad_arg.slice(1).toLowerCase();
    let mayuscula = cad_arg[0].toUpperCase();

    let cad_final = mayuscula + minusculas;

    return cad_final;
}

document.write(cadenaBienFormada("cadena Bien ForMADA"));
