import fs from "fs";

let bancoDeDados = _carregarDados(); // Formato {nome, id}

function _carregarDados() {
  const dadosJSON = fs.readFileSync("banco.json", "utf8");
  const dados = JSON.parse(dadosJSON);
  return dados;
}

export function persistirValores() {
  const dadosJSON = JSON.stringify(bancoDeDados, null, 4);
  fs.writeFileSync("banco.json", dadosJSON, "utf8");
}

export function salvar(nome, id) {
  bancoDeDados.push({ nome, id });
}

export function deletar(id) {
  const dadosFiltrados = bancoDeDados.filter((dado) => {
    return dado.id != id;
  });

  bancoDeDados = dadosFiltrados;
}

export function ler() {
  const dadosImprimiveis = bancoDeDados.map((dado) => {
    return `NOME: ${dado.nome} | ID: ${dado.id}`;
  });

  return dadosImprimiveis;
}
