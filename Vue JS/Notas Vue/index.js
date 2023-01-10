import { Tarea } from './Tarea.js'

const { createApp } = Vue

    createApp({
        data() {
        return {
            tareasModelo: JSON.parse(localStorage.getItem('tareas')) || [],
            titulo: '',
        }
        },
        methods: {
            crearTarea() {
                let tarea = new Tarea(this.titulo);
                this.tareasModelo.push(tarea);
                localStorage.setItem('tareas', JSON.stringify(this.tareasModelo));

                this.titulo = '';
            },
            isCompleted(estado) {
                if(estado == 'pendiente') {
                    return false;
                }else {
                    return true;
                }
            },
            actualizarEstadoTarea(titulo) {
                let tarea = this.tareasModelo.find(tarea => tarea.titulo === titulo);
                if(tarea.estado == 'pendiente') {
                    tarea.estado = 'completada';
                }else {
                    tarea.estado = 'pendiente';
                }
                localStorage.setItem('tareas', JSON.stringify(this.tareasModelo));
            },
            borrarCompletadas() {
                this.tareasModelo = this.tareasModelo.filter(tarea => tarea.estado === 'pendiente');
                localStorage.setItem('tareas', JSON.stringify(this.tareasModelo));
            },
            borrarTarea(titulo) {
                this.tareasModelo = this.tareasModelo.filter(tarea => tarea.titulo != titulo);
                localStorage.setItem('tareas', JSON.stringify(this.tareasModelo));
            },
            isPrioridadActual(tareaPrioridad, nombreClase) {
                return tareaPrioridad == nombreClase
            },
            cambiarPrioridad(titulo, prioridad) {
                let tarea = this.tareasModelo.find(tarea => tarea.titulo == titulo);
                tarea.prioridad = prioridad;
                localStorage.setItem('tareas', JSON.stringify(this.tareasModelo));
            }
        },
        computed: {
            numTareas() {
                return this.tareasModelo.length;
            },
            numTareasPendientes() {
                return this.tareasModelo.filter(tarea => tarea.estado == 'pendiente').length;
            },
            tareasOrdenadas() {
                return this.tareasModelo.sort((a, b) => {
                    if (a.prioridad === 'high' && b.prioridad === 'normal') {
                        return -1
                    } else if (a.prioridad === 'high' && b.prioridad === 'low') {
                        return -1
                    } else if (a.prioridad === 'normal' && b.prioridad === 'low') {
                        return -1
                    } else if (a.prioridad === 'normal' && b.prioridad === 'high') {
                        return 1
                    } else if (a.prioridad === 'low' && b.prioridad === 'high') {
                        return 1
                    } else if (a.prioridad === 'low' && b.prioridad === 'normal') {
                        return 1
                    } else {
                        return 0
                    }
                });
            }

        }
    }).mount('#app')


