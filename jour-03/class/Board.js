export class Board {

    constructor(grid, hasWinner) {
        this.grid = grid;
        this.hasWinner = hasWinner;
    }

    initializeBoard() {
        this.grid = [   "-", "-", "-",
                        "-", "-", "-",
                        "-", "-", "-" ];
        this.hasWinner = false;                 
    }

    displayBoard() {
        var board = document.getElementById("board");
        for (let j = 0; j < 3; j++) {
            var row = document.createElement("div");
            row.className = "row";
            board.appendChild(row);
            for (let i = 0; i < 3; i++) {
                var button = document.createElement("button");
                button.className = "btn";
                button.id = "btn-" + j + "-" + i;
                row.appendChild(button);
            }
            board.appendChild(row);
            
        }

    }
}