age = parseInt(prompt("Introduce un número"));
const LEGAL_AGE = 18;

function isLegalAge(age) {
    if (age >= LEGAL_AGE) {
        console.log("Es mayor de edad");
    } else {
        console.log("Es menor de edad");
    }
}

isLegalAge(age);