import express from 'express';
import cors from 'cors';
import { Sequelize, DataTypes } from 'sequelize'; // Importamos o Sequelize

const app = express(); 

app.use(express.json()); // Permite receber dados em JSON
app.use(cors());         // Permite requisições do frontend em HTML

// ------------------------------------------------------------------
// 1. CONFIGURAÇÃO E CONEXÃO COM O BANCO DE DADOS (MySQL)
// ------------------------------------------------------------------
// Ajustado para o nome do banco 'teste' e 'Sequelize' com S maiúsculo
const sequelize = new Sequelize('teste', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

// ------------------------------------------------------------------
// 2. DEFINIÇÃO DOS MODELOS (Tabelas do Banco de Dados)
// ------------------------------------------------------------------
const Aluno = sequelize.define('Aluno', {
    nome: DataTypes.STRING,
    idade: DataTypes.INTEGER,
    matricula: DataTypes.STRING,
    email: DataTypes.STRING
});

const Professor = sequelize.define('Professor', {
    nome: DataTypes.STRING,
    departamento: DataTypes.STRING,
    titulacao: DataTypes.STRING,
    email: DataTypes.STRING
});

const Curso = sequelize.define('Curso', {
    nome: DataTypes.STRING,
    duracao_semestres: DataTypes.INTEGER,
    turno: DataTypes.STRING,
    vagas: DataTypes.INTEGER
});

// ------------------------------------------------------------------
// 3. FUNÇÃO GERADORA DE ROTAS (CRUD conectado ao Banco de Dados)
// ------------------------------------------------------------------
// Modificado para usar async/await, pois consultas ao banco demoram um tempo para responder
const criarEndpointsCRUD = (rota, Model) => {
    
    // GET: Listar todos
    app.get(rota, async (req, res) => {
        try {
            const dados = await Model.findAll();
            res.json(dados);
        } catch (error) {
            res.status(500).json({ erro: error.message });
        }
    });

    // GET: Buscar por ID
    app.get(`${rota}/:id`, async (req, res) => {
        try {
            const item = await Model.findByPk(req.params.id);
            item ? res.json(item) : res.status(404).json({ erro: "Registro não encontrado" });
        } catch (error) {
            res.status(500).json({ erro: error.message });
        }
    });

    // POST: Criar novo item no banco
    app.post(rota, async (req, res) => {
        try {
            const novoItem = await Model.create(req.body);
            res.status(201).json(novoItem);
        } catch (error) {
            res.status(500).json({ erro: error.message });
        }
    });

    // PUT: Atualizar existente no banco
    app.put(`${rota}/:id`, async (req, res) => {
        try {
            const item = await Model.findByPk(req.params.id);
            if (item) {
                await item.update(req.body);
                res.json(item);
            } else {
                res.status(404).json({ erro: "Registro não encontrado" });
            }
        } catch (error) {
            res.status(500).json({ erro: error.message });
        }
    });

    // DELETE: Apagar do banco
    app.delete(`${rota}/:id`, async (req, res) => {
        try {
            const item = await Model.findByPk(req.params.id);
            if (item) {
                await item.destroy();
                res.status(204).send(); 
            } else {
                res.status(404).json({ erro: "Registro não encontrado" });
            }
        } catch (error) {
            res.status(500).json({ erro: error.message });
        }
    });
};

// ------------------------------------------------------------------
// 4. INICIALIZANDO OS ENDPOINTS
// ------------------------------------------------------------------
criarEndpointsCRUD('/alunos', Aluno);
criarEndpointsCRUD('/professores', Professor);
criarEndpointsCRUD('/cursos', Curso);

// ------------------------------------------------------------------
// 5. SINCRONIZAR BANCO E LIGAR O SERVIDOR
// ------------------------------------------------------------------
const PORT = 3000;

// O sequelize.sync() garante que as tabelas existam no MySQL antes do servidor aceitar requisições
sequelize.sync({ alter: true }) 
    .then(() => {
        console.log('✅ Banco de dados conectado e sincronizado com sucesso!');
        
        app.listen(PORT, () => {
            console.log(`🚀 Servidor rodando com sucesso na porta ${PORT}!`);
            console.log(`Acesse http://localhost:${PORT}/alunos para testar.`);
        });
    })
    .catch(error => {
        console.error('❌ Não foi possível conectar ao banco de dados:', error);
    });