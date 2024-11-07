import { salvar, deletar, ler, persistirValores } from "./banco.js";

console.log(ler());

salvar("Ana", 313);
salvar("Felipe", 411);
salvar("Carla", 51);
salvar("Monize", 616);

deletar(13);
deletar(1);

console.log("<-------------------------------------------------->");
console.log(ler());

persistirValores();
