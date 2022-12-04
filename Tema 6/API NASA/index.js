var uploadedPictures = [];

const body = document.querySelector('body');

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

        uploadedPictures.push(picture);
        pictures.appendChild(pictureItem);

        pictureItem.addEventListener('click', () => {
            showDetailPicture(picture.date);
        });
    }
}

function showDetailPicture(date) {
    let detailPicture = uploadedPictures.find((picture) => picture.date === date);

    pictureDetail.style.display = 'flex';
    body.style.overflow = 'hidden';

    const pictureDetailImg = document.querySelector('.picture_detail__img');
    pictureDetailImg.src = detailPicture.url;

    const pictureDetailTitle = document.querySelector('.picture_detail__title');
    pictureDetailTitle.innerHTML = 'Titulo: ' + detailPicture.title;

    const pictureDetailDate = document.querySelector('.picture_detail__date');
    pictureDetailDate.innerHTML = 'Fecha: ' + detailPicture.date;

    const pictureDetailExplanation = document.querySelector('.picture_detail__explanation');
    pictureDetailExplanation.innerHTML = 'Descripción: ' + detailPicture.explanation;

    const pictureDetailCopyright = document.querySelector('.picture_detail__copyright');
    pictureDetailCopyright.innerHTML = 'Copyright: ' + detailPicture.copyright;
}

// window.addEventListener('scroll', () => {
//     const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

//     if (clientHeight + scrollTop >= scrollHeight - 5) {
//         getPictures();
//     }
// });

const pictureDetail = document.getElementById('picture_detail');
const menuHamburguesa = document.getElementById('menu__hamburguesa');
menuHamburguesa.addEventListener('click', () => {
    pictureDetail.style.display = 'none';
    body.style.overflow = 'auto';
});
