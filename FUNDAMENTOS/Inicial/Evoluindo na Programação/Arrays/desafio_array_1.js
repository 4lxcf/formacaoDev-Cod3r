const notas = [7.3, 8.1, 9.2, 8.1, 6.3, 7.9, 5.0, 6.0, 8.9, 10]

function mediaNotas(listaDeNotas){
    let soma = 0

    for (let n of listaDeNotas){
        soma += n
    }

    return (soma / listaDeNotas.length)
}

console.log(mediaNotas(notas))