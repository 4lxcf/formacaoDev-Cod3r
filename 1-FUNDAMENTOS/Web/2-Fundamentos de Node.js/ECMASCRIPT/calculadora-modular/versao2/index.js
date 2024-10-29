//IMPORT DEFAULT
import calculos from "./calculos.js";
//IMPORT INDIVIDUALIZADO
import { texto, soma, sub } from "./calculos.js";

let x, y;
x = 10;
y = 8;

//PRINT NO CONSOLE DAS INFORMAÇÕES ATRAVÉS DO IMPORT DEFAULT
console.log(calculos.texto);
console.log(calculos.soma(x, y));
console.log(calculos.sub(x, y));

//PRINT NO CONSOLE DAS INFORMAÇÕES ATRAVÉS DO IMPORT INDIVIDUAL
console.log(texto);
console.log(soma(x, y));
console.log(sub(x, y));
