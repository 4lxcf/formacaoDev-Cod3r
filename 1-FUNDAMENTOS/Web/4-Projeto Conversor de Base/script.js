const button = document.querySelector("#button");
const number = document.querySelector("#number");
const initial_base = document.querySelector("#initial-base");
const target_base = document.querySelector("#target-base");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
  let convertedNumber;
  const actualNumber = number.value;

  if (target_base.value === initial_base.value) {
    convertedNumber = actualNumber;
  } else {
    const middleNumber = parseInt(actualNumber, initial_base.value);
    convertedNumber = +middleNumber.toString(+target_base.value);
  }

  result.classList.remove("invisible");
  result.innerHTML = `${actualNumber}<sub>${initial_base.value}</sub> => ${convertedNumber}<sub>${target_base.value}</sub>`;
});
