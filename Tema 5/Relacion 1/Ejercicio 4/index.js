function addElement(elemento) {
    var lista = document.getElementById("lista");
    var element = document.createElement("li");
    element.innerHTML = elemento.value;
    lista.appendChild(element);
}

const button = document.getElementById("boton");
const elemento = document.getElementById("elemento");

button.addEventListener("click", function() {
    addElement(elemento)
    elemento.value = "";
});

