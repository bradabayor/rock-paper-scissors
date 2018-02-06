	//Variables + Constants

	const WEAPONS = ["Rock", "Paper", "Scissors"];

	const BUTTONS = document.getElementsByClassName('weapon');
	const NOTIFIER = document.getElementById('notifier');
	const ROUND = document.getElementById('round');
	const SCORE = document.getElementById('score');
	const SCOREBOARD = document.getElementById('scoreboard');

	let pWeapon;
	let cWeapon;

	let pScore = 0;
	let cScore = 0;
	let roundNum = 0;

	//Event Listeners

	for (var i = 0; i < BUTTONS.length; i++) {
		BUTTONS[i].addEventListener('click', function() {
			
			if (pScore === 5 || cScore === 5) {
				stop;
			} else {
				pWeapon = this.id;
				playRound();
				updateScore();
				cWeapon = null;
				pWeapon = null;
				if (pScore === 5 || cScore === 5) {
					switch (true) {
						case (pScore > cScore):
							SCOREBOARD.style.borderColor = 'SpringGreen';
							NOTIFIER.textContent = "YOU WIN...NICE";
							break;
						case (cScore > pScore):
							SCOREBOARD.style.borderColor = 'red';
							NOTIFIER.textContent = "YOU LOSE...PISS OFF";
							break;
						default:
							SCOREBOARD.style.borderColor = 'blue';
							NOTIFIER.textContent = "ANOTHER DRAW. WHAT A SHIT GAME."
							break;
					}
				}
			}
		});
	};

	//Functions

	function updateScore() {
		ROUND.textContent = roundNum;
		SCORE.textContent = pScore + " : " + cScore;
	}

	function gameOver() {
		switch (true) {
						case (pScore > cScore):
							SCOREBOARD.style.borderColor = 'SpringGreen';
							NOTIFIER.textContent = "YOU WIN";
							break;
						case (cScore > pScore):
							SCOREBOARD.style.borderColor = 'red';
							NOTIFIER.textContent = "YOU LOSE";
							break;
						default:
							SCOREBOARD.style.borderColor = 'blue';
							break;
		}
	}
	

	function getComputerWeapon() {
		return Math.floor(Math.random() * 3);
	}

	function playRound() {
			
				cWeapon = getComputerWeapon();  //Selects computer weapon

				switch (true) {
					case (pWeapon == 0 && cWeapon == 2):
					case (pWeapon == 2 && cWeapon == 1):
					case (pWeapon == 1 && cWeapon == 0):
						pScore++;
						NOTIFIER.textContent = "NICE GUESS"
						break;
					case (pWeapon == 2 && cWeapon == 1):
					case (pWeapon == 1 && cWeapon == 2):
					case (pWeapon == 0 && cWeapon == 1):
						cScore++;
						NOTIFIER.textContent = "YOU SUCK"
						break;	
					default:
						NOTIFIER.textContent = "BORE DRAW"
						break;	
				}
				roundNum++;		
}
