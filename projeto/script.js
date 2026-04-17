// Inputs
const inNomeCompleto = document.getElementById('nomeAtleta');
const inNomeCamisa = document.getElementById('nomeCamisa');
const inIdade = document.getElementById('idade');
const inNumero = document.getElementById('numero');
const inPosicao = document.getElementById('posicao');
const inNacionalidade = document.getElementById('nacionalidade');
const inHabilidade = document.getElementById('habilidade');
const inResumo = document.getElementById('resumo');
const btnEscalar = document.getElementById('btnEscalar');

// Preview Elements
const printNome = document.getElementById('printNome');
const printNumero = document.getElementById('printNumero');
const printIdade = document.getElementById('printIdade');
const printPosicao = document.getElementById('printPosicao');
const camisaVisual = document.getElementById('camisaVisual');
const gridElenco = document.getElementById('gridElenco');

// Live Preview Events
inNomeCamisa.addEventListener('input', () => printNome.innerText = inNomeCamisa.value.toUpperCase() || "SEU NOME");
inNumero.addEventListener('input', () => printNumero.innerText = inNumero.value || "?");
inIdade.addEventListener('input', () => printIdade.innerText = inIdade.value || "--");
inPosicao.addEventListener('change', () => printPosicao.innerText = inPosicao.value);

// Escalar Jogador
btnEscalar.addEventListener('click', () => {
    const atleta = {
        nomeCompleto: inNomeCompleto.value,
        nomeCamisa: inNomeCamisa.value.toUpperCase(),
        numero: inNumero.value,
        idade: inIdade.value,
        posicao: inPosicao.value,
        nacionalidade: inNacionalidade.value || "Brasileiro",
        habilidade: inHabilidade.value || "Técnica",
        resumo: inResumo.value || "Sem resumo disponível."
    };

    if (!atleta.nomeCompleto || !atleta.nomeCamisa || !atleta.numero) {
        alert("⚠️ Técnico, preencha Nome, Nome na Camisa e Número!");
        return;
    }

    // Efeito de giro
    camisaVisual.style.transform = "rotateY(360deg)";
    
    setTimeout(() => {
        camisaVisual.style.transform = "rotateY(0deg)";
        adicionarAoElenco(atleta);
        limparFormulario();
    }, 500);
});

function adicionarAoElenco(atleta) {
    const card = document.createElement('div');
    card.className = "card-atleta";
    
    card.innerHTML = `
        <div class="mini-camisa">
            <span class="nome-camisa">${atleta.nomeCamisa}</span>
            <span class="numero-camisa">${atleta.numero}</span>
        </div>
        <div class="atleta-info">
            <h3>${atleta.nomeCompleto}</h3>
            <p><strong> Origem:</strong> ${atleta.nacionalidade}</p>
            <p><strong> Habilidade Marcante:</strong> ${atleta.habilidade}</p>
            <p><strong> Posição:</strong> ${atleta.posicao} (${atleta.idade} anos)</p>
            <p class="atleta-bio">"${atleta.resumo}"</p>
        </div>
    `;
    gridElenco.appendChild(card);
}

function limparFormulario() {
    [inNomeCompleto, inNomeCamisa, inNumero, inIdade, inNacionalidade, inHabilidade, inResumo].forEach(input => input.value = "");
    printNome.innerText = "SEU NOME";
    printNumero.innerText = "?";
    printIdade.innerText = "--";
}