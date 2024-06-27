const leia = require('readline-sync')

let numero1;
let numero2;
let codigo;
let result;

numero1 = leia.questionInt("\nDigite o primeiro numero: ")
numero2 = leia.questionInt("\nDigite o segundo numero: ")

console.clear()

console.log("\n -------Operações-------: ");
console.log("\n     1 -- Soma ");
console.log("\n     2 -- Subtração ");
console.log("\n  3 -- Multiplicação ");
console.log("\n    4 -- Divisão");

codigo = leia.questionInt("\nEscolha a operacao desejada: ")

console.clear()

switch (codigo) {
    case 1:
        result = numero1 + numero2
        console.log(`${numero1} + ${numero2} = ${result}`);
        break;
    case 2:
        result = numero1 - numero2
        console.log(`${numero1} - ${numero2} = ${result}`);
        break;
    case 3:
        result = numero1 * numero2
        console.log(`${numero1} x ${numero2} = ${result}`);
        break;
    case 4:
        result = numero1 / numero2
        console.log(`${numero1} / ${numero2} = ${result}`);
        break;
     default:
            console.log("\nDigite um codigo valido.");
   
}