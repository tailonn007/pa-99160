import './style.css';

const SobreNos = () => {
  // Lista com os pilares da empresa para gerar os cartões automaticamente
  const pilares = [
    {
      id: 1,
      titulo: "Nossa Missão",
      descricao: "Descomplicar a contabilidade para empreendedores, oferecendo um serviço transparente, ágil e focado no crescimento real do seu negócio.",
      icone: "🎯"
    },
    {
      id: 2,
      titulo: "Nossa Visão",
      descricao: "Ser a contabilidade digital de referência, reconhecida pela inovação tecnológica, segurança de dados e verdadeira parceria com os nossos clientes.",
      icone: "🚀"
    },
    {
      id: 3,
      titulo: "Nossos Valores",
      descricao: "Ética inegociável, transparência, inovação constante, empatia com o cliente e responsabilidade nas entregas.",
      icone: "💎"
    }
  ];

  return (
    <section className="sobre-container">
      <div className="sobre-header">
        <h1>Sobre a <span className="destaque-gradiente">Contabilidade Simples</span></h1>
        <p>Mais do que números, nós cuidamos do seu sucesso.</p>
      </div>

      <div className="sobre-conteudo">
        
        {/* Secção da História */}
        <div className="texto-historia">
          <h3>A Nossa História</h3>
          <p>
            Nascemos com o propósito de transformar a forma como as empresas lidam com as suas obrigações fiscais e financeiras. Sabemos que empreender é um desafio, e é por isso que criámos a <strong>Contabilidade Simples</strong>.
          </p>
          <p>
            Aliamos tecnologia de ponta com um atendimento humanizado para garantir que não perde tempo com a burocracia. A nossa equipa de especialistas está sempre pronta para oferecer as melhores estratégias para o seu perfil, permitindo que foque apenas naquilo que realmente importa: <strong>fazer o seu negócio crescer.</strong>
          </p>
        </div>

        {/* Secção dos Cartões de Missão, Visão e Valores */}
        <div className="pilares-grid">
          {pilares.map((pilar) => (
            <div key={pilar.id} className="card-pilar">
              <span className="icone-pilar">{pilar.icone}</span>
              <h4>{pilar.titulo}</h4>
              <p>{pilar.descricao}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SobreNos;