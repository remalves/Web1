if(typeof(Storage)!== "undefined"){
    //ok,podemos usar o WebStorage
}else{
    //ops, WebStorage não funciona no navegador
}


// Adiciona ou atualiza o item "idade" para "20"
localStorage.setItem("Idade", "20");
// Obtém o valor do item 'login'. Retorna null caso não exista.
let x = localStorage.setItem("login");
// Remove o item "carro".
localStorage.removeItem("carro");
// Retorna o primeiro item do Storage (se existir).
let primeiro = localStorage.key(0);
// Retorna o número de elementos que o Storage possui agora.
let qdte = localStorage.length;
// Remove todos os elementos do Storage.
localStorage.clear(); 