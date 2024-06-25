function gerarNumeroEntre(min, max, tempo) {
    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo);
    })
}

// gerarNumeroEntre(1, 60, 500)
//     .then(console.log)
//     .then(() => gerarNumeroEntre(1, 60, 1000))
//     .then(console.log)
//     .then(() => gerarNumeroEntre(1, 60, 2000))
//     .then(console.log)

Promise.all([ //Com o Promise.all todos as funções são resolvidas em paralelo.
    gerarNumeroEntre(1, 60, 500),
    gerarNumeroEntre(1, 60, 1000),
    gerarNumeroEntre(1, 60, 2000),
]).then(console.log)