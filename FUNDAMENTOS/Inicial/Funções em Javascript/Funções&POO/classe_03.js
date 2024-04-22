class Data {
    #dia = 1
    #mes = 1
    #ano = 1970
    

    exibir() {
        return `${this.#dia}/${this.#mes}/${this.#ano}`
    }
}

const d1 = new Data()

console.log(d1.exibir(), d1)