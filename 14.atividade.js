const listadealunos = [
    { nome: 'ana', nota: 5.0},
    { nome: 'bruno', nota: 10.0},
    { nome: 'carla', nota: 2.0},
    { nome: 'andrea', nota: 7.0},
    { nome: 'marta', nota: 6.0}
];

console.log("\nencotre a aluna marta e mostre o nome e a média dela.:")
const usuarioencontrado = listadealunos.find(u => u.nome === "marta")
console.log(usuarioencontrado)


console.log("\nsoma notas de alunos:")
const somanota = listadealunos.reduce((total, u) => total + u.nota, 0)
console.log(somanota) 

console.log("\n mostrando alunos e notas abaixo de 7.0:" )
const alunosabaixo7 = listadealunos.filter(aluno => aluno.nota < 7.0)
alunosabaixo7.forEach( aluno => {
    console.log(`nome: ${aluno.nome}, nota: ${aluno.nota}`)
})

