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

const checkWinner = () => {
    return parseInt(document.querySelector('#playerScore').textContent) == 5 ? 1 
    : parseInt(document.querySelector('#computerScore').textContent) == 5 ? 2 :
    null
}

const handleClick = (e) => {
    if (checkWinner()) return
    const round = playRound(e.target.alt, computerPlay());
    console.log(round)
    switch (round[0]) {
        case 1:
            const playerScore = document.querySelector('#playerScore');
            playerScore.textContent = parseInt(playerScore.textContent) + 1;
            document.querySelector("#playerMarker").classList.add("point");
            break;
        case 2:
            const computerScore = document.querySelector('#computerScore');
            computerScore.textContent = parseInt(computerScore.textContent) + 1;
            document.querySelector("#computerMarker").classList.add("point");
            break;
    
        default:
            break;
    }
    const log = document.querySelector('#log');
    let result = document.createElement("P");
    result.appendChild(document.createTextNode(round[1]));
    log.appendChild(result);
    const winner = checkWinner();
    if (winner) {
        result = document.createElement("P");
        result.appendChild(document.createTextNode(winner == 1 ? "You win the game!" : "The computer has won."));
        log.appendChild(result);
        document.querySelector("h2").textContent = winner == 1 ? "You win the game!" : "The computer has won.";
        document.querySelector(winner == 1 ? "#playerMarker" : "#computerMarker").classList.add("winner")
    }


    
}

const removeTransition = (e) => {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('point');
}

const resetPage = (e) => {
    window.location.reload();
}

let p1Wins = 0, p2Wins = 0;
const buttons = Array.from(document.querySelectorAll('.option'));
const markers = Array.from(document.querySelectorAll('.marker'));
console.log(markers);
markers.forEach(marker => marker.addEventListener('transitionend', removeTransition));
buttons.forEach(button => button.addEventListener('click', handleClick));
const reset = document.querySelector('#reset');
reset.addEventListener('click', resetPage);