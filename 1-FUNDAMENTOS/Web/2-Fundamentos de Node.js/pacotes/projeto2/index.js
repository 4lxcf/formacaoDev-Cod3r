import pensador from "pensador-scrap";

const obj = await pensador.search({ query: "Platao", limit: 10 });

const pensamentos = obj.success.thought;
const numeroAleatorio = Math.floor(Math.random() * pensamentos.length);

console.log(pensamentos[numeroAleatorio].content);
