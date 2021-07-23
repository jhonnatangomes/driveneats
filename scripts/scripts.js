const item = document.querySelectorAll(".item");
const item_por_categoria = 3;

let prato_s, bebida_s, sobremesa_s;
prato_s = bebida_s = sobremesa_s = 0;

let prato_preco, bebida_preco, sobremesa_preco;
let prato_nome, bebida_nome, sobremesa_nome;


for(let i = 0; i < item.length; i++){
    item[i].addEventListener("click", function(){ select(item[i]); });
}

function select(element){

    const prato = document.querySelectorAll(".prato");
    const bebida = document.querySelectorAll(".bebida");
    const sobremesa = document.querySelectorAll(".sobremesa");

    //Se o elemento contiver a classe selecionado, este precisa ser desmarcado
    if(element.classList.contains("selecionado")){
        element.classList.remove("selecionado");
        element.querySelector("ion-icon").classList.remove("display");

        //Caso o elemento seja desselecionado, o contador da sua categoria
        //tem que ser setado para zero
        if(element.classList.contains("prato")){
            prato_s = 0;
        }
        else if(element.classList.contains("bebida")){
            bebida_s = 0;
        }
        else if(element.classList.contains("sobremesa")){
            sobremesa_s = 0;
        }

    }
    //Se não estiver selecionado, o elemento precisa ser selecionado, mas antes todos os
    //elementos selecionados da mesma categoria precisam ser desmarcados
    else{
        if(element.classList.contains("prato")){
            for(let i = 0; i < item_por_categoria; i++){
                prato[i].classList.remove("selecionado");
                prato[i].querySelector("ion-icon").classList.remove("display");
            }
            prato_s = 1; //contador sendo setado para 1 após seleção

            prato_preco = element.querySelector(".preco").innerHTML;
            prato_preco = prato_preco.substr(3, 7);
            prato_preco = prato_preco.replace(",", ".");
            prato_preco = Number(prato_preco);
            prato_nome = element.querySelector(".nome-item").innerHTML;
            
        }
        else if(element.classList.contains("bebida")){
            for(let i = 0; i < item_por_categoria; i++){
                bebida[i].classList.remove("selecionado");
                bebida[i].querySelector("ion-icon").classList.remove("display");
            }
            bebida_s = 1; //contador sendo setado para 1 após seleção

            bebida_preco = element.querySelector(".preco").innerHTML;
            bebida_preco = bebida_preco.substr(3, 7);
            bebida_preco = bebida_preco.replace(",", ".");
            bebida_preco = Number(bebida_preco);
            bebida_nome = element.querySelector(".nome-item").innerHTML;
        }
        else if(element.classList.contains("sobremesa")){
            for(let i = 0; i < item_por_categoria; i++){
                sobremesa[i].classList.remove("selecionado");
                sobremesa[i].querySelector("ion-icon").classList.remove("display");
            }
            sobremesa_s = 1; //contador sendo setado para 1 após seleção

            sobremesa_preco = element.querySelector(".preco").innerHTML;
            sobremesa_preco = sobremesa_preco.substr(3, 7);
            sobremesa_preco = sobremesa_preco.replace(",", ".");
            sobremesa_preco = Number(sobremesa_preco);
            sobremesa_nome = element.querySelector(".nome-item").innerHTML;
        }

        element.classList.add("selecionado");
        element.querySelector("ion-icon").classList.add("display");
    }
    
    fecharpedido();
}

function fecharpedido(){
    
    let total = prato_preco + bebida_preco + sobremesa_preco;
    total = total.toFixed(2);
    let pedido = document.querySelector(".pedido");
    let link = "https://wa.me/5517996674646?text=";
    let pedido_wpp = `Olá, gostaria de fazer o pedido: \n- Prato: ${prato_nome} \n- Bebida: ${bebida_nome} \n- Sobremesa: ${sobremesa_nome} \nTotal: R$ ${total}`;
    link += encodeURIComponent(pedido_wpp);

    if(prato_s === 1 && bebida_s === 1 && sobremesa_s === 1){
        pedido.innerHTML = '<a><button class="roboto">Fechar pedido</button></a>';
        pedido.querySelector("a").setAttribute("href", link);
        pedido.querySelector("a").setAttribute("target", "_blank")
        document.querySelector("button").style.backgroundColor = "green";
    }
    else{
        pedido.innerHTML = '<button class="roboto">Selecione os 3 itens para fechar o pedido</button>';        
    }

}