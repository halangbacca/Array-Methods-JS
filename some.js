// some() - verifica se pelo menos um elemento do array retorna um booleano

// Verificar se há algum número primo entre os elementos do array

const primes = [1, 3, 5, 7, 8, 9, 11, 13, 15, 55];

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

//console.log(primes.some(isPrime)); //true

//  Verificar por condições em valores/objetos

const team = [
  { id: 1, name: "Halan", pilot: true },
  { id: 2, name: "Daniel", pilot: false },
  { id: 3, name: "Juliana", pilot: true },
  { id: 4, name: "Luana", pilot: true },
  { id: 5, name: "Larissa", pilot: false },
];

console.log(team.some((person) => person.pilot)); // true
