let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));

let soma = n1 + n2;
let media = (n1 + n2) / 2;
let produto = n1 * n2;

let maior;
let menor;

if (n1 > n2) {
    maior = n1;
    menor = n2;
} else {
    maior = n2;
    menor = n1;
}

console.log("Soma: " + soma);
console.log("Média: " + media);
console.log("Produto: " + produto);
console.log("Maior número: " + maior);
console.log("Menor número: " + menor);