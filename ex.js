let vetor = [];  // cria um vetor vazio para armazenar as palavras
let qtd = prompt("Quantas palavras você quer digitar? "); // pergunta quantas palavras o usuário vai digitar

// função para preencher o vetor com as palavras digitadas pelo usuário
function preencherVetor(vetor, qtd){
    for(let i=0; i<qtd; i++){  // repete qtd vezes
        let p = prompt(`Digite a palavra ${i+1}`); // pede a palavra ao usuário
        vetor.push(p); // adiciona a palavra no vetor
    }
    return vetor; // retorna o vetor preenchido
}

// função que recebe um vetor e retorna apenas os palíndromos
function retornaPalindromos(vetor){
    let resultado = []; // cria um vetor para guardar os palíndromos

    for(let i=0; i<vetor.length; i++){ // percorre cada palavra do vetor
        let palavra = vetor[i].trim(); // remove espaços extras no começo/fim da palavra

        if(palavra.length === 0) continue; // ignora palavras vazias

        // inverte a palavra: divide em letras -> inverte -> junta de novo
        let invertida = palavra.split("").reverse().join("");

        // compara a palavra original com a invertida
        if (palavra === invertida){
            resultado.push(palavra); // se for igual, adiciona no vetor resultado
        }
    }
    return resultado; // retorna só as palavras que eram palíndromos
}

// chama a função para preencher o vetor
vetor = preencherVetor(vetor, qtd);

// chama a função que filtra os palíndromos
let res = retornaPalindromos(vetor);

// exibe no console o vetor final de palíndromos encontrados
console.log("Palíndromos encontrados:", res);
