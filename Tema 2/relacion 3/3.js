function apariciones(cadena, subcadena) {
    let nueva_cadena = cadena.split(" ");
    contador = 0;
    for(palabra of nueva_cadena) {
        if (palabra == subcadena) {
            contador++;
        }
    }

    return contador;
}

document.write(apariciones("sol sol sol palabra sol", "sol"));