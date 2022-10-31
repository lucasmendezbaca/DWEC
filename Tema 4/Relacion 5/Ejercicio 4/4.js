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

function validarConfirmarContrasena(contrasena, cadena) {
    var patron = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;
    return patron.test(cadena) && contrasena === cadena;
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

// Nombre
function validacionNombre() {
    if (validarNombre(nombre.value)) {
        nombre.style.border = '1px solid green';
        nombre.style.backgroundColor = '#BDECB6';
    } else {
        nombre.style.border = '1px solid red';
        nombre.style.backgroundColor = '#FF6961';
    }
}

nombre.addEventListener('blur', function() {
    validacionNombre();
});

// Apellidos
function validacionApellidos() {
    if (validarNombre(apellidos.value)) {
        apellidos.style.border = '1px solid green';
        apellidos.style.backgroundColor = '#BDECB6';
    } else {
        apellidos.style.border = '1px solid red';
        apellidos.style.backgroundColor = '#FF6961';
    }
}

apellidos.addEventListener('blur', function() {
    validacionApellidos();
});

// Teléfono
function validacionTelefono() {
    if (validarTelefonoMovil(telefono.value)) {
        telefono.style.border = '1px solid green';
        telefono.style.backgroundColor = '#BDECB6';
    } else {
        telefono.style.border = '1px solid red';
        telefono.style.backgroundColor = '#FF6961';
    }
}

telefono.addEventListener('blur', function() {
    validacionTelefono();
});

// Email
function validacionEmail() {
    if (validarEmail(email.value)) {
        email.style.border = '1px solid green';
        email.style.backgroundColor = '#BDECB6';
    } else {
        email.style.border = '1px solid red';
        email.style.backgroundColor = '#FF6961';
    }
}

email.addEventListener('blur', function() {
    validacionEmail();
});

// Contraseña
function validacionContrasena() {
    if (validarContrasena(constrasena.value)) {
        constrasena.style.border = '1px solid green';
        constrasena.style.backgroundColor = '#BDECB6';
    } else {
        constrasena.style.border = '1px solid red';
        constrasena.style.backgroundColor = '#FF6961';
    }

}

constrasena.addEventListener('blur', function() {
    validacionContrasena();
});

// Confirmar contraseña
function validacionConfirmarContrasena() {
    if (validarConfirmarContrasena(constrasena.value, confirmarContrasena.value)) {
        confirmarContrasena.style.border = '1px solid green';
        confirmarContrasena.style.backgroundColor = '#BDECB6';
    } else {
        confirmarContrasena.style.border = '1px solid red';
        confirmarContrasena.style.backgroundColor = '#FF6961';
    }
}

confirmarContrasena.addEventListener('blur', function() {
    validacionConfirmarContrasena();
});

// Terminos
function validacionTerminos() {
    if (validarTerminos(terminos)) {
        terminos.style.border = '1px solid green';
        terminos.style.backgroundColor = '#BDECB6';
    } else {
        terminos.style.border = '1px solid red';
        terminos.style.backgroundColor = '#FF6961';
    }
}

terminos.addEventListener('blur', function() {
    validacionTerminos();
});

function validarFormulario(e) {
    if (validarNombre(nombre.value) && validarNombre(apellidos.value) && validarTelefonoMovil(telefono.value) && validarEmail(email.value) && validarContrasena(constrasena.value) && validarConfirmarContrasena(constrasena.value, confirmarContrasena.value) && validarTerminos(terminos)) {
        alert('Formulario enviado correctamente');
    } else {
        e.preventDefault();

        validacionNombre();
        validacionApellidos();
        validacionTelefono();
        validacionEmail();
        validacionContrasena();
        validacionConfirmarContrasena();
        validacionTerminos();

        const error = document.getElementById('error');
        error.innerHTML = 'Complete el formulario correctamente';
        error.style.color = '#FF6961';
    }
}

document.getElementById('form').addEventListener('submit', validarFormulario);
