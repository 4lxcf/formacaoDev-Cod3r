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

export async function getUserID(itens) {
  let options = {
    style: term.inverse,
    selectedStyle: term.white.bgCyan,
  };

  const selectedOption = await term.singleColumnMenu(itens, options).promise;
  const userID = selectedOption.selectedText.split("|")[1].split(":")[1].trim();
  return userID;
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

export function end() {
  process.exit();
}
