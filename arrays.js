//criando um vetor 
 var vetor =  Array();
 vetor[0] = "IFSP";
 vetor[1] = "JS";
 vetor[2] = 2019;
 vetor[3] = true;
 vetor[4]=Array();
 vetor[5]=1.4567;

 //ou

var vetor2 =  Array("IFSP","JavaScript",2019, true, Array(), 1.4567);
//ou
var vetor3 = ["IFSP","JavaScript",2019, true, Array(), 1.4567];

//iterando sobre o vetor
var vetor4 = [1,2,3,4];
for(let i =0; i < vetor.length;i++){
    console.log(vetor[i]);
}

// Outra forma de iteração é usando o IN:

var vetor5 = ["a", "b", "c", "d"];
for(valor in vetor5){
    console.log(valor) //0,1,2,3
}

// ➢Veja que não é retornado o valor da posição do vetor, mas sim o
// índice da posição do vetor.


// Uma forma de iterar sobre os valores é usando a operação OF
for(valor of vetor5){
    console.log(valor) //a,b,c,d
}



