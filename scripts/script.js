
	const WEAPONS = ["Rock", "Paper", "Scissors"];

	let pWeapon;
	let cWeapon;

	let pScore = 0;
	let cScore = 0;
	let roundNum = 0;

	const buttons = document.querySelectorAll('button');
	const notifier = document.querySelector('#notifier');
	const round = document.querySelector('.round');
	const score = document.querySelector('.score');

	buttons.forEach((button) => {
		button.addEventListener('click', (e) => {

			pWeapon = button.id;
			playRound();
			round.textContent = ("ROUND: " + roundNum);
			score.textContent = ("YOU: " + pScore + " ME: " + cScore);
			pWeapon = null;
			cWeapon = null;
			
			if (pScore == 5 || cScore == 5) {
				switch (true) {
					case (pScore > cScore):
						notifier.textContent = "YOU WIN. GOOD JOB."
						break;
					case (pScore > cScore):
						notifier.textContent = "YOU LOSE. PISS OFF."
						break;
					case (pScore == cScore):
						notifier.textContent = "BORE DRAW."
						break;
				}
			roundNum = 0;
			pScore = 0;
			cScore = 0;
			return;
			}
		})
	})

	function getComputerWeapon() {
		return Math.floor(Math.random() * 3);
	}

	function playRound() {

			cWeapon = getComputerWeapon();  //Selects computer weapon

			switch (true) {
				case (pWeapon == 0 && cWeapon == 2):
				case (pWeapon == 2 && cWeapon == 1):
				case (pWeapon == 1 && cWeapon == 0):
					notifier.textContent = ("You Win! " + WEAPONS[pWeapon] + " beats " + WEAPONS[cWeapon]);
					pScore++;
					break;
				case (pWeapon == 2 && cWeapon == 1):
				case (pWeapon == 1 && cWeapon == 2):
				case (pWeapon == 0 && cWeapon == 1):
					notifier.textContent = ("You Lose! " + WEAPONS[cWeapon] + " beats " + WEAPONS[pWeapon]);
					cScore++;
					break;	
				case (pWeapon === cWeapon):
					notifier.textContent = ("It's a draw");
					break;	
			}
			roundNum++;
	}
