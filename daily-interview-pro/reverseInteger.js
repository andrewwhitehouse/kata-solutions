function reverseInteger(num) {
  let result = 0;
  let posNum = Math.abs(num);
  while (posNum > 0) {
    let digit = posNum % 10;
    result = result*10 + digit;
    posNum = Math.floor(posNum / 10);
  }
  return num < 0 ? -result : result;
}

module.exports = { reverseInteger };