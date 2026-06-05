const GameBoard = {
    board: [
        '', '', '',
        '', '', '',
        '', '', ''
    ],

    winnerPatterns: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ],

    placeMark(index, marker) {
        this.board[index] = marker;
    },

    reset() {
        this.board = [
            '', '', '',
            '', '', '',
            '', '', ''
        ];
    },



}


function Player(name, marker) {
    return { name, marker };
}

player1 = Player("Player1", "X");
player2 = Player("Player2", "O");



const GameController = {
    currentPlayer: player1,

    playRound(index) {
        GameBoard.placeMark(index, this.currentPlayer.marker);
        if (this.checkWinner()) {
            if (this.currentPlayer === player1) {
                winnerText[0].style.display = "block";
            }
            else {
                winnerText[1].style.display = "block";
            }
            cells.forEach(cell => {
                cell.style.pointerEvents = "none";
            });
            return;

        }
        this.switchPlayer();
    },

    switchPlayer() {
        if (this.currentPlayer === player1) {
            this.currentPlayer = player2;
            playerTitle[0].style.backgroundColor = ""
            playerTitle[1].style.backgroundColor = "#6290C8"
        }
        else {
            this.currentPlayer = player1;
            playerTitle[1].style.backgroundColor = ""
            playerTitle[0].style.backgroundColor = "#6290C8"
            console.log(playerTitle);
        }
    },

    checkWinner() {
        for (let combo of GameBoard.winnerPatterns) {
            let [a, b, c] = combo;

            if (GameBoard.board[a] && GameBoard.board[a] === GameBoard.board[b] && GameBoard.board[b] === GameBoard.board[c]) {
                return true;
            }
        }
        return false;
    },
}

const GameDisplay = {
    render(cell, index) {
        cell.textContent = GameController.currentPlayer.marker;
        GameController.playRound(index);
    },

    reset(cells, players, winText) {

        GameBoard.reset();

        winText.forEach((text) => {
            text.style.display = "none";
        });

        cells.forEach((cell) => {
            cell.textContent = GameBoard.board[cell];
            cell.style.pointerEvents = "auto";
        });
        players[0].style.backgroundColor = "#6290C8";
        players[1].style.backgroundColor = "";
    },
}

const cells = document.querySelectorAll("div");
const resetBtn = document.getElementById("reset");
const winnerText = document.querySelectorAll(".winner-text");
const playerTitle = document.querySelectorAll("h2");
playerTitle[0].style.backgroundColor = "#6290C8"

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        GameDisplay.render(cell, index);

    })
})

resetBtn.addEventListener("click", () => {
    GameDisplay.reset(cells, playerTitle, winnerText);
})