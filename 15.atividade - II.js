// vetor 
const numeros = [1, 2, 3, 4, 5]

// usando o map, crie um vetor com os números
// do vetor 'números' cada um multiplicado por dois.
const dobrados = numeros.map(n => n * 2)
console.log("vetor de numeros:" , numeros)
console.log("vetor de dobrados:" , dobrados)

// filtre os elementos do vetor 'números' para 
// obter um novo vetor apenas com os números pares.
const pares = numeros.filter(n => n % 2 === 0)
console.log(pares)


// usando o reduce, some todos os numeros do vetor 'números' para obter o total.
const total = numeros.reduce((acc, n) => acc + n, 0)
console.log(total)