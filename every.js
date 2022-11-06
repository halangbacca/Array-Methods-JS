/* every() - percorre todos os elementos do array 
executando uma função booleana, retornando true ou false */

// Verificar se todos os elementos do array são maiores que 10

const array = [12, 5, 8, 130, 44];

const maior10 = array.every((elem) => elem > 10);

console.log(maior10); // false

// Verificar se todos têm mais de 18 anos

const idade = [19, 20, 23, 25, 55];

const maior18 = idade.every((elem) => elem > 18);

console.log(maior18); // true
