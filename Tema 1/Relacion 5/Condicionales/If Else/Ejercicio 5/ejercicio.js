examen1 = parseInt(prompt("Examen 1"));
examen2 = parseInt(prompt("Examen 2"));

trabajo1 = parseInt(prompt("Trabajo 1"));
trabajo2 = parseInt(prompt("Trabajo 2"));

function examsAverage(exam1, exam2) {
    return ((exam1 + exam2) / 2) * 0.75;
}

function worksAverage(work1, work2) {
    return ((work1 + work2) / 2) * 0.25;
}

console.log(`La media es ${examsAverage(examen1, examen2) + worksAverage(trabajo1, trabajo2)}`);

if ((examen1 || examen2 || trabajo1 || trabajo2) < 4.5) {
    console.log("Suspenso");
}