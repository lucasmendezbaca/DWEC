const button = document.getElementById('btn');
button.addEventListener('click', () => {
    getPictures();
});

function getPictures() {
    let xhr = new XMLHttpRequest();
    let url = 'https://api.nasa.gov/planetary/apod?';
    let apiKey = 'api_key=qDNrEUMgNU8CN5gHKk8D7O6zjb20s6kn2DnKvCIU';
    let params = '&count=9';

    xhr.open('GET', url + apiKey + params, true);

    xhr.addEventListener('load', (data) => {
        const dataJSON = JSON.parse(data.target.response);
        createPictures(dataJSON);
    });

    xhr.send();
}

function createPictures(dataJSON) {
    const pictures = document.getElementById('pictures');
    for (let picture of dataJSON) {
        const pictureItem = document.createElement('div');
        pictureItem.classList.add('picture');
        pictureItem.innerHTML = `
            <div class="picture__img__container">
                <img class="picture__img" src="${picture.url}" alt="${picture.title}">
            </div>
            <h3 class="picture__title">${picture.title}</h3>
            <p class="picture__date">${picture.date}</p>
        `;

        pictures.appendChild(pictureItem);
    }
}



// lanzar un evento cuando el scroll llegue al final de la página
window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (clientHeight + scrollTop >= scrollHeight - 5) {
        getPictures();
    }
});
