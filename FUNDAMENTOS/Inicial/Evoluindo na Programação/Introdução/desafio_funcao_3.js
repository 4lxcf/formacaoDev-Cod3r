const nota1 = Math.random() * 10
const nota2 = Math.random() * 10
const nota3 = Math.random() * 10

function mediaMaioresNotas(nota1, nota2, nota3){
    let notaAlta1, notaAlta2
    if (nota1 > nota2) {
        notaAlta1 = nota1
        if (nota2 > nota3) {
            notaAlta2 = nota2
        } else {
            notaAlta2 = nota3
        }
    } else {
        notaAlta1 = nota2
        if (nota1 > nota3) {
            notaAlta2 = nota1
        } else {
            notaAlta2 = nota3
        }
    }

    let media = (notaAlta1 + notaAlta2) / 2
    return media
}

function resultadoAluno(num) {
    switch (Math.floor(num)) {
        case 10:
        case 9:
        case 8:
        case 7:
            return 'Parabéns! Aluno APROVADO!'
            break;
        case 6:
        case 5:
        case 4:
            return 'O aluno precisa estudar mais. Está na RECUPERAÇÃO!'
        case 3:
        case 2:
        case 1:
        case 0:
            return 'Infelizmente, aluno REPROVADO!'
        default:
            break;
    }
}

console.log(`=> Resultado: ${resultadoAluno(mediaMaioresNotas(nota1, nota2, nota3))} Sua média foi de ${mediaMaioresNotas(nota1, nota2, nota3).toFixed(1)} pontos!`)