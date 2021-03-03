
    var boardElement = document.getElementById('board');
    var board = [];
    var turn = 'x';
    //col
    for (var row = 0; row < 3; row++) {
        if (board[row] == undefined) {
            board[row] = [];
        }

        
        for (var col = 0; col < 3; col++) {
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
                    checkForWinOnRow()
                }
                
            });
            board[row][col] = slot;
            boardElement.appendChild(slot);
        }//end of j
        
    }//end of i
    console.log(board);
    
    function checkForWinOnRow() {
        for (var i=0; i<3; i++){
        var checkedRow = board[i];

        //checks if row matches
        if (checkedRow[0].className==checkedRow[1].className 
        && checkedRow[1].className==checkedRow[2].className){
            for (var j = 0; j<3; j++) {
                //This if makes sure the space isn't empty
                    if (checkedRow[j].className != 'blank'){
                        checkedRow[j].className += ' winner'
                    }
                    
                }
            }
        }
    }


    

    // make these images, grab 3 images from the web-- x, o, and blank
    /*
    board[0][0].innerHTML = 'none'
    board[0][1].innerHTML = 'none'
    board[0][2].innerHTML = 'none'
    board[1][0].innerHTML = 'none'
    board[1][1].innerHTML = 'none'
    board[1][2].innerHTML = 'none'
    board[2][0].innerHTML = 'none'
    board[2][1].innerHTML = 'none'
    board[2][2].innerHTML = 'none'
    */