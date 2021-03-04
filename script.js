var boardElement = document.getElementById('board');
var board = [];
var turn = 'x';
// this iterates through every row
for (var row = 0; row < 3; row++) {
    if (board[row] == undefined) {
        board[row] = [];
    }

    // this iterates through every col 
    for (var col = 0; col < 3; col++) {
        //this 
        if (col == 0){
            boardElement.appendChild(document.createElement('br'));
        }

        var slot = document.createElement("img");
        slot.className = "blank";
        slot.src = 'images/blank.png';

        slot.addEventListener("click", function () {
            //This if statement makes sure the spot is not taken
            if (this.className == 'blank'){
                //This checks who's turn it is
                if (turn == 'x'){
                    this.src = 'images/x.png';
                    this.className += ' x';
                    turn = 'o';
                } else {
                    this.src = 'images/o.png';
                    this.className += ' o';
                    turn = 'x';
                }
                rowCheckForWin();
                colCheckForWin();
            }
            
        });
        board[row][col] = slot;
        boardElement.appendChild(slot);
    }//end of j
    
}//end of i

//checks for a win on each row
function rowCheckForWin() {
    for (var i=0; i<3; i++){
        var checkedRow = board[i];

        //checks if row matches
        if (checkedRow[0].className==checkedRow[1].className 
        && checkedRow[1].className==checkedRow[2].className){
            //checks for a win in each row
            for (var j = 0; j<3; j++) {
                //This if makes sure the space isn't empty
                    if (checkedRow[j].className != 'blank'){
                        checkedRow[j].className += ' winner'
                    }
                    
                }
            }
    }
}


function colCheckForWin() {
    for (var y=0; y<3; y++){
        //makes an array for the current col
        var checkedCol = []
        for (var x=0; x<3; x++){
            checkedCol.push(board[x][y])
        }
        //checks for win in each col
        if (checkedCol[0].className==checkedCol[1].className
        && checkedCol[1].className==checkedCol[2].className){
            for (var i=0; i<3; i++){
                if (checkedCol[i].className != 'blank'){
                    checkedCol[i].className += ' winner'
                }
            }
            //makes sure space isn't empty
            
        }

    }  
}
    
