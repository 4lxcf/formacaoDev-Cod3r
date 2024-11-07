import fs from "fs";

let bancoDeDados = _carregarDados(); // Formato {nome, id}
let ultimoID = bancoDeDados[bancoDeDados.length - 1]?.id ?? -1;
let idGlobal = ultimoID + 1;

function _carregarDados() {
  const dadosJSON = fs.readFileSync("banco.json", "utf8");
  const dados = JSON.parse(dadosJSON);
  return dados;
}

export function persistirValores() {
  const dadosJSON = JSON.stringify(bancoDeDados, null, 4);
  fs.writeFileSync("banco.json", dadosJSON, "utf8");
}

export function editarOuSalvar(nome, id) {
  const indice = bancoDeDados.findIndex((obj) => obj.id === id);

  if (indice >= 0) {
    bancoDeDados[indice].nome = nome;
  } else {
    bancoDeDados.push({ nome, id: idGlobal });
    idGlobal++;
  }
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
