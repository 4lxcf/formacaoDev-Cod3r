import { salvar, deletar, ler, persistirValores } from "./banco.js";

// console.log(ler());

salvar("Ana");
salvar("Felipe");
salvar("Carla");
salvar("Monize");

console.log("<-------------------------------------------------->");
// console.log(ler());

persistirValores();
