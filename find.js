//  find() - retorna o primeiro elemento que passou no teste

const pizzas = ["mussarela", "calabresa", "portuguesa"];

const startPizza = pizzas.find((pizza) => pizza.startsWith("p"));
const endPizza = pizzas.find((pizza) => pizza.endsWith("a"));

console.log(startPizza); // "portuguesa"
console.log(endPizza); // "mussarela"

const fruits = [
  { name: "laranja", quantity: 2 },
  { name: "limão", quantity: 3 },
  { name: "maracujá", quantity: 5 },
  { name: "morango", quantity: 1 },
];

const fruitName = fruits.find((fruit) => fruit.name === "morango");
const fruitQtd = fruits.find((fruit) => fruit.quantity === 5);

console.log(fruitName); // "morango"
console.log(fruitQtd); // "maracujá"
