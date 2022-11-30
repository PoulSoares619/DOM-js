const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent, evento.target.parentNode);
    })
})


function manipulaDados(operacao, controle) {
    const pecas = controle.querySelector(".controle-contador");

    if(operacao === "-"){
        pecas.value = parseInt(pecas.value) - 1;
    } else{
        pecas.value = parseInt(pecas.value) + 1;
    }
}

