function conceito(i) {
    switch (Math.ceil(i)) {
        case 10:
            return 'A+'
            break;
        case 9:
            return 'A'
            break;
        case 8:
            return 'B+'
            break;
        case 7:
            return 'B'
            break;
        case 6:
            return 'C+'
            break;
        case 5:
            return 'C'
            break;
        case 4:
            return 'D+'
            break;
        case 3:
            return 'D'
            break;
        case 2:
            return 'E+'
            break;
        case 1:
            return 'E'
            break;
        case 0:
            return 'F'
            break;
        default:
            return null
            break;
    }
}

let result = conceito(Math.random() * 10)
console.log(`O Conceito deste aluno foi: ${result}`)