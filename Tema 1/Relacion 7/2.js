function addOnlyNums(...arguments) {
    let result = 0;
    for (let argument of arguments) {
        if (!isNaN(argument)) {
            result += argument;
        }
    }
    
    return result;
}

document.write(addOnlyNums(1, 2, 3, 4));