import { Nota } from './nota.js'

const tareaInput = document.getElementById('tarea_input');

// añadir al nota al local storage
tareaInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        let titulo = tareaInput.value;

        let nota = new Nota(titulo);
        nota.guardar();
    }
});

// mostrar todas las notas
let notas = Nota.obtener();
let notasContainer = document.getElementById('tareas');
notas.forEach(nota => {
    notasContainer.innerHTML += `
        <div class="tarea">
            <div class="tarea__info">
                <div class="round">
                    <input type="checkbox" checked id="checkbox" />
                    <label for="checkbox"></label>
                </div>
                <p class="tarea__info__nombre">${nota.titulo}</p>
                <button class="tarea__borrar"><div class="tarea__borrar__icono"><img src="img/trash.svg" alt=""></div></button>
            </div>
            <div class="tarea__prioridad">
                <p>Prioridad:</p> <p><span class="low"><img src="img/chevron-down.svg">Low</span> <span class="normal">Normal</span> <span class="high">High<img src="img/chevron-up.svg"></span></p> <p class="tarea__temporizador">Añadido hace 6 minutes ago</p>
            </div>
        </div>
    `;
});