// solicite ao usuario o nome e duas notas.

const nome = prompt("Digite seu nome:");
const nota1 = parseFloat(prompt("Digite a primeira nota:"));
const nota2 = parseFloat(prompt("Digite a segunda nota:"));

// calcule e mostre a media aritmetica.
const media = (nota1 + nota2) / 2;
alert(` ${nome}, sua média é ${media.toFixed(2)}.`);