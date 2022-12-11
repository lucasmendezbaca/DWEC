class Nota {
    constructor (titulo, prioridad = 'low', estado = 'pendiente', fecha = new Date()) {
        this.titulo = titulo
        this.prioridad = prioridad
        this.estado = estado
        this.fecha = fecha 
    }

    // obtener el tiempo en minutos desde la creación de la nota
    get tiempo () {
        return Math.floor((new Date() - this.fecha) / 60000)
    }

    // añadir la nota al localstorage
    guardar () {
        localStorage.setItem(this.titulo, JSON.stringify(this))
    }

    // eliminar la nota del localstorage
    eliminar () {
        localStorage.removeItem(this.titulo)
    }

    // obtener todas las notas del localstorage
    static obtener () {
        let notas = []
        for (let i = 0; i < localStorage.length; i++) {
            let clave = localStorage.key(i)
            let valor = JSON.parse(localStorage.getItem(clave))
            notas.push(valor)
        }
        return notas
    }

    // obtener el número de notas del localstorage
    static numeroNotas () {
        return localStorage.length
    }

    // obtener el numero de notas pendientes del localstorage
    static numeroNotasPendientes () {
        let notas = this.obtener()
        let numeroNotasPendientes = 0
        notas.forEach(nota => {
            if (nota.estado === 'pendiente') {
                numeroNotasPendientes++
            }
        })
        return numeroNotasPendientes
    }

    // ordenar las notas por prioridad
    static ordenar (notas) {
        notas.sort((a, b) => {
            return a.prioridad - b.prioridad
        })
    }

    // eliminar todas las notas del localstorage
    static eliminarTodas () {
        localStorage.clear()
    }

    // obtener la nota con el titulo indicado
    static obtenerPorTitulo (titulo) {
        let datosNota = JSON.parse(localStorage.getItem(titulo))
        // crear un objeto date a partir de la fecha guardada en el local storage
        let fecha = new Date(datosNota.fecha)
        let nota = new Nota(datosNota.titulo, datosNota.prioridad, datosNota.estado, fecha)
        return nota;
    }

    // actualizar el estado de la nota en el local storage con el titulo indicado
    static actualizarEstado (titulo, estado) {
        let nota = this.obtenerPorTitulo(titulo)
        nota.estado = estado
        nota.guardar()
    }

    // actualizar la prioridad de la nota con el titulo indicado
    static actualizarPrioridad (titulo, prioridad) {
        let nota = this.obtenerPorTitulo(titulo)
        nota.prioridad = prioridad
        nota.guardar()
    }
}

export {Nota};