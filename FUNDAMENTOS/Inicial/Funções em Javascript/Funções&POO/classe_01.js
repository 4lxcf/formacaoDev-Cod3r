class Data {
    constructor(dia, mes, ano) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const d1 = new Data(8, 12, 1293)
const d2 = new Data(18, 2, 1993)

console.log(d1, typeof d1)
console.log(d2, typeof d2)