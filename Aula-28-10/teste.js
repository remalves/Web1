
function carregarCarros(){
    //Pedido do cliente pro servidor
    fetch("https://ifsp.ddns.net/webservices/carro/carro")
    .then((resposta)=> 
    {
        if(!resposta.ok){ //.ok códigos de 200 até 299
            throw new Error("Erro na requisição");
        }
        return resposta.json();//pressuposto que é json
    }) 
    // se a resposta veio correta e transformada em JSON, faço:
    .then((carros)=>{
        let ul =  document.querySelector("ul");
        for(let carro of carros){
            console.log(carro);
            let li = document.createElement("li");
            li.innerText = `${carro.nome} (${carro.fabricante}) - R$ ${carro.preco}`;
            ul.append(li);

            
        }
    }) 
    .catch((error) =>{
        console.log(`Deu problema:${error.menssage}`);
    }); 

    //fetch() -> faço o pedido, faço a requisição, mando o pedido pro servidor, dentro do fetch colocamos o endereço 
}

function cadastrarCarros(){
    const options = {
        method: "POST", // pra cadastrar dados
        body: JSON.stringify({
            nome:"Rebeca",
            fabricante:"RRR",
            ano:1975,
            preco:17000,
            potencia:50
        }), 
        headers: {
            "Content-Type" : "application/json"
        }
    }
    
    fetch("https://ifsp.ddns.net/webservices/carro/carro",options)
        .then((resposta)=> 
            {
                if(!resposta.ok){
                    throw new Error("Erro na requisição");
                }
                return resposta.json();
            })
        .then((carro)=>{
            console.log(carro);
        })
        .catch((error) => {console.log(error.menssage)});
}

carregarCarros();


