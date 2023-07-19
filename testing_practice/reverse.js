const reverse = function (str) {
  let stringArr = str.split("");
  let revStringArr = [];
  for (let i = stringArr.length - 1; i >= 0; i--) {
    revStringArr.push(stringArr[i]);
  }
  let together = revStringArr.join("");
  return together;
};

module.exports = reverse;
