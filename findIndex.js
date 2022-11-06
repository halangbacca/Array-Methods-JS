//  findIndex() - retorna o índice do primeiro elemento encontrado

const fruits = [
  { name: "laranja", quantity: 2 },
  { name: "limão", quantity: 3 },
  { name: "maracujá", quantity: 5 },
  { name: "morango", quantity: 1 },
];

const fruitIndex = fruits.findIndex((fruit) => fruit.name === "morango");

console.log(fruitIndex); // 3
