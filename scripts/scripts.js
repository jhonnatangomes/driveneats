const item = document.querySelectorAll(".item");
const item_por_categoria = 3;
let prato_s, bebida_s, sobremesa_s;
prato_s = bebida_s = sobremesa_s = 0;

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
            prato_s = 1;
            
        }
        else if(element.classList.contains("bebida")){
            for(let i = 0; i < item_por_categoria; i++){
                bebida[i].classList.remove("selecionado");
                bebida[i].querySelector("ion-icon").classList.remove("display");
            }
            bebida_s = 1;
        }
        else if(element.classList.contains("sobremesa")){
            for(let i = 0; i < item_por_categoria; i++){
                sobremesa[i].classList.remove("selecionado");
                sobremesa[i].querySelector("ion-icon").classList.remove("display");
            }
            sobremesa_s = 1;
        }

        element.classList.add("selecionado");
        element.querySelector("ion-icon").classList.add("display");
    }
    
    fecharpedido();
}

function fecharpedido(){
    const botao = document.querySelector("button");

    if(prato_s === 1 && bebida_s === 1 && sobremesa_s === 1){
        botao.style.backgroundColor = "#32B72F";
        botao.innerHTML = "Fechar pedido";
    }
    else{
        botao.style.backgroundColor = "#CBCBCB";
        botao.innerHTML = "Selecione os 3 itens para fechar o pedido";
    }

}