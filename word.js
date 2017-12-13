
var Letter = require("./letter.js");

var Word = function(value) {
	this.value = value;
	this.letters = [];
	this.guessMade = "";
	for (var i = 0; i < this.value.length; i++) {
		this.letters.push(new Letter(this.value[i]));
	}
};

Word.prototype.isFinished = function() {
	for (var i = 0; i < this.letters.length; i++) {
		if (!this.letters[i].show) {
			return false;
		}
		return true;
	}
};

Word.prototype.findLetter = function(letter) {
	var lowerLetter = letter.toLowerCase();
	if (this.guessMade.indexOf(lowerLetter) !== -1) {
		return "Duplicate";
	}
	this.guessMade += lowerLetter;
	for (var i = 0; i < this.letters.length; i++) {
		if (this.letters[i].value.toLowerCase() === lowerLetter) {
			this.letters[i].show = true;
		}
	}
};

Word.prototype.toString = function() {
	var output = "";
	for (var i = 0; i < this.letters.length; i++) {
		output += this.letters[i].printInfo();
	}
	return output;
};

module.exports = Word;