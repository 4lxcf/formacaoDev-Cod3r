(function () {
  // -> PAVIMENTOS

  function criarTerreo() {
    const janela = document.createElement("div");
    janela.classList.add("janela");

    const terreo = document.createElement("div");
    terreo.classList.add("terreo");
    terreo.setAttribute("andar", "T");
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

  function obterTamanho() {
    const terreo = document.querySelector('[andar="T"]');
    return terreo.offsetHeight;
  }

  criarPavimento();

  // -> ELEVADOR

  function criarElevador() {
    const fosso = document.querySelector(".fosso");

    const elevador = document.createElement("div");

    elevador.classList.add("elevador");

    fosso.appendChild(elevador);

    elevador.style.height = obterTamanho();
  }

  function moverElevador(andar) {
    const numero = andar === "T" ? 0 : +andar;

    const elevador = document.querySelector(".elevador");
    const valorDeElevador = +elevador.style.bottom.replace("px", "");

    elevador.style.bottom = valorDeElevador + numero * obterTamanho();
  }

  criarElevador();
  moverElevador("0");
})();
