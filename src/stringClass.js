String.prototype.hasVowels = function() {
  var vowelsPattern = /[aeiou]/gi;

  return vowelsPattern.test(this);
};

String.prototype.toUpper = function() {
  return this.split("")
    .map(e => {
      var index = e.charCodeAt(e);
      return index > 96 && index < 123
        ? (e = String.fromCharCode(index - 32))
        : e;
    })
    .join("");
};

String.prototype.toLower = function() {
  return this.split("")
    .map(e => {
      var index = e.charCodeAt(e);
      return index > 63 && index < 91
        ? (e = String.fromCharCode(index + 32))
        : e;
    })
    .join("");
};

String.prototype.ucFirst = function() {
  var word = this.trim();
  return word.charAt(0).toUpper() + word.slice(1);
};

String.prototype.isQuestion = function() {
  var question = this.trim();
  var questionReGex = /^.{2,}\?$/;

  return questionReGex.test(question);
};

