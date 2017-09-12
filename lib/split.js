module.exports = function (str) {
  // TODO
  var result = str.split(/\r?\n?\s{0,2},\r?\n?\s{0,2}/);
  return result;
}