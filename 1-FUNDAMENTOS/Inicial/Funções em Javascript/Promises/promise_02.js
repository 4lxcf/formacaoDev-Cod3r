const primeiroElemento = arrayOuString => arrayOuString[0]

const promessa = new Promise(resolve => {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

promessa
    .then(array => primeiroElemento(array))
    .then(elemento => primeiroElemento(elemento))
    .then(letra => letra.toLowerCase())
    .then(resultado => console.log(resultado))


    console.log("Fim!")