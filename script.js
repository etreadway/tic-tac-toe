/*
TODO: 
    add a check for tie game
    

*/

var boardElement = document.getElementById('board');
var board = [];
var player = 1;
var winState = false
initGame();

// builds initial board and gives squares functionality
function initGame() {
    // iterates through every row
    for (var row = 0; row < 3; row++) {
        if (board[row] == undefined) {
            board[row] = [];
        }

        // iterates through every col 
        for (var col = 0; col < 3; col++) {
            // this makes each row appear on a new line
            if (col == 0){
                boardElement.appendChild(document.createElement('br'));
            }

            // creates each slot and gives it a blank image
            var slot = document.createElement("img");
            slot.className = "blank";
            slot.src = 'images/blank.png';

            // gives each slot click functionality
            slot.addEventListener("click", function () {
                // if statement makes sure the spot is not taken
                if (this.className == 'blank'){
                    // checks who's turn it is and assigns proper image
                    if (player == 1){
                        this.src = 'images/x.png';
                        this.className = 'x';
                        player = 2;
                    } else {
                        this.src = 'images/o.png';
                        this.className = 'o';
                        player = 1;
                    }

                    boardStateCheck()
                }
            });
            // array that you can change
            board[row][col] = slot;
            // appends to the html document
            boardElement.appendChild(slot);
        }//end of col
    }//end of row
}

//runs all board checks
function boardStateCheck() {
    rowCheckForWin();
    colCheckForWin();
    diagCheckForWin();
    lockBoard();
}

// checks for a win on each row
function rowCheckForWin() {
    for (var i=0; i<3; i++){
        var checkedRow = board[i];

        // checks if row matches
        if (checkedRow[0].className==checkedRow[1].className 
        && checkedRow[1].className==checkedRow[2].className){
            // sets the winning slots to the winner class
            for (var j = 0; j<3; j++) {
                // makes sure the space isn't empty
                    if (checkedRow[j].className != 'blank'){
                        checkedRow[j].className = 'winner'
                        winState = true;
                    }                 
                }// end of j
            }
    }//end of i
}

// checks for a win in each col
function colCheckForWin() {
    for (var y=0; y<3; y++){
        //makes an array for the current col
        var checkedCol = []
        for (var x=0; x<3; x++){
            checkedCol.push(board[x][y])
        }
        //checks for win for the col in the current array
        if (checkedCol[0].className==checkedCol[1].className
        && checkedCol[1].className==checkedCol[2].className){
            for (var i=0; i<3; i++){
                //makes sure space isn't empty
                if (checkedCol[i].className != 'blank'){
                    checkedCol[i].className = 'winner'
                    winState = true;
                }
            }   
        }
    }  
}

// checks for a win on the diagonals
function diagCheckForWin(){
    var diag1 = [board[0][0],board[1][1],board[2][2]]
    var diag2 = [board[0][2],board[1][1],board[2][0]]
    var bothDiags = [diag1,diag2]

    for (var x=0; x<2; x++){
        // checks for win on current diag
        if (bothDiags[x][0].className==bothDiags[x][1].className
            && bothDiags[x][1].className==bothDiags[x][2].className){
                // makes sure the spots aren't blank then makes them winners
                for (var i=0; i<3; i++){
                    if (bothDiags[x][i].className != 'blank'){
                        bothDiags[x][i].className = 'winner'
                        winState = true
                    }
                }//end of i
            }
    }//end of x
}

// reset the board state 
function resetGame(){
    boardElement.innerHTML = null;
    winState = false
    initGame()
}
    
//locks the board in case of win or tie
function lockBoard() {
    if (winState == true){
        var slots = document.querySelectorAll('img.blank, img.x, img.o')
        for (i=0; i<slots.length; i++){
            slots[i].className = 'loser'
        }
    }
}