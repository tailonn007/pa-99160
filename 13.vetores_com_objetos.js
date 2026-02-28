// vetor de objetos
const usuarios = [
    {nome: "Ana", idade: 25},
    {nome: "Bruno", idade: 22},
    {nome: "Carla", idade: 30}

]

console.log("exibindo todos os usuarios de vetor: ")
usuarios.forEach(usuario => {
    console.log(`${usuario.nome} tem: ${usuario.idade} anos`)
})

console.log("\nFiltrando idae maior que 18: ")
const maioresde18 = usuarios.filter
    (usuario => usuario.idade > 18
)

// exibindo todos os elementos do vetor. 
maioresde18.forEach(usuario => 
    console.log(`${usuario.nome} tem ${usuario.idade}`)
)

console.log("\nMostrando apenas nomes :")
const listadenomes = usuarios.map(u=> u.nome)
listadenomes.forEach(nome => console.log(`${nome}`))

console.log("\nencontrar um usuario:")
const usuarioencontrado = usuarios.find(u => u.nome === "Carla")
console.log(usuarioencontrado)
console.log(`nome: ${usuarioencontrado.nome} \nidade: ${usuarioencontrado.idade} `)

console.log("\nsoma as idades de todos os usuarios:")
const somaIdade = usuarios.reduce((total, u) => total + u.idade, 0)
console.log(somaIdade) 