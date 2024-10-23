(function () {
  // -> PAVIMENTOS

  function criarTerreo() {
    const janela = document.createElement("div");
    const terreo = document.createElement("div");

    janela.classList.add("janela");
    terreo.classList.add("terreo");
    terreo.setAttribute("andar", "T");
    terreo.appendChild(janela);

    return terreo;
  }

  function criarAndar(numero) {
    const porta = document.createElement("div");
    const andar = document.createElement("div");

    porta.classList.add("porta");
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

  function obterPosicaoAtual() {
    const elevador = document.querySelector(".elevador");
    return +elevador.style.bottom.replace("px", "");
  }

  function moverElevador(andar) {
    const numero = andar === "T" ? 0 : +andar;
    const elevador = document.querySelector(".elevador");
    const posInicial = obterPosicaoAtual();
    const posFinal = numero * obterTamanho();
    const direcao = posFinal > posInicial;

    if (emMovimento()) return;

    iniciarMovimentoElevador();
    ligarBotao(andar);
    visorElevador(direcao ? "Subindo" : "Descendo");

    let temporizador = setInterval(() => {
      const novaPosicao = obterPosicaoAtual() + (direcao ? 10 : -10);
      const terminou = direcao
        ? novaPosicao >= posFinal
        : novaPosicao <= posFinal;

      elevador.style.bottom = terminou ? posFinal : novaPosicao;
      console.log(obterPosicaoAtual());

      if (terminou) {
        clearInterval(temporizador);
        finalizarMovimentoElevador();
        desligarBotao(andar);
        visorElevador(numero);
      }
    }, 30);
  }

  function botoesElevador() {
    const botoes = document.querySelectorAll("[andarSelecionado]");

    botoes.forEach((botao) => {
      const andarSelecionado = botao.getAttribute("andarSelecionado");

      botao.onclick = () => {
        moverElevador(andarSelecionado);
      };
    });
  }

  function ligarBotao(botaoDoAndar) {
    const botao = document.querySelector(
      `[andarSelecionado="${botaoDoAndar}"]`
    );

    botao.classList.add("destaque");
  }

  function desligarBotao(botaoDoAndar) {
    const botao = document.querySelector(
      `[andarSelecionado="${botaoDoAndar}"]`
    );

    botao.classList.remove("destaque");
  }

  function visorElevador(info) {
    const visor = document.querySelector(".mostrador");

    if (info === "Subindo" || info === "Descendo") {
      visor.innerHTML = info;
    } else if (info == 0) {
      visor.innerHTML = "Térreo";
    } else {
      visor.innerHTML = `${info}º Andar`;
    }
  }

  function iniciarMovimentoElevador() {
    const elevador = document.querySelector(".elevador");
    elevador.setAttribute("moving", "");
  }

  function finalizarMovimentoElevador() {
    const elevador = document.querySelector(".elevador");
    elevador.removeAttribute("moving");
  }

  function emMovimento() {
    const elevador = document.querySelector(".elevador");
    return elevador.hasAttribute("moving");
  }

  criarElevador();
  botoesElevador();
})();
