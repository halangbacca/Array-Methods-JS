//  includes() - verifica se um array ou objeto possui determinado elemento e retorna um booleano

console.log([1, 2, 3].includes(2)); // true
console.log([1, 2, 3, NaN].includes(NaN)); // true

const people = [
  { name: "Halan" },
  { name: "Luana" },
  { name: "Juliana" },
  { name: "Daniel" },
];

console.log(people.includes("Ana")); // false

const filteredUsers = people.filter((p) => p.name.includes("ala"));

console.log(filteredUsers); // [ { name: 'Halan' } ]
