const button = document.querySelector("#button");
const number = document.querySelector("#number");
const initial_base = document.querySelector("#initial-base");
const target_base = document.querySelector("#target-base");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
  let convertedNumber;
  const actualNumber = +number.value;
  const targetBaseNumber = transformBaseNameToNumber(target_base.value);

  if (target_base.value === initial_base.value) {
    convertedNumber = actualNumber;
  } else {
    convertedNumber = actualNumber.toString(targetBaseNumber);
  }

  result.innerHTML = `${actualNumber}<sub>${initial_base.value}</sub> => ${convertedNumber}<sub>${target_base.value}</sub>`;
});

function transformBaseNameToNumber(baseName) {
  switch (baseName) {
    case "Decimal":
      return 10;
      break;

    case "Hexadecimal":
      return 16;
      break;

    case "Octal":
      return 8;
      break;

    case "Binario":
      return 2;
      break;

    default:
      return 0;
      break;
  }
}
