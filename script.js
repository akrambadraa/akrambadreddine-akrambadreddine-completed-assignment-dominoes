
function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createDominoHalf(dots) {
  const half = document.createElement('div');
  half.className = 'domino-half dots-' + dots;
  for (let i = 0; i < dots; i++) {
      const dot = document.createElement('span');
      dot.className = 'dot';
      half.appendChild(dot);
  }
  return half;
}
function createRandomDomino() {
  const domino = document.createElement('div');
  domino.className = 'domino';
  const dots1 = randomInt(0, 6);
  const dots2 = randomInt(0, 6);

  const half1 = createDominoHalf(dots1);
  const half2 = createDominoHalf(dots2);

  domino.appendChild(half1);
  domino.appendChild(half2);

  return domino;
}
const container = document.createElement('div');
container.className = 'dominoes-container';
document.body.appendChild(container);
for (let i = 0; i < 50; i++) {
  const randomDomino = createRandomDomino();
  container.appendChild(randomDomino);
}
