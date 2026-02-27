// criando um vetor

const listanomes =  ["martar","josé", "maria"]

console.log("exibindo todos os elementos:")
console.log(listanomes)

console.log("\nexibindo o primeiro elemento:")
console.log(listanomes[0])

console.log("\nexibindo o segundo elemento:")
console.log(listanomes[1])

console.log("\nadicionar um elemento:")
listanomes.push("alberth")
console.log(listanomes)

console.log("\nremovendo o primeiro elemento:")
listanomes.shift()
console.log(listanomes)

console.log("\nremovendo o último elemento:")
listanomes.pop()
console.log(listanomes)

console.log("\nremovendo um elemento específico:")
// no índice 1, remover 1 elemento
listanomes.splice(1,1)
console.log(listanomes)