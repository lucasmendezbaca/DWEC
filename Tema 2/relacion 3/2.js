function mostrarInformacion(cad_arg) {
    if (cad_arg === cad_arg.toUpperCase()) {
        document.write("Solo tiene mayusculas");
    } if (cad_arg === cad_arg.toLowerCase()) {
        document.write("Solo tiene minusculas");
    } else {
        document.write("Tiene mayusculas y minusculas");
    }
}

mostrarInformacion("MAYUSCULAS");