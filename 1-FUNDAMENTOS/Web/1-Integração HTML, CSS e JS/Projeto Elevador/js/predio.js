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

    elevador.style.bottom = numero * obterTamanho();
  }

  function botoesElevador() {
    const botoes = document.querySelectorAll("[andarSelecionado]");
    botoes.forEach((botao) => {
      const andarSelecionado = botao.getAttribute("andarSelecionado");
      const visor = document.querySelector(".mostrador");

      botao.onclick = () => {
        moverElevador(andarSelecionado);

        if (andarSelecionado === "T") {
          visor.innerHTML = "Térreo";
        } else {
          visor.innerHTML = `${andarSelecionado}º Andar`;
        }
      };
    });
  }

  criarElevador();
  botoesElevador();
})();
