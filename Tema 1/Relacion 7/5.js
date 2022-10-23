function sumEveryOdd(...arguments) {
    let result = 0;
    for (let i=0; i<arguments.length; i++) {
        if (i % 2 != 0) {
            result += arguments[i];
        }
    }

    return result;
}

document.write(sumEveryOdd(2, 4, 5, 6, 9));