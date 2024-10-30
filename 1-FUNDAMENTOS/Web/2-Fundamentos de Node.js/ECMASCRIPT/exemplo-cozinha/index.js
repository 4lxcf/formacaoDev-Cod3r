import cozinha from "./cozinha/index.js";
import receitaDefault from "./receita.js";
import { receita as receitaIndividualizada } from "./receita.js";

console.log(cozinha);
console.log(
  receitaDefault(cozinha.listaDeAlimentos, cozinha.assar, cozinha.cortar)
);
console.log(
  receitaIndividualizada(
    cozinha.listaDeAlimentos,
    cozinha.assar,
    cozinha.cortar
  )
);
