function validarNombre(cadena) {
    var patron = /^[A-ZÁÉÍÓÚ][a-záéíóú]+(\s[A-ZÁÉÍÓÚ][a-záéíóú]+)*$/;
    return patron.test(cadena);
}

function validarTelefonoMovil(cadena) {
    var patron = /^6[0-9]{8}$/;
    return patron.test(cadena);
}

function validarDNI(cadena) {
    var patron = /^\d{8}[a-zA-Z]$/;
    return patron.test(cadena);
}

function validarNombreUsuario(cadena) {
    var patron = /^[a-zA-Z0-9]{8,}$/;
    return patron.test(cadena);
}

const nombre = document.getElementById('nombre');
const apellidos = document.getElementById('apellidos')
const telefono = document.getElementById('telefono');
const dni = document.getElementById('dni');
const nombreUsuario = document.getElementById('nombre_usuario');

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

dni.addEventListener('blur', function() {
    validacionCampo(validarDNI, dni);
});

nombreUsuario.addEventListener('blur', function() {
    validacionCampo(validarNombreUsuario, nombreUsuario);
});


function validarFormulario(e) {
    if (validarNombre(nombre.value) && validarNombre(apellidos.value) && validarTelefonoMovil(telefono.value) && validarDNI(dni.value) && validarNombreUsuario(nombreUsuario.value)) {
        alert('Formulario enviado correctamente');
    } else {
        e.preventDefault();

        validacionCampo(validarNombre, nombre);
        validacionCampo(validarNombre, apellidos);
        validacionCampo(validarTelefonoMovil, telefono);
        validacionCampo(validarDNI, dni);
        validacionCampo(validarNombreUsuario, nombreUsuario);

        const error = document.getElementById('error');
        error.innerHTML = 'Complete el formulario correctamente';
        error.style.color = '#FF6961';
    }
}

document.getElementById('form').addEventListener('submit', validarFormulario);
