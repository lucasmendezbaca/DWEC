const formulario = document.getElementById('formulario');
const boton = document.getElementById('boton');
const archivo = document.getElementById('archivo');
const submit = document.getElementById('submit');

boton.addEventListener('click', function() {
    const input = document.createElement('input');
    input.type = 'file';
    formulario.insertBefore(input, submit);
});