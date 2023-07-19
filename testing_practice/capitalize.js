function capitalize(str) {
  let firstLetter = str.charAt(0);
  let firstLetterUpper = firstLetter.toUpperCase();
  let rest = str.slice(1);
  let together = firstLetterUpper + rest;

  return together;
}

module.exports = capitalize;
