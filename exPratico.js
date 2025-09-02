if(typeof(Storage)!=="undefined"){
    //verifica se existe uma chave "nome" no localStorage
    if(!localStorage.getItem("nome")){
        //se n existe cria o elemento e coloca o valor IFSP
        localStorage.setItem("nome", "IFSP");

    }else{
        //se já existe, imprime no console
        console.log(localStorage.getItem("nome"));
    }
}else{
    //webstorage nao funciona no navegador
}