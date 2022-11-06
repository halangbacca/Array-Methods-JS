/* filter() - percorre todos os elementos do array invocando uma função 
booleana e retornando um novo array com todos os elementos true*/

const arrayDuplicado = [2, 3, 4, 5, 4, 12, 19, 7, 2, 5];

const novoArray = arrayDuplicado.filter(
  (elem, index, arr) => arr.indexOf(elem) === index
);

console.log(novoArray);
