const button = document.getElementById('btn');
button.addEventListener('click', () => {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    xhr.addEventListener('load', (data) => {
        const dataJSON = JSON.parse(data.target.response);

        const ul = document.getElementById('list');
        for (let userInfo of dataJSON) {
            const listItem = document.createElement('li');
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
            ul.appendChild(listItem);
        }

    });

    xhr.send();
});
