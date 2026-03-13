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

document.write("Soma: " + soma + "<br>");
document.write("Média: " + media + "<br>");
document.write("Produto: " + produto + "<br>");
document.write("Maior número: " + maior + "<br>");
document.write("Menor número: " + menor);