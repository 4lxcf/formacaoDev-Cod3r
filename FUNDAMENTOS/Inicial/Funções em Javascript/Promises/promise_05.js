const url = 'https://api.disneyapi.dev/character'

fetch(url)
    .then(resposta => resposta.json())
    .then(dados => console.log(dados))