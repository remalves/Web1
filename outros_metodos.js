var palavras = "eu gosto muito de estudar".split(" ")
console.log(palavras)// "Eu", "gosto", "muito", "de", "estudar"

//JOIN
var novaFrase = palavras.join("-")
console.log(novaFrase) // "Eu-gosto-muito-de-estudar"

var vetor = [3,1,4,1,5];
console.log("vetor original: ", vetor);

// 1️⃣ reverse() – Reverte a ordem do vetor
var vetorReverse = [...vetor]; // copia o vetor original
vetorReverse.reverse();
console.log("Após reverse():", vetorReverse);

// 2️⃣ sort() – Ordena o vetor em ordem UNICODE (cuidado: números podem ficar estranho)
var vetorSort = [...vetor]; // copia o vetor original
vetorSort.sort();
//Lembre: sort() transforma tudo em string se não usar função de comparação.
console.log("Após sort():", vetorSort );// copia o vetor original

// 3️⃣ indexOf(valor) – Índice do primeiro elemento 1
//vetor.indexOf(valor);
console.log("indexOf(3):", vetor.indexOf(3)); 

//// 4️⃣ lastIndexOf(valor) – Índice do último elemento 1
//vetor.lastIndexOf(valor);
console.log("lastIndexOf(5): ", vetor.lastIndexOf(5));

// 5️⃣ includes(valor) – Verifica se existe o valor  //valor está presente → retorna true.
//vetor.includes(valor);
console.log("includes(3): ", vetor.includes(3)); //true 


// [...] faz uma cópia do vetor, evitando que métodos como reverse() alterem o vetor original.

// Declaramos vetor uma única vez com let, evitando o erro de redeclaração.

// split() transforma string em array; join() transforma array em string.