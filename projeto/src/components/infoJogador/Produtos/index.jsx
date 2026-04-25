import './style.css';

const Produtos = () => {
  // Uma lista (array) com os serviços/produtos para facilitar
  const servicos = [
    {
      id: 1,
      titulo: "Abertura de Empresa",
      descricao: "Cuidamos de toda a burocracia para você abrir seu CNPJ de forma rápida, segura e sem dores de cabeça."
    },
    {
      id: 2,
      titulo: "Imposto de Renda",
      descricao: "Declaração de IR para pessoa física e jurídica. Evite multas e fique em dia com a Receita Federal."
    },
    {
      id: 3,
      titulo: "Consultoria Financeira",
      descricao: "Planejamento estratégico e análise de fluxo de caixa para otimizar os lucros do seu negócio."
    }
  ];

  return (
    <section className="produtos-container">
      <div className="produtos-header">
        <h1>Nossos Serviços</h1>
        <p>Soluções completas para o crescimento da sua empresa</p>
      </div>

      <div className="cards-grid">
        {/* O 'map' percorre a nossa lista ali de cima e cria um card para cada item automaticamente */}
        {servicos.map((servico) => (
          <div key={servico.id} className="card-produto">
            <h3>{servico.titulo}</h3>
            <p>{servico.descricao}</p>
            <button className="btn-produto">Saiba Mais</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Produtos;