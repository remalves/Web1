//Obtém um único valor da lista, calculado sobre
// a lista em sua totalidade.

// O resultado será um único valor (acumulador), com o valor obtido pela
// invocação da função para cada elemento do vetor

//somar os valores

// function f1(acc, val){
//     return acc + val;
// }

const f1 = (acc, val)=> {return acc + val};

var valores = [1,2,3,4,5,6];
var res = valores.reduce(f1);
console.log(res);