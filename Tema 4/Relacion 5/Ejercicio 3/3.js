function validarMayuscula(cadena) {
    const regex = new RegExp('[A-Z]');
    return regex.test(cadena);
}

function validarMinuscula(cadena) {
    const regex = new RegExp('[a-z]');
    return regex.test(cadena);
}


function validarLongitud(cadena) {
    return cadena.length >= 6;
}

// function que valida un input de tipo texto cada vez que se escribe en el
function validarInput(input) {
    const upperCase = document.getElementById("upperCase");
    const lowerCase = document.getElementById("lowerCase");
    const characters = document.getElementById("6_characters");

    if (validarMayuscula(input.value)) {
        upperCase.style.textDecoration = "line-through";
    }else {
        upperCase.style.textDecoration = "none";
    }

    if (validarMinuscula(input.value)) {
        lowerCase.style.textDecoration = "line-through";
    }else {
        lowerCase.style.textDecoration = "none";
    }

    if (validarLongitud(input.value)) {
        characters.style.textDecoration = "line-through";
    }else {
        characters.style.textDecoration = "none";
    }
}

// llamar a la funcion validar input cada vez que se escribe en el input
const input = document.getElementById("usuario");
input.addEventListener("keyup", () => validarInput(input));
