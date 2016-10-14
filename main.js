var word = 'javascript';
var userInput = document.getElementById('guess');
var answerInputs = document.getElementsByClassName('answer-input');
var guessList = document.querySelector('.guessed-list');

userInput.addEventListener('keydown', function() {
	userInput.value = '';
});

userInput.addEventListener('keyup', function() {
	if (word.indexOf(userInput.value) > -1) {
		for (var i = 0; i < word.length; i++) {
			if (word[i] === userInput.value) {
				answerInputs[i].value = userInput.value;
			}
		}
	} else if (guessList.innerText.indexOf(userInput.value) === -1) {
		var li = document.createElement('li');
		li.textContent = userInput.value;
		guessList.appendChild(li);
	}
});
