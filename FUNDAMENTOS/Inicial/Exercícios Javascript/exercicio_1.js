const joaozinho = { 
    nome: "Joaozinho", 
    materias: [ 
        { nome: "Português", notas: [7.4, 5.6, 10, 9] }, 
        { nome: "Matemática", notas: [4.4, 5.0, 8.2, 7.0] }, 
        { nome: "Ciências", notas: [8.2, 7.6, 8.0, 6.3] }, 
        { nome: "Estudos Sociais", notas: [9.2, 7.6, 8.5, 7.0] }, 
    ], 
};

// PARA DIRETORIA
function paraDiretoria(aluno) {
    const result = {
        nome: aluno.nome,
        materias: []
    }

    for (const materia of aluno.materias) {
        let acc = 0;
        
        for (const nota of materia.notas) {
            acc+=nota
        }

        result.materias.push(
            {
                nome: `${materia.nome}`,
                media: `${acc / materia.notas.length}`
            }
        )
    }

    return result
}

// PARA O ALUNO
function paraAluno(aluno) {
    let alunoComMedia = paraDiretoria(aluno)
    let result = {
        nome: alunoComMedia.nome,
        materias: []
    }
    
    for (const materia of alunoComMedia.materias) {
        let conceito

        if (materia.media >= 7) {
            conceito = 'APROVADO'
        } else if (materia.media < 7 && materia.media >= 5) {
            conceito = 'RECUPERAÇÃO'
        } else {
            conceito = 'REPROVADO'
        }

        result.materias.push({
            nome: materia.nome,
            conceito: conceito
        })
    }

    return result
}

// PARA OS RESPONSÁVEIS
function paraResponsaveis(aluno) {
    let alunoComAprovacao = paraAluno(aluno)
    let counter = 0;

    for (const materia of alunoComAprovacao.materias) {
        if (materia.conceito === 'REPROVADO') {
            return 'REPROVADO'
             
        }

        if (materia.conceito === 'APROVADO') {
            counter++
        }
    }

    if (counter >= 4) {
        return 'APROVADO'
    } else if (counter > 1) {
        return 'RECUPERAÇÃO'
    } else {
        return 'REPROVADO'
    }
    
    
    
}

console.log(paraDiretoria(joaozinho))
console.log(paraAluno(joaozinho))
console.log(paraResponsaveis(joaozinho))