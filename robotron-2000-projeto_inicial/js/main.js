const controle = document.querySelectorAll("[data-controle]");

//peças para  montagemn
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

//manipulando array com laço dee repet ao clicar
controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    })
})



//adc valor onclick
function manipulaDados(operacao, controle) {
    const pecas = controle.querySelector("[data-contador]");

    if(operacao === "-"){
        pecas.value = parseInt(pecas.value) - 1;
    } else{
        pecas.value = parseInt(pecas.value) + 1;
    }
}

