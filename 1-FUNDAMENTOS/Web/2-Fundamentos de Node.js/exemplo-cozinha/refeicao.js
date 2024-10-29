module.exports = function (refeicao) {
  const oQueComer = function (alimentos) {
    console.log(`Na refeição ${refeicao}, irei comer ${alimentos}!`);
  };

  return oQueComer;
};
