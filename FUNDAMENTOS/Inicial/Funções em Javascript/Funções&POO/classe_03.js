class Data {
    #dia = 1
    #mes = 1
    #ano = 1970
    
    exibirData() {
        return `${this.#dia}/${this.#mes}/${this.#ano}`
    }

    getDia() {
        return this.#dia
    }

    setDia(novoDia) {
        if (novoDia >= 1 && novoDia <= 31){
            this.#dia = novoDia
        }
    }
}

const d1 = new Data()

// console.log(d1.exibirData(), d1)
d1.setDia(36)

console.log(d1.getDia())
