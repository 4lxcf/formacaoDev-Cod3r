const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

const promessa = new Promise(resolve => {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

/*Pelo fato de as funções possuírem somente um parametro, podemos só utilizar a 
referência das funções ao invés de criar uma 'arrow function' para cada 'then'
como feito no exemplo 2.*/
promessa
    .then(primeiroElemento) //Recebe o array e retorna o primeiro elemento
    .then(primeiroElemento) //Recebe o primeiro elemento e retorna a primeira letra
    .then(letraMinuscula) //Formata a letra em minúscula
    .then(console.log) //Mostra no console o resultado


    console.log("Fim!")