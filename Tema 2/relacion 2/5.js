
// function ecuacion(a, b, c) {
//     let solucion1 = ( -1*(b) + (Math.sqrt(b** - 4*a*c)) )/2*a;
//     let solucion2 = ( -1*(b) - (Math.sqrt(b** - 4*a*c)) )/2*a;

//     return solucion1
// }


function discrim(a, b, c) {
    return (b*b - 4*a*c);
} 

function solucionar(a, b, c, sol) {
    var disc = discrim(a,b,c);
    if (disc < 0) {
        alert("Sin solución real");
    }else{
        sol[0] = (-b + Math.sqrt(disc))/(2*a);
        sol[1] = (-b - Math.sqrt(disc))/(2*a);
    } 
} 

var soluc = new Array(2);
solucionar(1,-8,12, soluc) ;
document.write( "Soluciones "+soluc[0]+" y "+soluc[1]);