let f = 100

function temperatura_celsius(temp_f){
    let temp_c

    temp_c = 5 * (temp_f - 32) /  9
    return temp_c
}

console.log(temperatura_celsius(f).toFixed(1))