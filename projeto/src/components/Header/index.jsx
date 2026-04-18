import {link, navlink} from'react-router-dom'
import './style.css'
import logo from '../../assets/logo.png'


export default function Header() {
    return (
        <header>
            <div>
                <link to="/">
                <img src= {logo} alt="logo da empresa" />
                <span>contabilidade simples</span>
                </link>

                <nav>
                    <navlink to="/sobre-nos">Sobre Nós</navlink>
                    <navlink to="/fale-conosco">Fale Conosco</navlink>
                </nav>
                
            </div>
        </header>
    )
}