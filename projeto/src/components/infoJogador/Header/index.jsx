import { Link } from 'react-router-dom';
import './style.css'; 
import logoImg from '../../../assets/logo.png'; 

const Header = () => {
  return (
    <header className="header-container">
      
      <div className="logo-area" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <img src={logoImg} alt="Logo Contabilidade Simples" style={{ width: '50px', height: 'auto' }} />
        <h2 style={{ color: 'white', margin: 0 }}>CONTABILIDADE SIMPLES</h2>
      </div>
      
      <nav className="nav-links">
        {/* Adicionei o Link dos PRODUTOS aqui, antes ou depois dos outros */}
        <Link to="/produtos">PRODUTOS</Link>
        <Link to="/sobre-nos">SOBRE NÓS</Link>
        <Link to="/fale-conosco">FALE CONOSCO</Link>
      </nav>
      
    </header>
  );
};

export default Header;