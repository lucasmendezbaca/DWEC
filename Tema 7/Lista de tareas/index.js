import { Nota } from './nota.js'

const tareaInput = document.getElementById('tarea_input');
const borrarTareas = document.getElementById('borrarTareas');
const notas = Nota.obtener();
const notasContainer = document.getElementById('tareas');
const numTareas = document.getElementById('numTareas');
const numTareasPendientes = document.getElementById('numTareasPendientes');

notas.forEach(nota => {
    mostrarNota(nota);
});

function actualizarTareasContador() {
    numTareas.textContent = Nota.numeroNotas();
    numTareasPendientes.textContent = Nota.numeroNotasPendientes();
}

function marcaChecks() {
    const cheks = document.querySelectorAll('.check');
    cheks.forEach(check => {
        check.addEventListener('click', function() {
            check.classList.toggle('checked');

            let titulo = check.nextElementSibling;
            titulo.classList.toggle('tarea__info__nombre--checked');

            let estado = check.classList.contains('checked') ? 'completada' : 'pendiente';
            Nota.actualizarEstado(titulo.textContent, estado);
            actualizarTareasContador();
        });
    });
}

borrarTareas.addEventListener('click', function() {
    Nota.eliminarTodas();
    notasContainer.innerHTML = '';
    actualizarTareasContador();
});

// añadir al nota al local storage
tareaInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        let titulo = tareaInput.value;

        let nota = new Nota(titulo);
        nota.guardar();

        tareaInput.value = '';
        mostrarNota(nota);
        actualizarTareasContador();
    }
});

function mostrarNota(nota) {
    notasContainer.innerHTML += `
        <div class="tarea">
            <div class="tarea__info">
                <div class="check ${nota.estado === 'completada' ? 'checked' : ''}"></div>
                <p class="tarea__info__nombre ${nota.estado === 'completada' ? 'tarea__info__nombre--checked' : ''}">${nota.titulo}</p>
                <button class="tarea__borrar"><div class="tarea__borrar__icono"><img src="img/trash.svg" alt=""></div></button>
            </div>
            <div class="tarea__prioridad">
                <p>Prioridad:</p> <p><span class="low"><img src="img/chevron-down.svg">Low</span> <span class="normal">Normal</span> <span class="high">High<img src="img/chevron-up.svg"></span></p> <p class="tarea__temporizador">Añadido hace 6 minutes ago</p>
            </div>
        </div>
    `;

    marcaChecks();
}

actualizarTareasContador();