function palindromo(cad_arg) {
    return cad_arg.toLowerCase() == cad_arg.toLowerCase().split("").reverse().join("");
}

document.write(palindromo("perrorrep"));