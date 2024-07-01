let leia = require("readline-sync")

let soma = 0
let media = 0
let vetorMedia = Array(4)
let matrizNotas = Array(4)

for( let indiceLinha = 0; indiceLinha <matrizNotas.length; indiceLinha++){
    matrizNotas[indiceLinha] = Array(4);
}
for(let indiceLinha = 0; indiceLinha < matrizNotas.length; indiceLinha++){
    for(let indiceColuna = 0; indiceColuna < matrizNotas.length; indiceColuna++){
        matrizNotas[indiceLinha][indiceColuna] = leia.questionInt(`Digite a nota [${indiceLinha}][${indiceColuna}]`)
    }
}

console.log("\nAs notas dos aluns são: \n")
console.table(matrizNotas);

for (let indiceLinha = 0; indiceLinha < matrizNotas.length; indiceLinha++){
    for(let indiceColuna = 0; indiceColuna< matrizNotas.length; indiceColuna++){
        soma += matrizNotas[indiceColuna][indiceLinha];
    }
    
    vetorMedia[indiceLinha] = soma / 4;
    soma = 0
}