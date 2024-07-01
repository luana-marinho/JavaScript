let leia = require("readline-sync")

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

for (let i = 0; i < 1 ; i++) {
    numeroInformado = leia.questionInt("\n Informe o numero desejado: ");
    let posicao = (vetor.indexOf(numeroInformado))
    if (posicao !== -1) {
        console.log(`O numero ${numeroInformado} esta localizado na ${posicao}`)
    } else {
        console.log(`O numero ${numeroInformado} nao foi encontrado!`)
    }
}

