// Export individual serve para ser importado em outro ambiente de forma individualizada
export const texto = "Sou do arquivo Calculos.js !";
export function soma(a, b) {
  return a + b;
}
export function sub(a, b) {
  return a - b;
}

// Export default é utilizado quando você já deseja importar todos os elementos deste arquivo em outro
export default { texto, soma, sub };
