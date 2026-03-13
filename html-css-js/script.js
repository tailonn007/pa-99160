function gerarTabuada(){
    // pegar o valor do input no html.
    const numeroinput = document.getElementById("numeroInput")
    let numero = parseInt(numeroinput.value);

// pegar o elemento html onde a tabuada  será exibida.
    const resultadoDiv = document.getElementById("resultadodatabuada")
    resultadoDiv.innerHTML= "";

// verifica se a entrada é um numero válida
    if (isNaN(numero)  || numero === null || numero === ""){
        resultadoDiv.innerHTML = "<p> por favor, digite um numero... </p>";
    return;

}
// adicionar titulo  para tabuada.
    resultadoDiv.innerHTML += `<h2>tabuada do número: ${numero}</h2>`;

// laço de repetição para gerar tabuada de 1 até 10.
    for (let i = 1; i <= 10; i++){
        let resultado = numero * i;
        resultadoDiv.innerHTML += `<p> ${numero} x ${i} = ${resultado}</p>`;
    }
}


const gerarBotao =  document.getElementById("gerarBotao");
gerarBotao.addEventListener("click", gerarTabuada);