const lanzamiento = function () {
  return Math.trunc(Math.random() * (7 - 1) + 1);
}

document.write(lanzamiento());