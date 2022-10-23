let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

let algunoConS = dias.some(dia => dia.startsWith("S"));
let todosConS = dias.every(dia => dia.endsWith("s"));

console.log(algunoConS, todosConS);
