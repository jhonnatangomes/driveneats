const item = document.querySelectorAll(".item");
const item_por_categoria = 3;

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
    }
    //Se não estiver selecionado, o elemento precisa ser selecionado, mas antes todos os
    //elementos selecionados da mesma categoria precisam ser desmarcados
    else{
        if(element.classList.contains("prato")){
            for(let i = 0; i < item_por_categoria; i++){
                prato[i].classList.remove("selecionado");
                prato[i].querySelector("ion-icon").classList.remove("display");
            }
            
        }
        else if(element.classList.contains("bebida")){
            for(let i = 0; i < item_por_categoria; i++){
                bebida[i].classList.remove("selecionado");
                bebida[i].querySelector("ion-icon").classList.remove("display");
            }
        }
        else if(element.classList.contains("sobremesa")){
            for(let i = 0; i < item_por_categoria; i++){
                sobremesa[i].classList.remove("selecionado");
                bebida[i].querySelector("ion-icon").classList.remove("display");
            }
        }

        element.classList.add("selecionado");
        element.querySelector("ion-icon").classList.add("display");
    }

    

    
}