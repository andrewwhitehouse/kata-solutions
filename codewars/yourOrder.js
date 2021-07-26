function embeddedNumber(word) {
  return parseInt(word.match(/\d+/));
}

function order(s) {
  let words = s.split(' ');
  words.sort((a,b) => embeddedNumber(a) - embeddedNumber(b));
  return words.join(" ");
}

module.exports = {order};