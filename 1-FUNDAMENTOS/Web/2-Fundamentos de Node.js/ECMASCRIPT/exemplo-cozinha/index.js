import cozinha from "./cozinha/index.js";
import receitaDefault from "./receita.js";
import { receita as receitaIndividualizada } from "./receita.js";
import refeicao from "./refeicao.js";

const refeicaoAlmoco = refeicao("Almoço");
const refeicaoJantar = refeicao("Jantar");

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
console.log(refeicaoAlmoco(cozinha.listaDeAlimentos));
console.log(refeicaoJantar(cozinha.listaDeAlimentos));
