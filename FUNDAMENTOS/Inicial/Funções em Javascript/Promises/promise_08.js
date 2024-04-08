function gerarNumeroEntre(min, max, tempo) {
    return new Promise(resolve => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo);
    })
}

gerarNumeroEntre(1, 60, 500) //Com um encadeamento de '.then', cada função executa após a finalização da anterior.
    .then(console.log)
    .then(() => gerarNumeroEntre(1, 60, 1000))
    .then(console.log)
    .then(() => gerarNumeroEntre(1, 60, 2000))
    .then(console.log)