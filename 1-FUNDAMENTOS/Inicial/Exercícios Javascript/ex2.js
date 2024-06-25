/*Escreva uma função que recebe um objeto como primeiro parâmetro e como segundo parâmetro o nome de uma propriedade no formato string.
Caso a propriedade não exista no objeto retorne o objeto original. Caso a propriedade exista, retorne uma cópia desse objeto sem a propriedade especificada no segundo parâmetro. 
*/

function removeAtributo(objeto, atributo){
    if (objeto[atributo]) {
        let copia = {...objeto}
        delete copia[atributo]
        return copia
    } else {
        return objeto
    }
    //console.log(objeto[atributo])
}


const pessoa = {nome:"Ana", idade:20}

const pessoaAtualizada = removeAtributo(pessoa, "idade")
console.log(pessoaAtualizada)