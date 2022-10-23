num_adivinar = parseInt(prompt("Número del jugador 1"));

do {
    num = parseInt(prompt("Introduce un número"));
    if (num != num_adivinar) {
        if (num > num_adivinar) {
            alert("El número es menor");
        }else{
            alert("El número es mayor");
        }
    }
} while (num != num_adivinar);

alert("Has adivinado el número");