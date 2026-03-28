import  './style.css'

function InfoAluno() {
    const nome ="Alberth Tailon"
    const idade = 18
    const curso = "Desenvolvimento de Sistema"


return (
    <div className='info-aluno'>
        <h2>informações do aluno:</h2>
        <p><strong>Nome</strong>: {nome}</p>
        <p><strong>idade</strong>: {idade}</p>
        <p><strong>Curso</strong>: {curso}</p>
    </div>
    )
}
export default InfoAluno
