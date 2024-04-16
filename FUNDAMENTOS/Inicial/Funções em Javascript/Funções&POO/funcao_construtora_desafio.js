function Produto(nome, preco, desconto = 0) {
    this.nome = nome,
    this.preco = preco,
    this.desconto = desconto,

    this.precoFinal = function () {
        if (this.desconto > 0.15){
            return 'Este valor de desconto não pode ser aplicado. Os valores devem ser entre 0.00 e 0.15'
        }
        return `O valor do ${this.nome} ficou, já com o desconto: R$ ${this.preco * (1 - this.desconto)}`
    }
}

const p1 = new Produto('feijão', 8.55, 0.15)
const p2 = new Produto('arroz', 6.2, 0.1)

console.log(p1.precoFinal())
console.log(p2.precoFinal())

