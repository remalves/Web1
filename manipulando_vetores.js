//Manipulando vetores
var vetor6 = ["Banana", "Abacaxi", "Uva"];
vetor6.push("Melão"); //Adiciona ao final do vetor e retorna 4
vetor6.unshift("Melancia") // Adiciona ao início do vetor e retorna 4

var vetor7= ["Banana", "Abacaxi", "Uva"];
vetor7.pop(); //Remove do final do vetor e retorna uva

var vetor8=["Banana", "Abacaxi", "Uva"];
vetor8.shift();//Remove do inicio do vetor e retorna banana 

// retorno = vetor.splice(indice_inicio, quantos_remover, ...itens);

// ➢Utilizado para remover ou adicionar vários elementos sequenciais do vetor.

// ➢indice_inicio → índice do primeiro elemento a ser manipulado.

// ➢quantos_remover → número de elementos que devem ser removidos. 
// Opcional. Se não for especificado, tenta deletar até o último elemento.

// ➢itens → Os elementos que serão adicionados na posição índice_inicio.

// ➢Retorno: os elementos que foram removidos (como array)

//Remover elementos
let frutas = ["maçã", "banana", "laranja", "uva"];
frutas.splice(1, 2); // começa no índice 1 e remove 2 elementos
console.log(frutas); // ["maçã", "uva"]

//Adicionar elementos
let frutas2 = ["maçã", "uva"];
frutas2.splice(1, 0, "banana", "laranja"); // não remove nada, só insere
console.log(frutas2); // ["maçã", "banana", "laranja", "uva"]

//Substituir elementos
let frutas3 = ["maçã", "banana", "laranja"];
frutas3.splice(1, 2, "kiwi", "melão"); // remove 2 e adiciona 2
console.log(frutas3); // ["maçã", "kiwi", "melão"]

// splice → modifica o array (remove/adiciona/substitui)
let numeros = [10, 20, 30, 40, 50];
numeros.splice(1, 2); // remove 2 elementos a partir do índice 1
console.log(numeros); // [10, 40, 50]

numeros.splice(2, 0, 25, 35);
console.log(numeros); 
// Índice 2 → antes do número 30
// Remove 0 elementos → nada sai
// Adiciona 25 e 35 → eles entram na frente do 30

numeros.splice(1, 2, 22, 33); // remove 2 elementos e adiciona 22 e 33
console.log(numeros); // [10, 22, 33, 35, 50]

//Atribuição 
var v1 = [1,2,3,4];
var v2 =  v1;
console.log(v2);//[1,2,3,4]
v1.pop();
console.log(v2);//[1,2,3]


// ➢Para evitar a atribuição por referência, deve-se copiar os dados do vetor.
// ➢Para isso, usa-se o slice
// ➢O slice pode também copiar apenas uma parte do vetor. Para isso,
// pode especificar os parâmetros de inicio e de fim.
//O método slice não altera o array original; 
// ele retorna uma cópia de uma parte do array.

//array.slice(inicio, fim)
// inicio → índice inicial (inclusivo)
// fim → índice final (exclusivo)
// Se não passar fim, ele vai até o final do array
// Pegar uma parte do array
// slice → não modifica, só retorna uma fatia do array

//Pegar uma fatia
let numeros2 = [10,20,30,40,50]
let parte = numeros2.slice(1, 4); // do índice 1 até 3
console.log(parte);   // [20, 30, 40]
console.log(numeros2); // [10, 20, 30,40, 50] → array original não mudou

// Do índice até o final
let finais = numeros2.slice(3);
console.log(finais); // [40, 50]
//O que faz slice(3)
// O número 3 é o índice inicial da fatia.
// O slice pega todos os elementos a partir desse índice até o final do array.
// Não remove nada do array original.

//Usando índices negativos
// Um índice negativo significa contar a partir do final do array.
// -1 → último elemento
// -2 → penúltimo elemento
// E assim por diante.
// Então slice(-2) significa:
// "Pega os últimos 2 elementos do array, até o final".
let ultimos = numeros2.slice(-2);
console.log(ultimos); // [40, 50]

// slice() cria uma cópia do vetor (todo ou parte dele), sem afetar o original.
vetorAntigo = [1,2,3,4,5,6]
var novoVetor = vetorAntigo.slice(); //isso copia todo o vetor
console.log(novoVetor);
var parte2 = vetorAntigo.slice(1, 3); // copia só do índice 1 ao 2
console.log(parte2);