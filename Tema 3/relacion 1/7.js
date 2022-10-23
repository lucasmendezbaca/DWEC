function factorial(numero){
    if(numero == 1){
      return 1;
    }
    else{
      return numero * factorial(numero - 1);
    }
}

document.write("<table border='1'>");
for(let i=1; i<=10; i++) {
    document.write("<tr>");
    document.write(`<td>Factorial de ${i}</td>`);
    document.write(`<td>${factorial(i)}</td>`);
    document.write("<tr>");
}
document.write("</table>");