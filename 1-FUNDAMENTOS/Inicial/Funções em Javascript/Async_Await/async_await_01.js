function esperarPor(tempo = 2000) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, tempo);
    })
}

async function executar() {
    await esperarPor(2000)
    console.log('Depois de 2s...')

    await esperarPor(3000)
    console.log('Depois de 3s...')

    await esperarPor(2000)
    console.log('Depois de 2s...')
}

executar()