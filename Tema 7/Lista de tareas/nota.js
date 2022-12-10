class Nota {
    constructor (titulo, prioridad = 'low') {
        this.titulo = titulo
        this.prioridad = prioridad
        this.fecha = new Date() 
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
        return JSON.parse(localStorage.getItem(titulo))
    }

    // actualizar la prioridad de la nota con el titulo indicado
    static actualizarPrioridad (titulo, prioridad) {
        let nota = this.obtenerPorTitulo(titulo)
        nota.prioridad = prioridad
        nota.guardar()
    }
}

export {Nota};