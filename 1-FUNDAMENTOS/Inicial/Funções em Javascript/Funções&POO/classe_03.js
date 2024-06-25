class Data {
    #dia = 1
    #mes = 1
    #ano = 1970
    
    // Getters
    get dia() { return this.#dia }
    get mes() { return this.#mes }
    get ano() { return this.#ano }
    

    // Setters
    set dia(novoDia) {
        if (novoDia >= 1 && novoDia <= 31){
            this.#dia = novoDia
        }
    }
    
    set mes(novoMes) {
        if (novoMes >= 1 && novoMes <= 12){
            this.#mes = novoMes
        }
    }
    
    set ano(novoAno) {
        if (novoAno >= 1950 && novoAno <= 2024){
            this.#ano = novoAno
        }
    }
    exibirData() {
        return `${this.#dia}/${this.#mes}/${this.#ano}`
    }


}

const d1 = new Data()

// console.log(d1.exibirData(), d1)
d1.dia = 10
d1.mes = 4
d1.ano = 2000


console.log(d1.dia)
console.log(d1.mes)
console.log(d1.ano)
