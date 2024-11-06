import pensador from "pensador-scrap";
import fs from "fs";

const autor = "Platao";
const obj = await pensador.search({ query: autor, limit: 10 });

let pensamentoSalvo;

try {
  const pensamentos = obj.success.thought;
  const numeroAleatorio = Math.floor(Math.random() * pensamentos.length);
  const pensamentoSelecionado = pensamentos[numeroAleatorio].content;

  pensamentoSalvo = `=> O pensamento escolhido de ${autor} foi: "${pensamentoSelecionado}"\n`;
} catch (error) {
  pensamentoSalvo = `=> Este ${autor} não existe na plataforma."\n`;
} finally {
  fs.appendFileSync("frases.txt", pensamentoSalvo, "utf8");
  const texto = fs.readFileSync("frases.txt", "utf8");

  console.log(texto);
}
