const alunos = [{
    "name": "Gerti",
    "n1": 5.4,
    "n2": 1.9,
    "n3": 7.1,
    "n4": 4.8
  }, {
    "name": "Gray",
    "n1": 8.5,
    "n2": 4.9,
    "n3": 8.5,
    "n4": 5.1
  }, {
    "name": "Crissy",
    "n1": 1.9,
    "n2": 0.7,
    "n3": 2.3,
    "n4": 8.2
  }, {
    "name": "Stanton",
    "n1": 2.7,
    "n2": 6.3,
    "n3": 1.7,
    "n4": 1.4
  }, {
    "name": "Raquela",
    "n1": 1.8,
    "n2": 0.2,
    "n3": 1.8,
    "n4": 1.7
  }, {
    "name": "Laryssa",
    "n1": 9.9,
    "n2": 5.6,
    "n3": 10.0,
    "n4": 2.7
  }]

  const calcularMedia = (aluno) => ({
        "name": aluno.name,
        "média": ((aluno.n1 + aluno.n2 + aluno.n3 + aluno.n4) / 4).toFixed(1)
    })

  const result = alunos.map(calcularMedia)

  console.log(result)