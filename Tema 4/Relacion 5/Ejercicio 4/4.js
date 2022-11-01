function validarNombre(cadena) {
    var patron = /^[A-ZÁÉÍÓÚ][a-záéíóú]+(\s[A-ZÁÉÍÓÚ][a-záéíóú]+)*$/;
    return patron.test(cadena);
}

function validarTelefonoMovil(cadena) {
    var patron = /^6[0-9]{8}$/;
    return patron.test(cadena);
}

function validarEmail(cadena) {
    var patron = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return patron.test(cadena);
}

function validarContrasena(cadena) {
    var patron = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    return patron.test(cadena);
}

function validarConfirmarContrasena(cadena) {
    var patron = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    return patron.test(cadena) && constrasena.value === cadena;
}

function validarTerminos(elemento) {
    return elemento.checked;
}

const nombre = document.getElementById('first_name');
const apellidos = document.getElementById('last_name')
const telefono = document.getElementById('phone');
const email = document.getElementById('email');
const constrasena = document.getElementById('password');
const confirmarContrasena = document.getElementById('confirm_password');
const terminos = document.getElementById('terms');

function validacionCampo(validador, campo) {
    if (validador(campo.value)) {
        campo.style.border = '1px solid green';
        campo.style.backgroundColor = '#BDECB6';
    } else {
        campo.style.border = '1px solid red';
        campo.style.backgroundColor = '#FF6961';
    }
}

nombre.addEventListener('blur', function() {
    validacionCampo(validarNombre, nombre);
});

apellidos.addEventListener('blur', function() {
    validacionCampo(validarNombre, apellidos);
});

telefono.addEventListener('blur', function() {
    validacionCampo(validarTelefonoMovil, telefono);
});

email.addEventListener('blur', function() {
    validacionCampo(validarEmail, email);
});

constrasena.addEventListener('blur', function() {
    validacionCampo(validarContrasena, constrasena);
});

confirmarContrasena.addEventListener('blur', function() {
    validacionCampo(validarConfirmarContrasena, confirmarContrasena);
});

terminos.addEventListener('blur', function() {
    validacionCampo(validarTerminos, terminos);
});

function validarFormulario(e) {
    if (validarNombre(nombre.value) && validarNombre(apellidos.value) && validarTelefonoMovil(telefono.value) && validarEmail(email.value) && validarContrasena(constrasena.value) && validarConfirmarContrasena(constrasena.value, confirmarContrasena.value) && validarTerminos(terminos)) {
        alert('Formulario enviado correctamente');
    } else {
        e.preventDefault();

        validacionCampo(validarNombre, nombre);
        validacionCampo(validarNombre, apellidos);
        validacionCampo(validarTelefonoMovil, telefono);
        validacionCampo(validarEmail, email);
        validacionCampo(validarContrasena, constrasena);
        validacionCampo(validarConfirmarContrasena, confirmarContrasena);
        validacionCampo(validarTerminos, terminos);

        const error = document.getElementById('error');
        error.innerHTML = 'Complete el formulario correctamente';
        error.style.color = '#FF6961';
    }
}

document.getElementById('form').addEventListener('submit', validarFormulario);
