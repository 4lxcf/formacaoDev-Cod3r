function mediaSimples(num1, num2, num3){
    const result = (num1 + num2 + num3) / 3;
    console.log(`A média simples é: ${result}!`);
}

function mediaPonderada(num1, num2, num3){
    const result = (num1 * 1 + num2 * 2 + num3 * 3) / 6;
    console.log(`A média ponderada é: ${result}!`);
}

mediaSimples(1, 2, 3)
mediaPonderada(1, 2, 3)