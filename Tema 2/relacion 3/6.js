function subcadenas(cadena, posible_subcadena) {
    if(cadena.includes(posible_subcadena)) {
        posicion_inicio = 0;

        for(let i=0; i<=cadena.length; i++) {
            if(!cadena.slice(i).includes(posible_subcadena)){
                posicion_inicio = i--;
                break;
            }
        }

        return [true, posicion_inicio];
    }else{
        return [false];
    }
}

document.write(subcadenas("Tengo un perro en casa", "perro"));