// --- BANCADAS DE DADOS EM MEMÓRIA ---
let clientes = [];
let motos = [];
let carros = [];

// ==========================================
// LÓGICA DE CLIENTES
// ==========================================
function adicionarCliente() {
    const id = document.getElementById('clienteId').value;
    const nome = document.getElementById('clienteNome').value;
    const cpf = document.getElementById('clienteCpf').value;
    const email = document.getElementById('clienteEmail').value;
    const telefone = document.getElementById('clienteTelefone').value;

    if (!id || !nome || !cpf || !email || !telefone) {
        return alert("Preencha todos os 5 campos do Cliente!");
    }

    clientes.push({ id, nome, cpf, email, telefone });

    document.getElementById('clienteId').value = '';
    document.getElementById('clienteNome').value = '';
    document.getElementById('clienteCpf').value = '';
    document.getElementById('clienteEmail').value = '';
    document.getElementById('clienteTelefone').value = '';

    atualizarListaClientes();
}

function atualizarListaClientes() {
    const ul = document.getElementById('listaClientes');
    ul.innerHTML = '';
    clientes.forEach(c => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>ID:</strong> ${c.id} <br> <strong>Nome:</strong> ${c.nome} <br> <strong>CPF:</strong> ${c.cpf} <br> <strong>Email:</strong> ${c.email} <br> <strong>Tel:</strong> ${c.telefone}`;
        ul.appendChild(li);
    });
}

// ==========================================
// LÓGICA DE MOTOS
// ==========================================
function adicionarMoto() {
    const id = document.getElementById('motoId').value;
    const marca = document.getElementById('motoMarca').value;
    const modelo = document.getElementById('motoModelo').value;
    const cilindradas = document.getElementById('motoCilindradas').value;
    const cor = document.getElementById('motoCor').value;

    if (!id || !marca || !modelo || !cilindradas || !cor) {
        return alert("Preencha todos os 5 campos da Moto!");
    }

    motos.push({ id, marca, modelo, cilindradas, cor });

    document.getElementById('motoId').value = '';
    document.getElementById('motoMarca').value = '';
    document.getElementById('motoModelo').value = '';
    document.getElementById('motoCilindradas').value = '';
    document.getElementById('motoCor').value = '';

    atualizarListaMotos();
}

function atualizarListaMotos() {
    const ul = document.getElementById('listaMotos');
    ul.innerHTML = '';
    motos.forEach(m => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>ID:</strong> ${m.id} <br> <strong>Marca:</strong> ${m.marca} <br> <strong>Modelo:</strong> ${m.modelo} <br> <strong>CC:</strong> ${m.cilindradas} <br> <strong>Cor:</strong> ${m.cor}`;
        ul.appendChild(li);
    });
}

// ==========================================
// LÓGICA DE CARROS
// ==========================================
function adicionarCarro() {
    const id = document.getElementById('carroId').value;
    const marca = document.getElementById('carroMarca').value;
    const modelo = document.getElementById('carroModelo').value;
    const ano = document.getElementById('carroAno').value;
    const placa = document.getElementById('carroPlaca').value;

    if (!id || !marca || !modelo || !ano || !placa) {
        return alert("Preencha todos os 5 campos do Carro!");
    }

    carros.push({ id, marca, modelo, ano, placa });

    document.getElementById('carroId').value = '';
    document.getElementById('carroMarca').value = '';
    document.getElementById('carroModelo').value = '';
    document.getElementById('carroAno').value = '';
    document.getElementById('carroPlaca').value = '';

    atualizarListaCarros();
}

function atualizarListaCarros() {
    const ul = document.getElementById('listaCarros');
    ul.innerHTML = '';
    carros.forEach(c => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>ID:</strong> ${c.id} <br> <strong>Marca:</strong> ${c.marca} <br> <strong>Modelo:</strong> ${c.modelo} <br> <strong>Ano:</strong> ${c.ano} <br> <strong>Placa:</strong> ${c.placa}`;
        ul.appendChild(li);
    });
}