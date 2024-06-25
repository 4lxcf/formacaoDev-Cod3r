function mediaDeArray(numeros) {
    if (!Array.isArray(numeros)) {
        return null
    }

    let total = 0
    for (let numero of numeros) {
        total += numero
    }
    return total / numeros.length
}

const aluno = {
    nome: 'Roberto Fernandez',
    disciplinas: [
        { nome: 'Matemática', notas: [4, 7, 10] },
        { nome: 'Geografia', notas: [8, 8, 8] },
        { nome: 'Ciências', notas: [10, 9, 10] },
    ],
    mediaDaDisciplina: function (nomeDaDisciplina) {
        for (let disciplina of this.disciplinas) {
            if (disciplina.nome === nomeDaDisciplina) {
                return mediaDeArray(disciplina.notas)
            }
        }
        return null
    },
    mediaGlobal: function() {
        const medias = []
        for (let disciplina of this.disciplinas) {
            medias.push(mediaDeArray(disciplina.notas))
        }
        return mediaDeArray(medias)
    }
}

console.log(aluno.mediaDaDisciplina('Geografia'))
console.log(aluno.mediaGlobal())