const data = {
    dia: 7,
    mes: 11,
    ano: 2026,
    print: function(){
       return `${this.dia}/${this.mes}/${this.ano}`
    }
}

console.log(data.print())