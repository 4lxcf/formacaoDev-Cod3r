import calculosBasicos from "./calculosBasicos.js";
import { soma, sub, texto as textoBasico } from "./calculosBasicos.js";
import calculosComplementares from "./calculosComplementares.js";
import {
  pot,
  resto,
  texto as textoComplementar,
} from "./calculosComplementares.js";

let x, y;
x = 20;
y = 3;

console.log(calculosBasicos.soma(x, y));
console.log(calculosBasicos.sub(x, y));
console.log(calculosBasicos.texto);
console.log(calculosComplementares.pot(x, y));
console.log(calculosComplementares.resto(x, y));
console.log(calculosComplementares.texto);

console.log(soma(x, y));
console.log(sub(x, y));
console.log(textoBasico);
console.log(pot(x, y));
console.log(resto(x, y));
console.log(textoComplementar);
