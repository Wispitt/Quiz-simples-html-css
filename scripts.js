const respostaLuffy = document.querySelector(".repostaU");
const botaoEnviar = document.querySelector(".enviarR");
const resultadoDaResposta = document.querySelector(".resultado");

function pegarResposta() {
    console.log(respostaLuffy.value);
    if (respostaLuffy.value == "Luffy") {
        resultadoDaResposta.textContent = "Parabéns você acertou!";
        resultadoDaResposta.style.color = "green";
    } 
    else {
        resultadoDaResposta.textContent = "Resposta incorreta!";
        resultadoDaResposta.style.color = "red";
    }

}

botaoEnviar.addEventListener("click", pegarResposta);