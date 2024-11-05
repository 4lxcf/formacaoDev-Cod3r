import chalk from "chalk";

const azul = (texto) => console.log(chalk.blue(texto));
const aviso = (texto) => console.log(chalk.bgYellow.bold(texto));
const erro = (texto) => console.log(chalk.bgRed.bold.italic(texto));

azul("Sou um texto");
aviso("TEXTO DE AVISO");
erro("ABORTAR MISSÃO");
