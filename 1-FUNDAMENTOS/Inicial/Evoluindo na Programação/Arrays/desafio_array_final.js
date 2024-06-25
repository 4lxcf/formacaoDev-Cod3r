const numeros = [1, 2, 3]

function forEach(array, funcao){
    for(let i in array){
        funcao(array[i], i, array)
    }
}

function paraCadaElemento(el, i, array){
    console.log(el, i, array)
}

forEach(numeros, paraCadaElemento)