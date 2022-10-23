age = parseInt(prompt("Edad"));
placeOfResidence = prompt("Lugar de nacimiento");

if ((age >= 18 || age <= 30) && placeOfResidence == "Madrid") {
    console.log("Puedes acceder al carnet de empresarios emprendedores");
}