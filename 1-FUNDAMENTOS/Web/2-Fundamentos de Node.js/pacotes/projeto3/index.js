import { editarOuSalvar, deletar, ler, persistirValores } from "./banco.js";
import { menu, end, read, bluefy, greenfy } from "./interface.js";

const menuItems = [
  " Add ",
  " Edit ",
  " Delete ",
  " See All ",
  " Keep ",
  " Exit ",
];

let name, id;

while (true) {
  const selected = await menu(menuItems);
  switch (selected.trim().toLowerCase()) {
    case "add":
      name = await read("Digite o nome do usuário: ");
      editarOuSalvar(name);
      greenfy("Feito!");
      break;
    case "edit":
      id = await read("Digite o ID do usuário: ");
      name = await read("Digite o novo nome de usuário: ");
      editarOuSalvar(name, +id);
      greenfy("Feito!");
      break;
    case "delete":
      id = await read("Digite o ID do usuário: ");
      deletar(+id);
      greenfy("Feito!");
      break;
    case "see all":
      const data = ler();
      bluefy(data);
      break;
    case "keep":
      persistirValores();
      greenfy("Feito!");
      break;
    case "exit":
      end();
      greenfy("Tchau!");

    default:
      console.log(`${selected.trim().toLowerCase()} não é válido!`);
  }
}
