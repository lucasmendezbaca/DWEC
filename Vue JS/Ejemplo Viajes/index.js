const { createApp } = Vue

    createApp({
        data() {
        return {
            entradas: [
                {
                    id: 1,
                    titulo: 'Fin de semana en Madrid',
                    texto: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur rem sit quo iste ratione doloremque suscipit delectus provident, fugit debitis, quaerat sint natus commodi? Dicta maxime harum facere molestiae omnis.',
                    url: 'https://google.com',
                    ubicacion: {
                        ciudad: "Madrid",
                        pais: "España"
                    }
                },
                {
                    id: 2,
                    titulo: 'Barcelona',
                    texto: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur rem sit quo iste ratione doloremque suscipit delectus provident, fugit debitis, quaerat sint natus commodi?.',
                    url: 'https://youtube.com',
                    ubicacion: {
                        ciudad: "Londres",
                        pais: "Reino Unido"
                    }
                },
            ],
            permitirAddEntrada: false,
            verEntradas: false

        }
        },
        methods: {
            numeroEntradas() {
                return this.entradas.length
            },
            cambiarVisibilidad() {
                this.verEntradas = !this.verEntradas
            },
        },
        computed: {
            entradasEspana() {
                return this.entradas.filter((ent) => ent.ubicacion.pais == "España").length;
            }
        }
    }).mount('#app')