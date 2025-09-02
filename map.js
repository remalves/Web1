//Modifica os elementos de uma lista, retornando 
// uma nova lista de mesmo tamanho.

// Converte C --> F
// function f1(inp) {
// return inp * (9 / 5) + 32;
// }

const f1 = (inp) => {return inp * (9 / 5) + 32;}
var graus = [-10, 0, 10, 20, 30, 40, 50, 60];
var fahrenheit = graus.map(f1);
console.log(fahrenheit);

