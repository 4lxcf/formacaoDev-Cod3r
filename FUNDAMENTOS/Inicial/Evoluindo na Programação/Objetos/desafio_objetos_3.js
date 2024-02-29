function Aluno(nome, disciplinas) {
    this.nome = nome
    this.disciplinas = disciplinas

    this.mediaDaDisciplina = function (nomeDaDisciplina) {
        for (let disciplina of this.disciplinas) {
            if (disciplina.nome === nomeDaDisciplina) {
                return mediaDeArray(disciplina.notas)
            }
        }
        return null
    }

    this.mediaGlobal = function() {
        const medias = []
        for (let disciplina of this.disciplinas) {
            medias.push(mediaDeArray(disciplina.notas))
        }
        return mediaDeArray(medias)
    }
}

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

const aluno = new Aluno('Roberto Fernandez', [
    { nome: 'Matemática', notas: [4, 7, 10] },
    { nome: 'Geografia', notas: [8, 8, 8] },
    { nome: 'Ciências', notas: [10, 9, 10] },
])

console.log(aluno.mediaDaDisciplina('Geografia'))
console.log(aluno.mediaGlobal())