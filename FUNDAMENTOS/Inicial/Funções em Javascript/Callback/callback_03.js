const path = require('path')
const fs = require('fs')

const caminho = path.join(__dirname, "Dados", "aprovados.txt")

fs.readFile(caminho, function(erro, conteudo) {
    console.log(erro)
    console.log(conteudo.toString())
})
