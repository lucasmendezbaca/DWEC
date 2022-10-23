age = parseInt(prompt("Edad"));

if (age < 5) {
    console.log("Jardín de infancia");
} else if (age <=11 && age >=6) {
    console.log("Primaria");
} else if (age >= 12 && age <= 16) {
    console.log("ESO");
} else if (age >=17 && age <= 21) {
    console.log("Bachillerato o ciclos formativos");
} else if (age >= 21) {
    console.log("Universidad");
}