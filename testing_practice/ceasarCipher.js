const fixString = function (str) {
  let newString = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  return newString;
};

const cipher = function (plainTxt, shift) {
  let plainTxtLower = fixString(plainTxt).split("");

  const shiftedWord = [];
  for (let i = 0; i < plainTxtLower.length; i++) {
    if (plainTxtLower[i].charCodeAt() + shift > 122) {
      shiftedWord.push(((plainTxtLower[i].charCodeAt() + shift) % 122) + 97);
    } else {
      shiftedWord.push(plainTxtLower[i].charCodeAt() + shift);
    }
  }

  const cipherWord = [];
  for (let i = 0; i < shiftedWord.length; i++) {
    cipherWord.push(String.fromCharCode(shiftedWord[i]));
  }

  return cipherWord.join("");
};

module.exports = cipher;
