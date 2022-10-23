function squareAndSum(...arguments) {
    let result = 0;
    for (let argument of arguments) {
        let square = argument*argument;
        result += square;
    }

    return result;
}

document.write(squareAndSum(2,4,3));