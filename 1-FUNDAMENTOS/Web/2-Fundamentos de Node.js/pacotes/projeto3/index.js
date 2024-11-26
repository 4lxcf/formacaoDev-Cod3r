import { editarOuSalvar, deletar, ler, persistirValores } from "./banco.js";
import { menu, end } from "./interface.js";

const menuItems = [
  " Add ",
  " Edit ",
  " Delete ",
  " See All ",
  " Keep ",
  " Exit ",
];

while (true) {
  const selected = await menu(menuItems);
  switch (selected.trim().toLowerCase()) {
    case "add":
      break;
    case "edit":
      break;
    case "delete":
      break;
    case "see all":
      const data = ler();
      console.log(data);
      break;
    case "keep":
      persistirValores();
      break;
    case "exit":
      end();

    default:
      console.log(`${selected.trim().toLowerCase()} não é válido!`);
  }
}
