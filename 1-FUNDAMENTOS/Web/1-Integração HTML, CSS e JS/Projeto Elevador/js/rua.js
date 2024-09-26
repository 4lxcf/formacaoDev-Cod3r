(function () {
  function criarFaixas() {
    const elementosComFaixa = document.querySelectorAll("[qtdFaixas]");
    elementosComFaixa.forEach((e) => {
      const qtd = e.getAttribute("qtdFaixas");
      for (let index = 0; index < qtd; index++) {
        const faixa = document.createElement("div");
        faixa.classList.add("faixa");
        e.appendChild(faixa);
      }
    });
  }

  criarFaixas();
})();
