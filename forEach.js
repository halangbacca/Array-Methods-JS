//  forEach() - executa uma determinada função em cada elemento de um array, uma espécie de for

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const tabuada = (num) => console.log(num * 2);

numeros.forEach(tabuada); // 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
