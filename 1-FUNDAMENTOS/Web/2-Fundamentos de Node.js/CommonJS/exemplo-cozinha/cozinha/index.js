const acoes = require("./acoesCozinhar.js");
const { listaDeAlimentos } = require("./alimentos.js");

module.exports = {
  ...acoes,
  listaDeAlimentos,
};
