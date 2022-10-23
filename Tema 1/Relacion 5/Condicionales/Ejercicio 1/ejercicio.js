number = parseInt(prompt("Introduce un número"));

function isEven(number) {
    return number%2 == 0;
}

if (isEven(number)) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}