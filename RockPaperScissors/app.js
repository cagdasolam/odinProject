const container = document.querySelector('#container');
const scores = document.querySelector('#scores');
const result = document.querySelector('#result');

const message = document.createElement('message');
const playerScoreText = document.createElement('playerScore');
const computerScoreText = document.createElement('computerScore');

let playerScore = 0;
let computerScore = 0;

playerScoreText.textContent = playerScore;
computerScoreText.textContent = computerScore

scores.appendChild(playerScoreText);
scores.appendChild(computerScoreText);

function computerPlay() {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "scissors";
        case 2:
            return "paper";
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerScore == 5 || computerScore == 5) {
        location.reload();
    } else {
        message.textContent = "You selected " + playerSelection + " computer selected " + computerSelection + ".";
        container.appendChild(message);

        if (playerSelection == computerSelection) {
            message.textContent += "\nIt's a tie!"
        }
        else if (playerSelection == "rock" && computerSelection == "scissors" ||
            playerSelection == "scissors" && computerSelection == "paper" ||
            playerSelection == "paper" && computerSelection == "rock") {
            // console.log("You win! " + playerSelection + " beats " + computerSelection + ".");
            message.textContent += "\nYou win! " + playerSelection + " beats " + computerSelection + ".";
            playerScore++;
            playerScoreText.textContent = playerScore;

            if (playerScore == 5) {
                result.textContent = "YOU WIN!!"
            }
        }
        else {
            // console.log("You lose! " + computerSelection + " beats " + playerSelection + ".");
            message.textContent += "\nYou lose! " + computerSelection + " beats " + playerSelection + ".";

            computerScore++;
            computerScoreText.textContent = computerScore

            if (computerScore == 5) {
                result.textContent = "YOU LOSE!!"
            }
        }
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        playRound(button.id, computerPlay());
    });
});
