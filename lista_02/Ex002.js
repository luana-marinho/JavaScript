const leia = require('readline-sync')

let nome = leia.question("\nDigite o nome do doador: ");
let idade = leia.questionInt("\nDigite a idade do doador: ");
let doador = leia.keyInYNStrict("\nPrimeira doacao de sangue? Digite Y para Sim e N para nao: ");

if (idade >= 60 && idade < 70 && doador == true ) {
    console.log(`\n ${nome} NAO ESTA apto(a) para doar sangue!`);
}
else if (idade < 18 || idade > 69) {
    console.log(`\n ${nome} NAO ESTA apto(a) para doar sangue!`);
} else {
    console.log(`\n ${nome} ESTA apto(a) para doar sangue!`);
}
