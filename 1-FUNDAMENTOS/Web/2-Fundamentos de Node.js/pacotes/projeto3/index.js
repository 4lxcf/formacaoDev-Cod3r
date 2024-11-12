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

const selected = await menu(menuItems);
console.log(selected);
end();
