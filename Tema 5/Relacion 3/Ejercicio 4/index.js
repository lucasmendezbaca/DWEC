const productContainer = document.getElementById("productos");
const submitButton = document.getElementById("submit");
const clearButton = document.getElementById("clear");

function addProduct(product) {
    const productElement = document.createElement("div");
    productElement.classList.add("producto");
    productElement.innerHTML = `
        <p class="producto__nombre">${product}</p>
        <div>
            <img id="editar" class="editar" src="icons/bxs-edit.svg" alt="">
            <img id="borrar" class="borrar" src="icons/bxs-trash-alt.svg" alt="">
        </div>
    `;
    productContainer.appendChild(productElement);

    const deleteButton = productElement.querySelector("#borrar");
    deleteButton.addEventListener("click", deleteProduct);

    const editButton = productElement.querySelector("#editar");
    editButton.addEventListener("click", editProduct);
}

function deleteProduct(event) {
    event.target.parentElement.parentElement.remove();
}

function editProduct(event) {
    const product = event.target.parentElement.parentElement;
    const productName = product.querySelector(".producto__nombre");
    const input = document.createElement("input");
    input.value = productName.textContent;
    input.classList.add("producto__nombre");
    product.replaceChild(input, productName);
    input.focus();
    input.addEventListener("blur", () => {
        const newProductName = document.createElement("p");
        newProductName.textContent = input.value;
        newProductName.classList.add("producto__nombre");
        product.replaceChild(newProductName, input);
    });

    input.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            const newProductName = document.createElement("p");
            newProductName.textContent = input.value;
            newProductName.classList.add("producto__nombre");
            product.replaceChild(newProductName, input);
        }
    });
}

submitButton.addEventListener("click", () => {
    const product = document.getElementById("nombre_producto");
    addProduct(product.value);
    product.value = "";
});

clearButton.addEventListener("click", () => {
    productContainer.innerHTML = "";
});