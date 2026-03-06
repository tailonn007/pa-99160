// ATIVIDADE 

// CRIE UMA FUNÇÃO PARA CALCULAR MÉDIA ARITMÉTICA.

notas = [8,6,5,10, ]
const media = notas.reduce((total, n) => total + n, 0) / notas.length
console.log("media:", media)
