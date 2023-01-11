const { createApp } = Vue

    createApp({
        data() {
        return {
            pictures: undefined,
            pictureDetail: '',
        }
        },
        methods: {
            cerrarMenu() {
                this.pictureDetail = '';
            },
            getPictures(params) {
                let xhr = new XMLHttpRequest();
                let url = 'https://api.nasa.gov/planetary/apod?';
                let apiKey = 'api_key=qDNrEUMgNU8CN5gHKk8D7O6zjb20s6kn2DnKvCIU';

                xhr.open('GET', url + apiKey + params, true);

                xhr.addEventListener('load', (data) => {
                    if(this.pictures) {
                        this.pictures = this.pictures.concat(JSON.parse(data.target.response));
                    } else {
                        this.pictures = JSON.parse(data.target.response);
                    }
                });

                xhr.send();
            },
            getPicturesScroll() {
                if(window.scrollY + window.innerHeight >= document.body.offsetHeight) {
                    this.getPictures('&count=9');
                }
            }
        },
        computed: {

        },
        mounted() {
            this.getPictures('&count=9');
            window.addEventListener('scroll', this.getPicturesScroll);
        }
    }).mount('#app')


