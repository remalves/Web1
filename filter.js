//Remove certos elementos da lista.
//Não altera os elementos que sobrarem.
//➢Usado para verificar um vetor de entrada e filtrá-lo conforme a regra especificada

// Apenas strings com mais de 3 caracteres

function f1(inp){
    if (inp.length > 3){
        return true;
    }
    return false;
}

var nomes = ["ana", "maria","joao", "chá","","ifsp","ads"];
var res = nomes.filter(f1);
console.log(res);