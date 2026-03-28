import { useState }  from "react";
import './style.css'

function InfoCurso() {
    const [nome, setNome]= useState("programação de aplicativos")
    const[cargaHoraria, setcargaHoraria]= useState(90)
    const[local, setLocal]= useState("Senai")


    return(
        <div className="info-curso">
            <h2>dados do curso:</h2>
            <p>nome: {nome}</p>
            <p>carga horária: {cargaHoraria}</p>
            <p>local: {local}</p>

        </div>
    )
}

export default InfoCurso