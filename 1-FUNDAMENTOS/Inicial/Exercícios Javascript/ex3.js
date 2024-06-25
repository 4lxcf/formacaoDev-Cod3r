/* Crie uma função que recebe um objeto como parâmetro e retorna um segundo objeto com as chaves e valores do primeiro objeto invertidas*/
function trocaChaveEValor(objeto){
    let result = {}
    let conteudo = Object.entries(objeto)
    
    for (const iterator of conteudo) {
        console.log(iterator)
        result[iterator[1]] = iterator[0]
    }
    
    return result
}

const objeto = {nome:"Maria", idade:"45", id:"8745"}

const objetoInvertido = trocaChaveEValor(objeto)

console.log(objeto)
console.log(objetoInvertido)