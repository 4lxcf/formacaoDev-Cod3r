const numeros = [7, 99, 1683, 4674, 33, 38, 47, 59]

function lista(listaDeNumeros){
    let result = []

    for (let n in listaDeNumeros){
        if (n % 2 == 0) {
            result.push(listaDeNumeros[n])
        }
    }

    return result.reverse()
}

console.log(lista(numeros))