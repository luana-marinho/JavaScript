const leia = require('readline-sync')

let nome;
let idade;

nome = leia.question("\nDigite seu nome: ")
idade = leia.questionInt("\nDigite sua idade: ")

if (idade >= 0 && idade <= 10) {
    console.log("\nO seu plano de saude custara R$ 100,00 por mes.");
} else if (idade <= 29) {
    console.log("\nO seu plano de saude custara R$ 200,00 por mes.");
} else if (idade >= 30 && idade <= 45) {
    console.log("\nO seu plano de saude custara R$ 300,00 por mes.");
} else if (idade >= 46 && idade <= 65) {
    console.log("\nO seu plano de saude custara R$ 400,00 por mes.");
}
else {
    console.log("\nO seu plano de saude custara R$ 1000,00 por mes.");
}

if(nome === 'Luana'){
    console.log('\n Muito obrigada Luana!');
}