const carrinho = [
    { nome: "Caneta", qtd: 10, preco: 7.99, fragil: false },
    { nome: "Caderno", qtd: 4, preco: 27.10, fragil: false },
    { nome: "Lapis", qtd: 3, preco: 5.82, fragil: false },
    { nome: "Tesoura", qtd: 1, preco: 19.20, fragil: false },
    { nome: "Impressora", qtd: 5, preco: 1000, fragil: true },
    { nome: "iPad", qtd: 2, preco: 7500, fragil: true },
    { nome: "Computador", qtd: 2, preco: 5000, fragil: true },
    { nome: "teste", qtd: 2, preco: 10000, fragil: true },
]

// filter, map, reduce

// 1. fragil
// 2. qtd * preco -> total
// 2. media total

const fragilTrue = produto => {
    if (produto.fragil === true) {
        return produto
    }
}

const totalPreco = produto => produto.preco * produto.qtd

const mediaComReduce = (total, valor, indice, array) => {
    const qtd = array.length
    const ultimo = qtd - 1 === indice
    const novoTotal = total + valor
    return ultimo ? novoTotal / qtd : novoTotal
}

console.log(carrinho.filter(fragilTrue).map(totalPreco).reduce(mediaComReduce))