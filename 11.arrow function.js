// função 
const somar = (a, b) => {
    return a+b
}

const subtrair =(a, b)=> a-b;

// chamada de função 
const soma = somar(2, 3)
const subtracao = subtrair(2, 3)

// exibindo resultado
console.log(`soma: ${soma}`)
console.log(`subtrair: ${subtracao}`)

console.log("\n mostrando alunos e notas abaixo de 7.0:" )
const alunosabaixode7 = listadealunos.filter(aluno => aluno,nota < 7.0)
alunosabaixode7.forEach( aluno => {
    console.log(`nome: ${aluno.nome}, nota: ${aluno.nota}`)
})