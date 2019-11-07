var board = new Map([[0, ''], [1, ''], [2, ''], [3, ''], [4, ''], [5, ''], [6, ''], [7, ''], [8, '']]);
var turn = true;
let turnCount = 0;

function buildBoard() {
    document.getElementById('cell-8').innerHTML = board.get(8);
    document.getElementById('cell-0').innerHTML = board.get(0);
    document.getElementById('cell-1').innerHTML = board.get(1);
    document.getElementById('cell-2').innerHTML = board.get(2);
    document.getElementById('cell-3').innerHTML = board.get(3);
    document.getElementById('cell-4').innerHTML = board.get(4);
    document.getElementById('cell-5').innerHTML = board.get(5);
    document.getElementById('cell-6').innerHTML = board.get(6);
    document.getElementById('cell-7').innerHTML = board.get(7);
};

let startButton = document.getElementById('start');
let playerTurn = document.getElementById('playerTurn');
let cell0 = document.getElementById('cell-0');
let cell1 = document.getElementById('cell-1');
let cell2 = document.getElementById('cell-2');
let cell3 = document.getElementById('cell-3');
let cell4 = document.getElementById('cell-4');
let cell5 = document.getElementById('cell-5');
let cell6 = document.getElementById('cell-6');
let cell7 = document.getElementById('cell-7');
let cell8 = document.getElementById('cell-8');


function setCell(key, value) {
    board.set(key, value);
    turnCount++;
    winConditions();
    buildBoard();
};

function win() {
    if (turn) {
        playerTurn.innerHTML = "Player O Wins!";
    } else {
        playerTurn.innerHTML = "Player X Wins!";
    }
    resetGame();
};

function resetGame() {
    startButton.disabled = false;
}

function winConditions() {
    if (board.get(0) === board.get(1) && board.get(0) === board.get(2) && board.get(0) != '') {
        win();
    } else if (board.get(3) === board.get(4) && board.get(3) === board.get(5) && board.get(3) != '') {
        win();
    } else if (board.get(6) === board.get(7) && board.get(6) === board.get(8) && board.get(6) != '') {
        win();
    } else if (board.get(0) === board.get(3) && board.get(0) === board.get(6) && board.get(0) != '') {
        win();
    } else if (board.get(1) === board.get(4) && board.get(1) === board.get(7) && board.get(1) != '') {
        win();
    } else if (board.get(2) === board.get(5) && board.get(2) === board.get(8) && board.get(2) != '') {
        win();
    } else if (board.get(0) === board.get(4) && board.get(0) === board.get(8) && board.get(0) != '') {
        win();
    } else if (board.get(2) === board.get(4) && board.get(2) === board.get(6) && board.get(2) != '') {
        win();
    } else if (turnCount === 9) {
        playerTurn.innerHTML = "It's a TIE!";
        resetGame();
    };

};
startButton.addEventListener('click', disableButton);
cell0.addEventListener('click', function () { clickCell(0) });
cell1.addEventListener('click', function () { clickCell(1) });
cell2.addEventListener('click', function () { clickCell(2) });
cell3.addEventListener('click', function () { clickCell(3) });
cell4.addEventListener('click', function () { clickCell(4) });
cell5.addEventListener('click', function () { clickCell(5) });
cell6.addEventListener('click', function () { clickCell(6) });
cell7.addEventListener('click', function () { clickCell(7) });
cell8.addEventListener('click', function () { clickCell(8) });


function disableButton() {
    this.disabled = true;
    resetBoard();
    playerTurn.innerHTML = 'Player Xs Turn';
};

function resetBoard() {
    board = new Map([[0, ''], [1, ''], [2, ''], [3, ''], [4, ''], [5, ''], [6, ''], [7, ''], [8, '']]);
    turn = true;
    turnCount = 0;
    activateBoard();
    buildBoard();
};

function activateBoard(){
    for(let k = 0; k<=8; k++){
        let id = "cell-" + k;
        document.getElementById(id).style.pointerEvents = 'auto';
    }
};
function clickCell(cell) {
    console.log("click " + cell);
    disableCell(cell);
    if (turn) {
        setCell(cell, 'X');
        turn = !turn;
    } else {
        setCell(cell, 'O');
        turn = !turn;
    }
};

function disableCell(cell) {
    let id = "cell-" + cell;
    document.getElementById(id).style.pointerEvents = 'none';
};

//known bug where you can still click on cells after a game is won
