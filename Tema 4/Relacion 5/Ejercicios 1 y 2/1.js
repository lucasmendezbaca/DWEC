function validarMayuscula(cadena) {
    const regex = new RegExp('[A-Z]');
    return regex.test(cadena);
}

function validarCaracteresEspeciales(cadena) {
    const regex = new RegExp('[\!\@\#\$\%\^\&]');
    return regex.test(cadena);
}

function validarCorreoElectronico(cadena) {
    const regex = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$");
    return regex.test(cadena);
}

function validarTargetaCredito(cadena) {
    const regex = new RegExp("^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$");
    return regex.test(cadena);
}

function validarLongitud(cadena) {
    return cadena.length >= 8;
}

function validarDigito(cadena) {
    const regex = new RegExp('[0-9]');
    return regex.test(cadena);
}

console.log(validarDigito("lu8cas"));