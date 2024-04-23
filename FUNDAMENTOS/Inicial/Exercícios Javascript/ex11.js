//Implemente uma função que recebe um array de objetos e uma propriedade e ordene o array de acordo com a propriedade

function ordena(arr, atributo, crescente = true){
    }


    const pessoas = [
        {nome: "Ana", idade:30},
        {nome: "Enzo", idade:5},
        {nome: "Carlos", idade:98},
        {nome: "Anésia", idade:94},
    ]

    console.log(ordena(pessoas, "idade"))
    console.log(ordena(pessoas, "idade", false))
    console.log(ordena(pessoas, "nome"))