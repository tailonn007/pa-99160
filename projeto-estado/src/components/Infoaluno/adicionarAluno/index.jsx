import { useState } from "react";
import './style.css'

function adicionarAluno (){
    const[nome, setNome]= useState("")
    const[email, setEmail]= useState("")
    const[alunos,setAluno]= useState([])


    // função para adicionar um aluno na lista.
    const handlerAdicionarAluno = (Event) => {
        Event.preventDefult()


        // se os campos estiverem prenchidos...
        if (nome && email){
            setAluno([...Event, {nome, email}])// adicionar na lista.
            setNome("")//apaga o nome informado deixando o campo vazio.
            setEmail("")//apaga o email informado deixando o campo vazio
        }
    }

    return(
        <div>
            <h2>Adicionar Aluno</h2>
             
             <form onSubmit={handlerAdicionarAluno}>
                <input 
                type="text"
                value={nome}
                onChange={(e)=> setNome(e.target.value)}
                />
                <input
                type="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
                <button type="submit">
                    adicionar
                </button>
             </form>
             <hr />
             <h2>Alunos Adicionados</h2>
             <u1>
                {alunos.map((aluno,index)=>
                <li key ={index}>
                    {aluno.nome}- {aluno.email}
                </li>)}
             </u1>

        </div>
    )
}

export default adicionarAluno