var aluno = {
    notas: [5.8, 8.1, 6.9],
    faltas: 18,
}

function aprovacao(aluno) {
    var media = 0, freq = 0;

    media = (aluno.notas[0] + aluno.notas[1] + aluno.notas[2]) / 3;
    freq = (1 - aluno.faltas / 223) * 100

    if (media >= 7 && freq >= 0.8){
        console.log(media);
        console.log(freq);
        return console.log('Aluno APROVADO!');
    }

    console.log(media);
    console.log(freq);
    return console.log('Aluno REPROVADO!');
}

aprovacao(aluno);