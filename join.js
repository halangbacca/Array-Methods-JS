// join () - junta todos os elementos de um array e os retorna em uma string

const linux = ["Ubuntu", "Mint", "Debian", "Fedora"];
const numeros = [4, 5, 6, 10];

distros = linux.join("-");
numbers = numeros.join("*");

console.log(distros); // "Ubuntu-Mint-Debian-Fedora"
console.log(numbers); // "4*5*6*10"
