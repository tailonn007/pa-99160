// --- Elementos de Entrada (Inputs) ---
const inNomeCompleto = document.getElementById('nomeAtleta');
const inNomeCamisa = document.getElementById('nomeCamisa');
const inIdade = document.getElementById('idade');
const inNumero = document.getElementById('numero');
const inPosicao = document.getElementById('posicao');
const btnEscalar = document.getElementById('btnEscalar');

// --- Elementos de Saída (Preview na Camisa) ---
const printNome = document.getElementById('printNome');
const printNumero = document.getElementById('printNumero');
const printIdade = document.getElementById('printIdade');
const printPosicao = document.getElementById('printPosicao');
const camisaVisual = document.getElementById('camisaVisual');

const gridElenco = document.getElementById('gridElenco');


// --- FUNÇÃO 1: Atualização em Tempo Real (AÇÃO!) ---
// 'input' detecta qualquer mudança enquanto você digita
inNomeCamisa.addEventListener('input', () => {
    // Força maiúsculas e limita tamanho visualmente se necessário
    let texto = inNomeCamisa.value.toUpperCase();
    
    if (texto.length === 0) {
        printNome.innerText = "SEU NOME";
    } else {
        printNome.innerText = texto;
    }
});

inNumero.addEventListener('input', () => {
    let num = inNumero.value;
    // Limita entre 1 e 99
    if (num > 99) inNumero.value = 99;
    if (num < 1 && num.length > 0) inNumero.value = 1;
    
    printNumero.innerText = inNumero.value || "?";
});

// Atualiza info adicional quando mudam
inIdade.addEventListener('input', () => printIdade.innerText = inIdade.value || "--");
inPosicao.addEventListener('change', () => printPosicao.innerText = inPosicao.value);


// --- FUNÇÃO 2: Escalar o Jogador ---
btnEscalar.addEventListener('click', escalarJogador);

function escalarJogador() {
    // 1. Capturar valores finais
    const dados = {
        nomeCompleto: inNomeCompleto.value,
        nomeCamisa: inNomeCamisa.value.toUpperCase(),
        numero: inNumero.value,
        idade: inIdade.value,
        posicao: inPosicao.value
    };

    // 2. Validação básica
    if (!dados.nomeCompleto || !dados.nomeCamisa || !dados.numero) {
        alert("⚠️ Técnico, precisamos de Nome, Nome na Camisa e Número!");
        return;
    }

    // 3. Efeito Visual de "Ação" na camisa de preview (ela gira)
    camisaVisual.style.transform = "rotateY(360deg)";
    
    // Espera a animação acabar (0.5s) para adicionar na lista e limpar
    setTimeout(() => {
        camisaVisual.style.transform = "rotateY(0deg)";
        adicionarAoElenco(dados);
        limparFormulario();
    }, 500);
}

// --- FUNÇÃO 3: Criar Miniatura no Elenco ---
function adicionarAoElenco(atleta) {
    // Criar o container da miniatura
    const divArea = document.createElement('div');
    divArea.className = "area-mini-camisa";
    divArea.title = `Nome: ${atleta.nomeCompleto} | Posição: ${atleta.posicao}`;

    // Criar a mini camisa (copiando a estrutura HTML da grande)
    const miniCamisaHTML = `
        <div class="mini-camisa">
            <div class="gola"></div>
            <span class="nome-camisa">${atleta.nomeCamisa}</span>
            <span class="numero-camisa">${atleta.numero}</span>
        </div>
    `;

    divArea.innerHTML = miniCamisaHTML;

    // Adicionar ao grid
    gridElenco.appendChild(divArea);
}

function limparFormulario() {
    inNomeCompleto.value = "";
    inNomeCamisa.value = "";
    inNumero.value = "";
    inIdade.value = "";
    // Reseta o preview
    printNome.innerText = "SEU NOME";
    printNumero.innerText = "?";
    printIdade.innerText = "--";
}