const leia = require('readline-sync')

let a = leia.questionInt("\nDigite o valor A: ");
let b = leia.questionInt("\nDigite o valor B: ");
let c = leia.questionInt("\nDigite o valor C: ");

let soma = a + b

if (soma > c) {
    console.log(`\n O resultado da soma é: ${soma} \n Então, a soma de A + B é Maior que C`);
}

if (soma < c) {
    console.log(`\n O resultado da soma é: ${soma} \n Então, a soma de A + B é Menor que C`);
}

if (soma == c) {
    console.log(`\n O resultado da soma é: ${soma} \n Então, a soma de A + B é Igual que C`);}
