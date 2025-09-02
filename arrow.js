
const soma = (a,b) => a+b;
console.log(soma(4,5));

let hello=()=>"Hello world";
console.log(hello());

function SuperFuncao(a,b){
    let subtracao = a-b;
    subtracao = subtracao-2;
    let diaDoMes = new Date().getDate();
    return diaDoMes;
}

const SuperFuncaoVersao2 = (a,b) => {
    let subtracao = a-b;
    subtracao = subtracao-2;
    let diaDoMes = new Date().getDate();
    return diaDoMes;
}

// se você tiver apenas um parâmetro, você também pode pular os parênteses:
let hi = val => "Hi " + val;
console.log(hi("Rebeca"));
// Você só pode omitir a palavra-chave return e as chaves se a função for uma única instrução.a

let MyFunction=(x,y)=>{return x*y};
console.log(MyFunction(5,3));