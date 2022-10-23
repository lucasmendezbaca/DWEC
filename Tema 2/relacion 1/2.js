let fechaHoy = new Date();

let fecha85 = new Date();
fecha85.setDate(fecha85.getDate() + 85);
fecha85.setFullYear(fecha85.getFullYear() + 2);

let fecha187 = new Date();
fecha187.setDate(fecha187.getDate() - 187);
fecha187.setHours(fecha187.getHours() - 24);

let fechaResto = fecha85 - fecha187;
let fecha_final = new Date(fechaResto);
document.write(fecha_final);