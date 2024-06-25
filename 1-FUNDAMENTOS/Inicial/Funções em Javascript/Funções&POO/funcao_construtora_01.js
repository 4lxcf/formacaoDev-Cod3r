function Data(dia, mes, ano) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
}

const d1 = new Data(1, 1, 2023)
const d2 = new Data(2, 2, 2024)

console.log(typeof d1, d1)
console.log(typeof d2, d2)