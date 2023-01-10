import { Tarea } from './Tarea.js'

const { createApp } = Vue

    createApp({
        data() {
        return {
            tareasModelo: JSON.parse(localStorage.getItem('tareas')) || [],
            titulo: ''
        }
        },
        methods: {
            crearTarea() {
                let tarea = new Tarea(this.titulo);
                tarea.guardar();
                tareasModelo.push(tarea);

                this.titulo = '';
            },
            isCompleted(estado) {
                if(estado == 'pendiente') {
                    return false;
                }else {
                    return true;
                }
            },
            actualizarEstadoTarea(titulo, estado) {
                let tarea = Tarea.tareas.find(tarea => tarea.titulo === titulo);
                tarea.estado = estado;
                localStorage.setItem('tareas', JSON.stringify(Tarea.tareas));
            }
        },
        computed: {
            numTareas() {
                return Tarea.tareas.length;
            },
            tareas() {
                return this.tareasModelo.filter((tarea) => tarea.titulo != '');
                // Tarea.ordenarPorPrioridad();
                // return JSON.parse(localStorage.getItem('tareas'));
            },
            numTareasPendientes() {
                return Tarea.tareas.filter( (tarea) => tarea.estado == 'pendiente').length;
            }

        }
    }).mount('#app')


