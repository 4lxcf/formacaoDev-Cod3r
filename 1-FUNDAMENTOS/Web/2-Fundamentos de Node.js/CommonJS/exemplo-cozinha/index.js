const cozinha = require("./cozinha");
const receita = require("./receita");
const refeicao = require("./refeicao");

console.log(cozinha);
console.log(receita(cozinha.listaDeAlimentos, cozinha.cortar, cozinha.assar));

const refeicaoAlmoco = refeicao("Almoço");
console.log(refeicaoAlmoco(["Feijão", "Arroz", "Bife"]));

const refeicaoJantar = refeicao("Jantar");
console.log(refeicaoAlmoco(["Ovo", "Banana da Terra", "Frango"]));
