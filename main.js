
var randomWord = require("./wordList.js");
var Letter = require("./letter.js");
var Word = require("./word.js");
var inquirer = require("inquirer");

var letterGuessed;

var movieWord = new Word(randomWord);
var maxGuesses = 15;

function guess() {
	console.log(movieWord.toString());
	if (movieWord.guessMade.length >= maxGuesses) {
		console.log("You have no more guesses. You lose");
		return;
	}
	inquirer.prompt([{
		name: "letter",
		type: "text",
		message: "Enter a letter: ",
		validate: function(str) {
			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(str);
		}

	}]).then(function(letterInput) {
			var letter = letterInput.letter;
			movieWord.findLetter(letter);
			if (movieWord.isFinished()) {
				console.log("Correct. The movie was " + movieWord.toString());
				return;
			}
			console.log("-----------------\n\n");
			console.log("You have " + (maxGuesses - movieWord.guessMade.length) + " guesses left");
			guess();

	});
};

guess();
