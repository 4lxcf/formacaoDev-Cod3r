// Usando Callback

setTimeout(function (){
    console.log('Executando callback...')
    setTimeout(function (){
        console.log('Executando callback...')
        setTimeout(function (){
            console.log('Executando callback...')
        }, 2000)
    }, 2000)
}, 2000)

// Promise

function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(esperarPor)
    .then(esperarPor)