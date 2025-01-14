const alfabeto = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const selector = document.getElementById("deslocamento");
const message = document.getElementById("para-criptografar");
const button = document.getElementById("botao");
const result = document.getElementById("resposta");

for (let i = 0; i < alfabeto.length; i++) {
  selector.innerHTML += `<option value="${i}">${alfabeto[i]}</option>`;
}

button.addEventListener("click", () => {
  let originalMessage = message.value;
  let encryptionLetter = +selector.value; //O motivo de usar o '+' é para transformar o valor em número
  let encrypted = encrypt(originalMessage, encryptionLetter);

  result.innerText = encrypted.join("");
  result.classList = "";
});

function encrypt(text, displacement) {
  let capitalMessage = text.toUpperCase().split("");
  let encryptedMessage = [];

  for (let i = 0; i < capitalMessage.length; i++) {
    let letterIndex = alfabeto.indexOf(capitalMessage[i]);

    if (letterIndex >= 0) {
      encryptedMessage.push(changeLetterToIndex(letterIndex + displacement));
    }
  }

  for (let i = 0; i < encryptedMessage.length; i++) {
    encryptedMessage[i] = alfabeto.at(encryptedMessage[i]);
  }

  return encryptedMessage;
}

function changeLetterToIndex(index) {
  let finalIndex;

  if (index >= 0) {
    finalIndex = index % alfabeto.length;
  } else {
    finalIndex = alfabeto.length + (index % alfabeto.length);
  }

  return finalIndex;
}
