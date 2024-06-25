/*
 Dados dois arrays de números [a,b] e [d,e] crie uma função que faça a multiplicação do primeiro array com o segundo de maneira distributiva e a imprima na tela, ou seja, (a*d), (a*e),(b*d) (d*e). A função deve ser capaz de receber como parâmetros arrays de qualquer tamanho e não só com dois parâmetros.
 */

 function multiplicacaoDistributiva(array1, array2){
    let arrayResult = []
    for (const i of array1) {
        for (const j of array2) {
            arrayResult.push(`${i*j}`)
        }
    }

    console.log(arrayResult)
 }

const array1 = [1,2,3]
const array2 = [10,100]

multiplicacaoDistributiva(array1, array2)