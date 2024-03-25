const promessa = new Promise(function (resolve) {
    resolve('Vamos jogar agora!')
    
})

promessa.then(valor => console.log(valor))

console.log('FIM')

/* Neste caso, o valor de promessa acontece após o console.log visto que
o processamento é assincrono, ou seja, o código executa as linhas de código
em paralelo. */