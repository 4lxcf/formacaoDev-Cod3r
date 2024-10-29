module.exports = function (ingredientes, acao1, acao2) {
  let result = "";

  for (const ingrediente of ingredientes) {
    result += `${acao1(ingrediente)}, `;
    result += `${acao2(ingrediente)}. `;
  }
  result += "Receita Finalizada!";

  return result;
};
