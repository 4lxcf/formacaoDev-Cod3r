import { editarOuSalvar, deletar, ler, persistirValores } from "./banco.js";

console.log(ler());

editarOuSalvar("Ana", 2);
// editarOuSalvar("Felipe");
// editarOuSalvar("Carla");
// editarOuSalvar("Monize");

console.log("<-------------------------------------------------->");
console.log(ler());

persistirValores();
