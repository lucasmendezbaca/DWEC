function sum(...arguments) {
    let result = 0;
    for (let argument of arguments) {
        result += argument;
    }
    
    return result;
}


document.write(sum(1, 2, 3, 4));