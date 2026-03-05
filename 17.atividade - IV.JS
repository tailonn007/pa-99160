// ATIVIDADE 

// CRIE UMA FUNÇÃO PARA CALCULAR MÉDIA ARITMÉTICA.

notas = [5,5,5,]
const media = notas.reduce((total, n) => total + n, 0) / notas.length
console.log("media:", media)