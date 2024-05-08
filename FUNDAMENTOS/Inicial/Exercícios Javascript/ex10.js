//Calcular os dígitos validadores de um CPF

//Parte 1 - gerar um array os 9 primeiros números de forma aleatória

function geradorCPFAleatorio() {
    let CPF = ''
    let arrayCPF = []
    let validadorPrimeiroDigito = 0
    let validadorSegundoDigito = 0
    let aux1 = 10
    let aux2 = 11

    // Geração dos 9 primeiros digitos aleatórios
    for (let index = 0; index < 12; index++) {
        if (index === 3 || index === 7) {
            arrayCPF[index] = '.'
        } else if (index === 11) {
            arrayCPF[index] = '-'
        } else {
            arrayCPF[index] = `${(Math.random() * 9).toFixed(0)}`
        }
    }
    
    // Cálculo de multiplicação de cada valor do CPF para validar o primeiro digito verificador
    for (let index = 0; index < arrayCPF.length; index++) {
        if (arrayCPF[index] !== '.' && arrayCPF[index] !== '-') {
            validadorPrimeiroDigito += (aux1 * arrayCPF[index])
            aux1--
        }
    }
    
    // Descobrindo o valor do primeiro digito verificador
    let primeiroDigito = 11 - validadorPrimeiroDigito % 11
    if (primeiroDigito >= 10) {
        primeiroDigito = 0
    }

    // Adicionando o primeiro digito verificador ao arrayCPF
    arrayCPF.push(primeiroDigito)

    // Cálculo de multiplicação de cada valor do CPF para validar o segundo digito verificador
    for (let index = 0; index < arrayCPF.length; index++) {
        if (arrayCPF[index] !== '.' && arrayCPF[index] !== '-') {
            validadorSegundoDigito += (aux2 * arrayCPF[index])   
            aux2--
        }
    }

    // Descobrindo o valor do segundo digito verificador
    let segundoDigito = 11 - validadorSegundoDigito % 11
    if (segundoDigito >= 10) {
        segundoDigito = 0
    }

    // Adicionando o segundo digito verificador ao CPF
    arrayCPF.push(segundoDigito)
    
    for (const iterator of arrayCPF) {
        CPF += iterator
    }

    return CPF
}

console.log(geradorCPFAleatorio())