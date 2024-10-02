(function () {
  // -> PAVIMENTOS

  function criarTerreo() {
    const janela = document.createElement("div");
    janela.classList.add("janela");

    const terreo = document.createElement("div");
    terreo.classList.add("terreo");
    terreo.setAttribute("terreo", "T");
    terreo.appendChild(janela);

    return terreo;
  }

  function criarAndar(numero) {
    const porta = document.createElement("div");
    porta.classList.add("porta");

    const andar = document.createElement("div");
    andar.classList.add("andar");
    andar.setAttribute("andar", numero);
    andar.appendChild(porta);

    return andar;
  }

  function criarPavimento() {
    const pavimentoComAndares = document.querySelectorAll("[andares]");
    pavimentoComAndares.forEach((result) => {
      const qtd = +result.getAttribute("andares");

      for (let i = 0; i < qtd; i++) {
        result.appendChild(criarAndar(qtd - i));
      }

      result.appendChild(criarTerreo());
    });
  }

  criarPavimento();

  // -> ELEVADOR
})();
