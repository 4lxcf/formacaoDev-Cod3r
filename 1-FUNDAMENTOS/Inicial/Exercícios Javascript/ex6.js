/*Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, onde cada elemento do array é um outro array contendo o par chave/valor de um atributo do objeto*/

function transformaEmArray(objeto){
    let result = Object.entries(objeto)

    return result
}


const pessoa = {nome:"Patrícia", idade:22, id:142}
const arrayFinal = transformaEmArray(pessoa)
console.log(arrayFinal)