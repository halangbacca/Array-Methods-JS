//  reduce() - percorre todos os elementos do array e os reduz (operação) em um único número

const rockets = [
  { country: "Rússia", launches: 32 },
  { country: "EUA", launches: 23 },
  { country: "China", launches: 16 },
  { country: "Europa", launches: 7 },
  { country: "Japão", launches: 4 },
];

const totalLaunches = rockets.reduce(
  (elementoAnterior, elementoAtual) =>
    elementoAnterior + elementoAtual.launches,
  0
); // 0 - valor inicial

const subLaunches = rockets.reduce(
  (elementoAnterior, elementoAtual) =>
    elementoAnterior - elementoAtual.launches,
  82
); // 82 - valor inicial

console.log(totalLaunches);
console.log(subLaunches);
