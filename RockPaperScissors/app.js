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
    console.log("you selected %s, computer selected %s.", playerSelection, computerSelection)
    if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win! " + playerSelection + " beats " + computerSelection + ".");
        return true
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win! " + playerSelection + " beats " + computerSelection + ".");
        return true
    }
    if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win! " + playerSelection + " beats " + computerSelection + ".");
        return true
    }
    else {
        console.log("You lose! " + computerSelection + " beats " + playerSelection + ".");
        return false
    }
}

function game() {
    let numberOfTurn = 0;
    let playerScore = 0;
    let computerScore = 0;

    while (numberOfTurn < 5) {
        let playerSelection = prompt("What's your choice?").toLowerCase();
        let computerSelection = computerPlay();

        if (playerSelection == computerSelection) {
            console.log("Draw");
            numberOfTurn++;
            continue;
        }

        if (playRound(playerSelection, computerSelection)) {
            playerScore++;
        }
        else {
            computerScore++;
        }
        numberOfTurn++;
    }

    if (playerScore > computerScore) {
        console.log("YOU WİN!!");
    }
    else {
        console.log("YOU LOSE!!");
    }
}

game();