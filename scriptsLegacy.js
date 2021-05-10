let computerPlay = () => {
    return ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)]
}

let playRound = (playerSelection, computerSelection) => {
    const p1 = playerSelection.toLowerCase();
    const p2 = computerSelection.toLowerCase();
    //console.log(p1,p2)
    if (p1 == p2) {
        return [0,"It's a draw!"]
    }
    switch (p1) {
        case "rock":
            if (p2 == "scissors") {
                return [1,`You win! ${playerSelection} beats ${computerSelection}.`]
            } else {
                return [2,`You lose! ${computerSelection} beats ${playerSelection}.`]
            }
            break;

        case "paper":
            if (p2 == "rock") {
                return [1,`You win! ${playerSelection} beats ${computerSelection}.`]
            } else {
                return [2,`You lose! ${computerSelection} beats ${playerSelection}.`]
            }
            break;

        case "scissors":
            if (p2 == "paper") {
                return [1,`You win! ${playerSelection} beats ${computerSelection}.`]
            } else {
                return [2,`You lose! ${computerSelection} beats ${playerSelection}.`]
            }
            break;
    
        default:
            return([null,"Bad input, try again."])
            break;
    }
  }

let game = () => {
    let p1Wins = 0, p2Wins = 0;
    while (p1Wins < 5 && p2Wins < 5) {
        const results = playRound(prompt("Rock, paper or scissors!"),computerPlay())
        console.log(results[1])
        if (results[0] == 1) {p1Wins += 1}
        else if (results[0] == 2)  {p2Wins += 1}
        console.log(`Player: ${p1Wins} | Computer: ${p2Wins}`)
    }
    console.log(p1Wins == 5 ? "You've won the game!" : "You've lost the game.")
}

game()