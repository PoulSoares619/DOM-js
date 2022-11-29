const somar = document.querySelector("#somar");
const subtrair = document.querySelector("#subtrair");
const bracos = document.querySelector("#bracos");

somar.addEventListener("click", () =>{manipulaDados("somar")});

subtrair.addEventListener("click", () =>{manipulaDados("subtrair")});

function manipulaDados(operacao) {
    if(operacao === "subtrair"){
        bracos.value = parseInt(bracos.value) - 1;
    } else{
        bracos.value = parseInt(bracos.value) + 1;
    }
}

