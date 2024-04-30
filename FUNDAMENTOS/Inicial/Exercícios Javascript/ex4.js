//Conte as ocorrências das palavras no texto e exiba todas as palavras com mais de 6 ocorrências ordenadas em ordem decrescente.

const texto = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in massa tempor nec feugiat. Diam quam nulla porttitor massa id. Nibh sit amet commodo nulla facilisi nullam vehicula. Dignissim suspendisse in est ante in nibh. Vitae purus faucibus ornare suspendisse sed nisi lacus sed. Habitant morbi tristique senectus et netus et malesuada. Ultricies tristique nulla aliquet enim tortor at auctor. Interdum velit laoreet id donec. Tristique magna sit amet purus gravida quis blandit. Scelerisque varius morbi enim nunc faucibus a pellentesque. In dictum non consectetur a erat nam at lectus. At in tellus integer feugiat scelerisque varius morbi enim nunc. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Elementum eu facilisis sed odio morbi. Porttitor leo a diam sollicitudin tempor. Platea dictumst quisque sagittis purus sit. Vitae suscipit tellus mauris a. Sed id semper risus in hendrerit gravida rutrum. Id faucibus nisl tincidunt eget nullam. Habitant morbi tristique senectus et netus et malesuada fames ac. Gravida neque convallis a cras semper auctor neque vitae tempus. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Commodo elit at imperdiet dui accumsan. Arcu non sodales neque sodales ut etiam sit. Sapien eget mi proin sed libero enim sed faucibus. Nulla facilisi etiam dignissim diam quis enim. Vel pharetra vel turpis nunc eget lorem. Cursus sit amet dictum sit amet justo. Urna et pharetra pharetra massa massa. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Tellus rutrum tellus pellentesque eu tincidunt tortor. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Viverra mauris in aliquam sem fringilla ut morbi. Ultrices vitae auctor eu augue ut lectus arcu. Id diam maecenas ultricies mi. Ipsum faucibus vitae aliquet nec ullamcorper sit. Consectetur adipiscing elit ut aliquam purus. At lectus urna duis convallis. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Amet consectetur adipiscing elit pellentesque habitant morbi. Vel pretium lectus quam id. Elit eget gravida cum sociis natoque penatibus et magnis dis. Purus sit amet volutpat consequat mauris. Leo integer malesuada nunc vel risus commodo. Cursus eget nunc scelerisque viverra mauris in. Diam maecenas ultricies mi eget. Eros in cursus turpis massa tincidunt dui ut ornare lectus. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Enim neque volutpat ac tincidunt vitae semper quis lectus. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque. Feugiat nisl pretium fusce id velit ut. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Aliquam faucibus purus in massa tempor nec. Tortor posuere ac ut consequat semper. Habitant morbi tristique senectus et netus et. Id donec ultrices tincidunt arcu non sodales neque. Amet consectetur adipiscing elit duis tristique sollicitudin. Lacus sed turpis tincidunt id aliquet risus feugiat in. Sed elementum tempus egestas sed sed risus pretium quam. Gravida dictum fusce ut placerat orci nulla. Cursus vitae congue mauris rhoncus aenean. Amet nisl suscipit adipiscing bibendum. Metus vulputate eu scelerisque felis imperdiet. Nunc vel risus commodo viverra maecenas.`

function ordena(objeto){
    let arrayOfAllWords = []
    let word = ''
    const contagem = {}

    for (let index = 0; index < objeto.length; index++) {
        if (objeto[index] !== ' ' && objeto[index] !== ',' && objeto[index] !== '.'){
            word += objeto[index]         
        } else {
            arrayOfAllWords.push(word)
            word = ''
        }
    }

    arrayOfAllWords.forEach(
        function (x) {
            contagem[x] = (contagem[x] || 0) + 1;
        },
        
    )

    const result = Object.entries(contagem)
    return result
}


function filtra(array){
    const result = []
    
    for (const iterator of array) {
        if (iterator[1] > 6 && iterator[0] != '') {
            result.push(iterator)
        }
    }

    return result.sort(
        function(a, b) {
            return b[1] - a[1]
        }
    )
}

console.log(filtra(ordena(texto)))
//console.log(ordena(texto))