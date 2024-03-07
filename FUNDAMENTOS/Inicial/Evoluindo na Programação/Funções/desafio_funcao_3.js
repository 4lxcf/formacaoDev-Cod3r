const nota1 = Math.random() * 10
const nota2 = Math.random() * 10
const nota3 = Math.random() * 10

function mediaMaioresNotas(nota1, nota2, nota3){
    if (nota1 <= nota2 && nota1 <= nota3) {
        return (nota2 + nota3) / 2
    } else if (nota2 <= nota1 && nota2 <= nota3) {
        return (nota1 + nota3) / 2
    } else {
        return (nota2 + nota1) / 2
    }
}

function resultadoAluno(num) {
    if (num >= 7) {
        return 'Parabéns! Aluno APROVADO!'
    } else if (num >= 4) {
        return 'O aluno precisa estudar mais. Está na RECUPERAÇÃO!'
    } else {
        return 'Infelizmente, aluno REPROVADO!'
    }
}

console.log(`=> Resultado: ${resultadoAluno(mediaMaioresNotas(nota1, nota2, nota3))} Sua média foi de ${mediaMaioresNotas(nota1, nota2, nota3).toFixed(1)} pontos!`)