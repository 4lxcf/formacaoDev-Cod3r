import kit from "terminal-kit";
const term = kit.terminal;

export async function menu(itens) {
  let options = {
    style: term.inverse,
    selectedStyle: term.white.bgCyan,
  };
  const selectedOption = await term.singleLineMenu(itens, options).promise;

  return selectedOption.selectedText;
}

export function end() {
  process.exit();
}

export async function read(text) {
  term(`${text}\n\n`);
  const readText = await term.inputField().promise;

  return readText;
}

export function greenfy(text) {
  term.green(`\n\n${text}`);
}

export function bluefy(text) {
  term.blue(`\n\n${text}`);
}
