var num = 10;
var nome = "IFSP";
var msg = `seja bem vindo ${nome}. Você tem ${num+2} mensagens`;
console.log(msg)

//laços condicionais

var idade =10;
if(idade<13){
    console.log("acesso negado")
}else if(idade<18){
    console.log("Acesso limitado")
}else{
    console.log("Acesso ilimitado")
}

var cidade = "spo"
switch(cidade){
    case "cam":
        alert("campinas");
        break;
    case "spo":
        alert("são paulo");
        break;
    case "scl":
    alert("são carlos");
    break;
    default:
        alert("Não reconhecido");
        break;

}


//laços de repetição
let i;
for(i=0; i<12;i++){
    console.log("iteracao numero " + i);
}

let contador = 0;
while(contador<12){
    console.log("iteracao numero " + contador);
    contador++;
}

let contador2=0;
do{
    console.log("iteração numero "+ contador2);
    contador2++;
}while(contador<12);


//interação com o usuário
alert("testando");

var resp = confirm("Voce esta entendendo? ");
if (resp === true){
    console.log("entendi")
}else{
    console.log("Nao entendi. Help")
}


var nome = prompt("Qual é seu nome?", "João")
if(nome!= null){
    alert("Olá " + nome)
}



