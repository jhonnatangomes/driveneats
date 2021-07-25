let prato_preco, bebida_preco, sobremesa_preco;
let prato_nome, bebida_nome, sobremesa_nome;
let itens_escolhidos = 0;
let nome, endereco;
let link;

function selecionar_prato(elemento){
    const prato_s = document.querySelector(".container-itens .prato.selecionado");

    //Se houver um prato já previamente selecionado, esse bloco de código remove todas
    //as bordas dos pratos selecionados e reduz o contador de itens escolhidos
    if(prato_s !== null){
        prato_s.classList.remove("selecionado");
        prato_s.querySelector("ion-icon").classList.remove("display");
        itens_escolhidos -= 1;
    }
    //Caso o elemento clicado não esteja previamente selecionado esse bloco de código
    //adiciona as bordas e aumenta o contador de itens escolhidos
    if(prato_s !== elemento){
        elemento.classList.add("selecionado");
        elemento.querySelector("ion-icon").classList.add("display");

        prato_preco = converterpreco(elemento.querySelector(".preco").innerHTML);
        prato_nome = elemento.querySelector(".nome-item").innerHTML;
        itens_escolhidos += 1;
    }    

    fecharpedido();
}

function selecionar_bebida(elemento){
    const bebida_s = document.querySelector(".container-itens .bebida.selecionado");
    
    if(bebida_s !== null){
        bebida_s.classList.remove("selecionado");
        bebida_s.querySelector("ion-icon").classList.remove("display");
        itens_escolhidos -= 1;
    }
    if(bebida_s !== elemento){
        elemento.classList.add("selecionado");
        elemento.querySelector("ion-icon").classList.add("display");
        
        bebida_preco = converterpreco(elemento.querySelector(".preco").innerHTML);
        bebida_nome = elemento.querySelector(".nome-item").innerHTML;
        itens_escolhidos += 1;
    }   
    
    fecharpedido();
}

function selecionar_sobremesa(elemento){
    const sobremesa_s = document.querySelector(".container-itens .sobremesa.selecionado");
    
    if(sobremesa_s !== null){
        sobremesa_s.classList.remove("selecionado");
        sobremesa_s.querySelector("ion-icon").classList.remove("display");
        itens_escolhidos -= 1;
    }
    if(sobremesa_s !== elemento){
        elemento.classList.add("selecionado");
        elemento.querySelector("ion-icon").classList.add("display");

        sobremesa_preco = converterpreco(elemento.querySelector(".preco").innerHTML);
        sobremesa_nome = elemento.querySelector(".nome-item").innerHTML;
        itens_escolhidos += 1;
    }

    fecharpedido();
}

function converterpreco(preco){

    let preco_convertido = preco.substr(3, 7); //Escolhe só a parte numérica do preço
    preco_convertido = Number(preco_convertido.replace(",", "."));

    return preco_convertido;

}

function fecharpedido(){
    const botao = document.querySelector("button");

    if(itens_escolhidos === 3){
        botao.style.backgroundColor = "#32B72F";
        botao.innerHTML = "Fechar pedido";
        botao.setAttribute("onclick", "prompt_dados();")
    }
    else{
        botao.style.backgroundColor = "#CBCBCB";
        botao.innerHTML = "Selecione os 3 itens para fechar o pedido";
        botao.removeAttribute("onclick");
    }

}

function prompt_dados(){
    ligar_blur();
    const confirmacao_dados = document.querySelector("#confirmacao-dados");
    confirmacao_dados.style.display = "flex";
    esconder_confirmacao_pedido();
}

function ligar_blur(){
    const blur = document.querySelector(".confirmacao-pedido");
    blur.style.display = "flex";
}

function esconder_prompt_dados(){
    const confirmacao_dados = document.querySelector("#confirmacao-dados");
    confirmacao_dados.style.display = "none";
}

function esconder_confirmacao_pedido(){
    const confirmacao_pedido = document.querySelector("#confirmacao-pedido");
    confirmacao_pedido.style.display = "none";
}


function confirmar_dados(){
    const input = document.querySelector("#confirmacao-dados");
    nome = input.querySelector(".nome input").value;
    endereco = input.querySelector(".endereco input").value;

    esconder_prompt_dados();
    confirmar_pedido();
}

function confirmar_pedido(){
    const confirmacao_pedido = document.querySelector("#confirmacao-pedido");
    let total = prato_preco + bebida_preco + sobremesa_preco;
    confirmacao_pedido.style.display = "flex";

    criarlink();

    confirmacao_pedido.querySelectorAll(".item-individual")[0].innerHTML = prato_nome;
    confirmacao_pedido.querySelectorAll(".item-individual")[1].innerHTML = prato_preco.toFixed(2);
    confirmacao_pedido.querySelectorAll(".item-individual")[2].innerHTML = bebida_nome;
    confirmacao_pedido.querySelectorAll(".item-individual")[3].innerHTML = bebida_preco.toFixed(2);
    confirmacao_pedido.querySelectorAll(".item-individual")[4].innerHTML = sobremesa_nome;
    confirmacao_pedido.querySelectorAll(".item-individual")[5].innerHTML = sobremesa_preco.toFixed(2);
    confirmacao_pedido.querySelector(".total").innerHTML = total.toFixed(2);
}

function fechar_confirmacao(){
    const confirmacao_pedido = document.querySelector(".confirmacao-pedido");
    confirmacao_pedido.style.display = "none";
}


function criarlink(){
    const tudo_certo = document.querySelector(".confirmacao-botoes a");
    let total = prato_preco + bebida_preco + sobremesa_preco;
    total = total.toFixed(2);
    link = "https://wa.me/5517997372284?text=";
    let pedido_wpp = `Olá, gostaria de fazer o pedido: \n- Prato: ${prato_nome} \n- Bebida: ${bebida_nome} \n- Sobremesa: ${sobremesa_nome} \nTotal: R$ ${total} \n\nNome: ${nome} \nEndereço: ${endereco}`;
    link += encodeURIComponent(pedido_wpp);

    tudo_certo.setAttribute("href", link);
}







