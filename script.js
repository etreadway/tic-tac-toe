var boardElement = document.getElementById('board');
var board = [];
var turn = 'x';
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
                if (turn == 'x'){
                    this.src = 'images/x.png';
                    this.className = 'x';
                    turn = 'o';
                } else {
                    this.src = 'images/o.png';
                    this.className = 'o';
                    turn = 'x';
                }
                rowCheckForWin();
                colCheckForWin();
            }
            
        });
        board[row][col] = slot;
        boardElement.appendChild(slot);
    }//end of col
    
}//end of row

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
                if (checkedCol[i].className != 'blank'){
                    checkedCol[i].className = 'winner'
                }
            }
            //makes sure space isn't empty
            
        }

    }  
}
    
