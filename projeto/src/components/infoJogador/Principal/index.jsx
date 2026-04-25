import { useNavigate } from 'react-router-dom';
import './style.css';

const Principal = () => {
  const navigate = useNavigate();

  return (
    <div className="principal-wrapper">
      {/* 1. SECÇÃO HERO (Impacto Inicial) */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="badge">Contabilidade Digital & Inteligente</span>
          <h1>Sua empresa no <span className="text-gradient">Próximo Nível</span></h1>
          <p>
            Transformamos a complexidade burocrática em simplicidade estratégica. 
            Contabilidade de alta performance para quem não tem tempo a perder.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={() => navigate('/produtos')}>
              Conhecer Serviços
            </button>
            <button className="btn-secondary" onClick={() => navigate('/sobre-nos')}>
              Nossa História
            </button>
          </div>
        </div>
      </section>

      {/* 2. SECÇÃO DE DIFERENCIAIS (Cards) */}
      <section className="features-section">
        <div className="section-title">
          <h2>Por que a Contabilidade Simples?</h2>
          <div className="underline"></div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Agilidade Real</h3>
            <p>Respostas em tempo recorde. Sem esperas infinitas por e-mails.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Segurança Total</h3>
            <p>Seus dados protegidos com criptografia de ponta a ponta.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Foco em Lucro</h3>
            <p>Não apenas impostos; analisamos como sua empresa pode economizar.</p>
          </div>
        </div>
      </section>

      {/* 3. SECÇÃO CALL TO ACTION */}
      <section className="cta-final">
        <div className="cta-box">
          <h2>Pronto para começar?</h2>
          <p>Junte-se a centenas de empresas que já simplificaram a sua gestão.</p>
          <button className="btn-cta" onClick={() => navigate('/fale-conosco')}>
            Falar com um Especialista
          </button>
        </div>
      </section>
    </div>
  );
};

export default Principal;