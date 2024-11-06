<p align="center">
 <h2 align="center">pensador-scraping</h2>
 <p align="center">Faça um webscraping do site <a href="https://www.pensador.com/">pensador</a> procurando um pensamento (poesia, mensagem ou frase)</p>
</p>

[![npm version](https://img.shields.io/npm/v/pensador-scrap.svg?style=flat-square)](https://www.npmjs.org/package/pensador-scrap)
[![npm downloads](https://img.shields.io/npm/dm/pensador-scrap.svg?style=flat-square)](https://npm-stat.com/charts.html?package=pensador-scrap)
[![Coverage Status](https://coveralls.io/repos/github/matheusgmc/pensador-scraping/badge.svg?branch=main)](https://coveralls.io/github/matheusgmc/pensador-scraping?branch=main)

### O que faz?

- Buscar no site e retorna uma lista de pensamentos, podendo limitar a quantidade dos resultados.
- Buscar informações de um determinado autor.
- Buscar os Top 9 Autores do site.
- Buscar a biografia de um autor.
- Escolhe um pensamento "aleatório" de algum tópico.

### Como instala?

```bash
npm i pensador-scrap
```

### Exemplos

para mais [Exemplos](./examples/),

Buscar um pensamento usando o `search`

```js
const { error, success } = await pensador.search({
	query: "elon musk", //obrigatório
	limit: 2, //opcional - padrão é 1
});
```

tipagem do resultado vira assim:

```ts
{
  author: {
    name: string
    thought_total: number
    avatar_url: string
    info: string
    associated: string[]
    bio: string
    tags: string
  },
  thought:
    {
      author: string
      content: string
      image_url: string
      url: string
    }[]
  query: string
  total: number
}
```
