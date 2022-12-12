import { Tarea } from './Tarea.js'

const tarea_input = document.getElementById('tarea__input');

tarea_input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const nota = new Nota(tarea_input.value);
        nota.mostrarNota();
        tarea_input.value = '';
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
                <p>Prioridad:</p> <p><span class="prioridad low"><img src="img/chevron-down.svg">Low</span> <span class="prioridad normal">Normal</span> <span class="prioridad high">High<img src="img/chevron-up.svg"></span></p> <p class="tarea__temporizador">Añadido hace 6 minutes ago</p>
            </div>
        </div>
    `;
}
