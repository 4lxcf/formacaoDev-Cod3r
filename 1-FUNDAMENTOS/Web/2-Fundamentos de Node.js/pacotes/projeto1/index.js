import chalk from "chalk";
import server from "server";
import { DateTime } from "luxon";

const { get } = server.router;

function imprimirHora(cidade, hora) {
  console.log(chalk.bgBlue(`Em ${cidade} são ${hora} horas !`));
  return `A hora exata de ${cidade} é: [ ${hora} ]`;
}

server({ port: 8080 }, [
  get("/", (ctx) => "Hello World"),
  get("/roma", () => {
    const h = DateTime.local({ zone: "Europe/Rome" }).toFormat("HH:mm:ss");
    return imprimirHora("Roma", h);
  }),
  get("/luanda", () => {
    const h = DateTime.local({ zone: "Africa/Luanda" }).toFormat("HH:mm:ss");
    return imprimirHora("Luanda", h);
  }),
  get("/seoul", () => {
    const h = DateTime.local({ zone: "Asia/Seoul" }).toFormat("HH:mm:ss");
    return imprimirHora("Seoul", h);
  }),
  get("/cuiaba", () => {
    const h = DateTime.local({ zone: "America/Cuiaba" }).toFormat("HH:mm:ss");
    return imprimirHora("Cuiaba", h);
  }),
]);

// const azul = (texto) => console.log(chalk.blue(texto));
// const aviso = (texto) => console.log(chalk.bgYellow.bold(texto));
// const erro = (texto) => console.log(chalk.bgRed.bold.italic(texto));

// azul("Sou um texto");
// aviso("TEXTO DE AVISO");
// erro("ABORTAR MISSÃO");
