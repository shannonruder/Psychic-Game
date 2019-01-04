//Available choices
var letterChoices = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

//score
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var userGuesses = [];
var letterToGuess = null;

//computer randomly chooses a letter

var computerGuess = letterChoices [Math.floor(Math.random()*letterChoices.length)];



//guesses left function

var updateGuessesLeft = function() {
	document.querySelector('#guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
};

//letter to guess function

var updateletterToGuess = function(){
	this.letterToGuess = this.letterChoices[Math.floor(Math.random() * this.letterChoices.length)];
};

var updateGuessesSoFar = function(){
	document.querySelector('#let').innerHTML = "Your guesses so far: " + userGuesses.join(', ');
};

//reset

var reset = function(){
	totalGuesses = 9;
	guessesLeft = 9;
	userGuesses = [];

	updateletterToGuess();
	updateGuessesSoFar();
	updateGuessesLeft();

};

updateGuessesLeft();
updateletterToGuess();

//user input key

document.onkeyup = function(event) {
	guessesLeft--;
      var userGuess = event.key; 
      console.log(letterToGuess);
      document.getElementById('letterToGuess').innerHTML = letterToGuess;
	
	userGuesses.push(userGuess);
	updateGuessesLeft();
	updateGuessesSoFar();

		if (guessesLeft > 0){
			if (userGuess === letterToGuess){
				wins++;
				document.querySelector('#wins').innerHTML = 'Wins: ' + wins;
				alert("How did you know!?!");
				reset();
			}
		} else if (guessesLeft == 0){
			losses++;
			document.querySelector('#losses').innerHTML = 'Losses: ' + losses;
			alert("Sorry, you're not a psychic!");

			reset();
		}
}