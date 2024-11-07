let bancoDeDados = []; // Formato {nome, id}

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
