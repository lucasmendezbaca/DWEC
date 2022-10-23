document.write("Apartado 1:");
document.write(Math.random() + "<br>");


document.write("Apartado 2:");
document.write(Math.random() * (200 - 100)+100 + "<br>");


document.write("Apartado 3:");
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

document.write(getRandomArbitrary(100, 200) + "<br>");