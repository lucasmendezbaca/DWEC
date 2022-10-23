const numbers = [86, 6, 10, 54, 103, 45];
const words = ["perro", "gato", "seismo", "pera", "racismo"];

// largest
const largest = nums => Math.max(...nums);
console.log(largest(numbers));

// longest
let longest = {number:0, length:1};
for(number of numbers) {
    if(number.toString().length >= longest.length){
        longest.number = number;
        longest.length = number.toString().length;
    }
}

console.log(longest);

// even
const even = numbers.filter(num => num % 2 == 0);
console.log(even);

// odd
const odd = numbers.filter(num => num % 2 != 0);
console.log(odd);

// contain is
const withIs = words.filter(word => word.includes("is"));
console.log(withIs);

// divisible by three
const divisibleByThree = numbers.every(num => num % 3 == 0);
console.log(divisibleByThree);

// zip
var zip = words.map(function(word, index) {
  return [word, numbers[index]];
});
console.log(zip);

// sort
zip.sort((a, b) => {
    if(a[1] > b[1]) {
        return 1;
    }else if(a[1] < b[1]){
        return -1;
    }
    return 0;
})
console.log(zip);

// remove first
words.shift();
console.log(words);

// place a new word at the start of the array
words[0] = "nueva";
console.log(words);


// 3. Busqueda del tesoro
const matriz = [[34, 21, 32, 41, 25], [14, 42, 43, 14, 31], [54, 45, 52, 42, 23], [33, 15, 51, 31, 35], [21, 52, 33, 13, 23]];

function busquedaTesoro(casilla) {
    console.log(casilla);
    let fila = parseInt(casilla.toString()[0]) - 1; 
    let columna = parseInt(casilla.toString()[1]) - 1; 

    let nuevaCasilla = matriz[fila][columna];
    if(nuevaCasilla == (fila + 1).toString() + (columna + 1).toString()) {
        console.log(`La solución es: ${nuevaCasilla}`);
        return nuevaCasilla;
    }

    busquedaTesoro(nuevaCasilla);
}

let tesoro = busquedaTesoro(11);
console.log(tesoro);

// 6
function columnText(text) {
    let withoutSpaces = text.split(" ").join("");
    let square = [];

    let division = Math.trunc(Math.sqrt(withoutSpaces.length));
    // let ultimo = withoutSpaces.length % division;
    for(let i=0; i<=division; i ++) {
        let inicio = division * i;
        let final = division * (i+1);

        if(final > withoutSpaces.length) {
            final = withoutSpaces.length;
        }
        let subCadena = withoutSpaces.slice(inicio, final);
        if(subCadena != undefined){
            square.push(subCadena);
        }
    }

    for(let elem of square) {
        document.write(elem + "<br>");
    }
}


function secrtMessage(text) {

}

document.write(columnText("If man was meant to stay on the ground god would have given us roots"));