/*Crie uma função que recebe dois arrays como parâmetros e retorna um objeto. As chaves do objeto serão os elementos do primeiro array passado como parâmetro e os valores, os elementos do segundo array*/


function criaObjeto(chaves, valores){
    let result = {}

    for (let index = 0; index < chaves.length; index++) {
        result[`${chaves[index]}`] = valores[index]
    }

    return result
}


const array1 = ["nome", "idade", "id"]
const array2 = ["Carlos", 47, 457]

const objeto = criaObjeto(array1, array2)
console.log(objeto)