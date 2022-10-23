const lanzamiento = function () {
  return Math.trunc(Math.random() * (7 - 1) + 1);
}

contador = {};

for(let i=0; i<=6000; i++) {
    let numero = lanzamiento();
    if(numero in contador) {
        contador[numero] += 1;
    }else{
        contador[numero] = 1;
    }
}

for(let i=1; i<=6; i++) {
    document.write(`${i}: ${contador[i]}<br>`);
}
