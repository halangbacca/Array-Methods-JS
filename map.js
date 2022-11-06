//  map() - percorre todos os elementos do array e executa uma função

const numeros = [1, 5, 6, 7, 9, 10];
const dobraNumeros = numeros.map((num) => num * 2);

//  console.log(dobraNumeros);

//  conversor de Fahrenheit em Celsius
const fahrenheit = [0, 32, 45, 50, 75, 80, 120];
const celsius = fahrenheit.map((temp) => (temp - 32) / 1.8);

console.log(celsius);
