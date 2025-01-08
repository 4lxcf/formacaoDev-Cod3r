function f1() {
  f2();
  console.log("Chamei f1");
}
function f2() {
  f3();
  console.log("Chamei f2");
}
function f3() {
  console.log("Chamei f3");
}

function principal() {
  console.log("Função Principal");
  f1();
}

principal();
