// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7

// calcular(3)(7)(fn)

const mul = (a, b) => a * b
const sum = (a, b) => a + b
const sub = (a, b) => a - b

const calcular1 = (a, b, fn) => fn(a, b)
const calcular2 = a => b => fn => fn(a, b)

console.log(calcular1(3, 7, mul))
console.log(calcular1(3, 7, sum))
console.log(calcular1(3, 7, sub))

console.log(calcular2(3)(7)(mul))
console.log(calcular2(3)(7)(sum))
console.log(calcular2(3)(7)(sub))