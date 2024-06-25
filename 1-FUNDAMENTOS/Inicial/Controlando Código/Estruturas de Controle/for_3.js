let phrase = []

for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
        phrase += `[${row+1}-${column+1}] `
    }
    phrase += '\n'
}
    
console.log(phrase)