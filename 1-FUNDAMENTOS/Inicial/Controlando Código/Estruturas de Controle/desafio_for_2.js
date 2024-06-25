let result = [];

for (let i = 1; i < 7; i++) {
    for (let j = i; j > 0; j--) {
        result += '#'
    }
    result += '\n'
}

console.log(result)