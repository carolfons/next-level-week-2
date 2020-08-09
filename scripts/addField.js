//Passos:
//1.procurar o botão
//2.quando clicar no botão executar a ação
    //ação: duplicar os campos e colocar na página

//procurando o botão
document.querySelector("#add-time")
//quando clicar no botão
.addEventListener("click", cloneField)

//executar uma ação
function cloneField(){
    //duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)//boolean quando true copia a div selecionada
    
    //limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')
    fields[0].value=""
    fields[1].value=""
    
    //colocar na página
    document.querySelector(".schedule-items").appendChild(newFieldContainer)

}