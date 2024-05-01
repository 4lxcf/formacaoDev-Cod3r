/*Crie uma função que recebe um objeto que representa uma forma geométrica. O objeto vai ter o tipo da forma e você deve calcular a area da forma de acordo com o seu tipo. Os tipos disponíveis são: círculo, triângulo e retângulo.
Nesta função também é necessário verificar se todos os parâmetros necessários existem e caso um deles não exista retornar 0.*/

const circuloExemplo = {tipo: "circulo", raio:4.5}
const trianguloExemplo = {tipo: "triangulo", base:4.5, altura:7.8}
const retanguloExemplo = {tipo: "retangulo", base:8.2, altura:8}

function calculaArea(forma){
    let result = 0.00

    switch (forma.tipo) {
        case 'circulo':
            if (forma.raio) {
                result = Math.PI * forma['raio']**2
            }
            break;

        case 'triangulo':
            if (forma.base && forma.altura) {
                result = forma['base'] * forma['altura'] / 2
            }
            break;
            
        case 'retangulo':
            if (forma.base && forma.altura) {
                result = forma['base'] * forma['altura']
            }
            break;
    }

    return result.toFixed(2)
}

console.log(calculaArea(circuloExemplo))
console.log(calculaArea(trianguloExemplo))
console.log(calculaArea(retanguloExemplo))
