function siguienteImagen() {
    var imagen = document.getElementById("imagen");
    var indice = parseInt(imagen.src.split("/").pop().split(".")[0]);
    imagen.src = "img/" + (indice+1) + ".jpg";
}

function anteriorImagen() {
    var imagen = document.getElementById("imagen");
    var indice = parseInt(imagen.src.split("/").pop().split(".")[0]);
    imagen.src = "img/" + (indice-1) + ".jpg";
}

const anterior = document.getElementById('anterior');
const siguiente = document.getElementById('siguiente');

anterior.addEventListener('click', anteriorImagen);
siguiente.addEventListener('click', siguienteImagen);