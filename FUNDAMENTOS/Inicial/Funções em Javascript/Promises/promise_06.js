function promessaComPossivelErro (chanceErro) {
    return new Promise((promise, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            promise('Tudo certo!')
        }
    })
}

promessaComPossivelErro(0.5)
    .then(v => console.log(v))
    .catch(erro => console.log(erro)) //O 'catch' trata o possível erro que acontece na função