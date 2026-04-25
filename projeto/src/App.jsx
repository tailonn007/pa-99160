import { Route, Routes } from 'react-router-dom';
import './App.css';
import SobreNos from './components/infoJogador/SobreNos';
import Home from './components/infoJogador/Home';
import Header from './components/infoJogador/Header';
import Footer from './components/infoJogador/Footer';
import Principal from './components/infoJogador/Principal';
import FaleConosco from './components/infoJogador/FaleConosco';

// 1. Adicione a importação dos Produtos aqui!
import Produtos from './components/infoJogador/Produtos'; 

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/fale-conosco" element={<FaleConosco />} />
          
          {/* 2. Crie a nova rota para a página de Produtos */}
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;