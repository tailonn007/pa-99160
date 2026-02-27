// vetor de objeto 
const usurios = [
    {nome: "ana", idade: 25},
    {nome: "bruno", idade: 22},
    {nome: "ramon", idade: 30},
    {nome: "felipe", idade: 15}
]

console.log("exibindo todos os usuários de vetor:  ")
usuários.forEach(usuários=>{
    console.log(`${usuários.nome} tem ${usuários.idade} anos`)
})

console.log("\nfiltrando idade maior de 18 anos:  ")
const maioresDe18 = usuários.filter(
    usuários=> usuários.idade> 18
)

 maioresDe18.forEach(usuários =>
    console.log(`${usuário.nome} tem ${usuário.idade}`)   
 )