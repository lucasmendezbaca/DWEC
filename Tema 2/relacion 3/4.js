function formatear(cad_arg) {
    let nueva_cadena = cad_arg.split(" ").join("");
    let consonantes = "";
    let vocales = "";
    for(letra of nueva_cadena) {
        if ("AaEeIiOuUu".includes(letra)) {
            vocales += letra;
        } else{
            consonantes += letra;
        }
    }

    let cadena_final = consonantes + vocales;
    return cadena_final;
}

document.write(formatear("Cadena de texto"));
