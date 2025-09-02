
//Funções - Declaração
function areaDoCirculo(raio){
    return Math.PI * raio ** 2;
}

let res = areaDoCirculo(10.134);


//Funções - Expressão

var areaDoCirculo = function(raio){
    return Math.PI * raio ** 2;
}
areaDoCirculo(10.134);


//A declaração nomeada é içada, enquanto que a expressão não

test(); //funciona
function test(){
    console.log("oi");
}

// test2();//não funciona
// var test2 = function(){
//     console.log("olá")
// }

//JavaScript ES6+ suporta parâmetros de entrada com valores padrão
function teste(msg="nada"){
    console.log(msg);
}
teste("olá");// Imprime 'olá'
teste() // Imprime 'Nada'


//O vetor será nomeado como “msg”
//...msg transforma todos os argumentos adicionais em um array chamado msg.
function teste2(nome,...msg){
    console.log(nome);
    for(let i =0; i < msg.length; i++){
        console.log(msg[i]);
    }
}

teste2("IFSP", "ADS", "PW1"); // Imprime "IFSP", "ADS" e "PW1"
teste2("IFSP"); // Imprime "IFSP";
teste2("IFSP", "ADS"); // Imprime "IFSP" e "ADS"


// ➢Tem quase todos os recursos de uma função normal, com exceção de
// recursos como this, construtores e similares.

let a = 10;
let b = 20;
var somatorio =  function(a,b){
    return a+b;
}
console.log(somatorio(a,b)); // vai imprimir 30

//arrow function
//Caso haja apenas uma instrução na função,
//não é necessário o comando return
var outrasoma = (a,b) => a+b
console.log(outrasoma(a,b));
//imprimirá 30

