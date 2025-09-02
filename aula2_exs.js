/*Dada a fórmula de conversão de Fahrenheit para Celsius abaixo,
imprima no console todos as temperaturas F e C de -30ºC a 150ºC,
com incrementos de 10 em 10*/
let f, c;
for(c = -30; c<=150; c+=10 ){
    f  = (c * 9/5) + 32; 
    console.log(c+"ºC = " +f+"ºF");
}
/*A sequência de Fibonacci é um exercício clássico de programação.
Nesse exercício, leia um número inteiro dado pelo usuário (N) e, caso
seja maior que zero, imprima no console os N primeiros números da
sequência de Fibonacci.
➢Lembrando que a sequência de Fibonacci é:
0 1 1 2 3 5 8 13 21 34 55.....*/

let entrada;
do{
    entrada = prompt("Digite um nº inteiro ");
}while(entrada <= 0);
//fibonacci
let i, a=0, b=1;
let result = "" // criando uma string pra armazenar os numeros
for(i=0;i<entrada;i++){
    result+=a+" ";
    let proxValor = a + b;
    a = b;
    b = proxValor;
}
console.log(result.trim());
