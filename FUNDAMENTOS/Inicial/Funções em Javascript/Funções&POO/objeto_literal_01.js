const produto = {
    nome: 'iPad',
    marca: 'Apple',
    anoFabricacao: 2023,
    preco: 7500,
    fragil: true,
    desconto: 0.15,
    precoComDesconto: function() {
        return (1 - this.desconto) * this.preco
    }
}

const precoFinal = produto.precoComDesconto()
console.log(`${produto.nome} tem preço de R$ ${precoFinal} !`)