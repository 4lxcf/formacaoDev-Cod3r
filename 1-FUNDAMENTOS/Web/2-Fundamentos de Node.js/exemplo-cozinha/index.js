const cozinha = require("./cozinha");
const receita = require("./receita");

console.log(cozinha);
console.log(receita(cozinha.listaDeAlimentos, cozinha.cortar, cozinha.assar));
