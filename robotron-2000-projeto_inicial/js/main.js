
const bracos = document.querySelector("#bracos");

const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.textContent)
    })
})


function manipulaDados(operacao) {
    if(operacao === "-"){
        bracos.value = parseInt(bracos.value) - 1;
    } else{
        bracos.value = parseInt(bracos.value) + 1;
    }
}

