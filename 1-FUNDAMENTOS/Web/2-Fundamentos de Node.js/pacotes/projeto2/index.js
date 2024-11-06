import pensador from "pensador-scrap";
import fs from "fs";

const obj = await pensador.search({ query: "Platao", limit: 10 });

const pensamentos = obj.success.thought;
const numeroAleatorio = Math.floor(Math.random() * pensamentos.length);
const pensamentoSelecionado = pensamentos[numeroAleatorio].content;
const autor = pensamentos[numeroAleatorio].author;

const pensamentoSalvo = `=> O pensamento escolhido de ${autor} foi: "${pensamentoSelecionado}"\n`;

fs.appendFileSync("frases.txt", pensamentoSalvo, "utf8");

const texto = fs.readFileSync("frases.txt", "utf8");
console.log(texto);
