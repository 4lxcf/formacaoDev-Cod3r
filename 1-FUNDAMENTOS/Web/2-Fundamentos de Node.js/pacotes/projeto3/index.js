import { salvar, deletar, ler } from "./banco.js";

salvar("Ana", 13);
salvar("Felipe", 11);
salvar("Carla", 1);
salvar("Monize", 16);

console.log(ler());

deletar(13);
deletar(1);

console.log(ler());
