function horasDeTrabalho(dia){
    if (dia == 'sabado') {
        console.log('4h de Trabalho.')
    } else if (dia == 'domingo') {
        console.log('0h de Trabalho.')
    } else {
        console.log('8h de Trabalho.')
    }
}

horasDeTrabalho('domingo')