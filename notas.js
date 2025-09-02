// {} representa um objeto
// pares chave valor 
// chave : valor -> "nome" : "maria"
// representa um vetor ou conjunto de dados 

// Um valor pode ser:
// ➢String
// ➢Número
// ➢true ou false
// ➢null
// ➢Objeto
// ➢Array
// ➢Apenas strings devem estar entre aspas duplas

var pessoa = '{"nome": "José", "idade": 34}';
var json_convertido = JSON.parse(pessoa); 
// JSON.parse(string); ➢Converte uma string no formato JSON para um objeto em JavaScript

console.log(pessoa);
console.log(json_convertido);

// Depois de ser convertido em objeto, os dados podem ser acessados
// facilmente pelo JavaScript
var person = '{"nome": "José", "idade": 34}';
var objeto = JSON.parse(pessoa);
console.log(objeto.nome);

if(objeto.idade>18){
    console.log("Maior de idade!");
}else{
    console.log("Menor de idade!");
}

// Um objeto também pode ser transformado em JSON...

var objeto_pessoa = {
    "nome": "Maria",
    "idade": 26,

}

var json_string =  JSON.stringify(objeto_pessoa);
console.log(json_string);


//usando

let texto = `{
    "nome":"IFSP", 
    "cidade": "Sanca", 
    "cursos": ["TII", "ADS", "BES"]
}`;

let dados = JSON.parse(texto);

//imprime o nome do objeto
console.log(dados.nome);
console.log(dados["nome"]);


//imprime o local do objeto 
console.log(dados.cidade);
console.log(dados["cidade"]);

//percorre a lista de cursos do objeto 
for (let curso of dados.cursos){
    console.log(curso);
}

for (let curso of dados["cursos"]){
    console.log(curso);
}

if("cidade" in dados){
    console.log(dados.cidade);
} else{
    console.log("nao ha cidade nos dados");
}

//remove a chave cidade do objeto 
delete dados.cidade;

//adiciona a chave cidade do objeto 
dados.cidade = "São Carlos";
//forma alternativa
dados["cidade"]="São Carlinhos";
console.log(dados.cidade);