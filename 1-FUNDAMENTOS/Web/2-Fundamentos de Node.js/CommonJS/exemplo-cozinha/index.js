const cozinha = require("./cozinha");
const receita = require("./receita");
const refeicaoAlmoco = require("./refeicao")("Almoço");
const refeicaoJantar = require("./refeicao")("Jantar");

console.log(cozinha);
console.log(receita(cozinha.listaDeAlimentos, cozinha.cortar, cozinha.assar));

console.log(refeicaoAlmoco(["Feijão", "Arroz", "Bife"]));
console.log(refeicaoJantar(["Ovo", "Banana da Terra", "Frango"]));
