window.addEventListener("DOMContentLoaded", event => {
    let board = document.getElementById("tic-tac-toe-board");
    let count = 0;
    let winningCombos = ["012", "345", "678", "036", "147", "258", "048", "246"];
    let xMoves = [];
    let oMoves = [];
    let header = document.getElementById("game-status");
    let winner = false;

    const isItWinning = (arr) => {
        for (let j = 0; j < winningCombos.length; j++) {
            let curWinningCombo = winningCombos[j];
            if (arr.includes(curWinningCombo[0]) && arr.includes(curWinningCombo[1]) && arr.includes(curWinningCombo[2])) {
                return true;
            }
        } 
        return false;
    }
    
    board.addEventListener("click", event => {
        if (!winner) {
            if (event.target.id !== "stop") {
                count++;
                if (count % 2 === 1) {
                    event.target.innerHTML = `<img id="stop" class="X" src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-x.svg" alt="X">`;
                    xMoves.push(event.target.id.slice(-1));
                    console.log(xMoves);
                    if (isItWinning(xMoves)) {
                        header.innerText = "Winner: X"
                        winner = true;
                    }
                } else {
                    event.target.innerHTML = `<img id="stop" class="O" src="https://assets.aaonline.io/Module-DOM-API/formative-project-tic-tac-toe/player-o.svg" alt="O">`;
                    oMoves.push(event.target.id.slice(-1));
                    console.log(oMoves);
                    if (isItWinning(oMoves)) {
                        header.innerText = "Winner: O"
                        winner = true;
                    }
                }
            }
        }
    });
    let newGameButton = document.querySelector("button");
    newGameButton.addEventListener("click", event => {
        location.reload();
    });
});