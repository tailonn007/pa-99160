// atividade 

// crie uma função para verificar se um n umero é positivo ou negativo.


function verificarNumero(numero) {
    if (numero > 0) {
    return "O número é positivo";
    } else if (numero < 0) {
    return "O número é negativo";
    } else {
    return "O número é zero";
}
}
let resultado = verificarNumero(-500);
console.log(resultado);