function transformar(nota) {
    if (nota >= 9 && nota <= 10) {
        console.log('Conceito A')
    }
    if (nota >= 7 && nota <= 8.9) {
        console.log('Conceito B')
    }
    if (nota >= 5 && nota <= 6.9) {
        console.log('Conceito C')
    }
    if (nota >= 4.5 && nota <= 4.9) {
        console.log('Conceito D')
    }
    if (nota <= 4.9) {
        console.log('Conceito E')
    }
}

transformar(5);