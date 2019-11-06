var board = new Map([[0, ''], [1, ''], [2, ''], [3, ''], [4, ''], [5, ''], [6, ''], [7, ''], [8, '']]);
var turn = true;

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
buildBoard();

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
    board.set(key, value)
    buildBoard();
};
startButton.addEventListener('click', disableButton);
cell0.addEventListener('click', function() {clickCell(0)});
cell1.addEventListener('click', function() {clickCell(1)});
cell2.addEventListener('click', function() {clickCell(2)});
cell3.addEventListener('click', function() {clickCell(3)});
cell4.addEventListener('click', function() {clickCell(4)});
cell5.addEventListener('click', function() {clickCell(5)});
cell6.addEventListener('click', function() {clickCell(6)});
cell7.addEventListener('click', function() {clickCell(7)});
cell8.addEventListener('click', function() {clickCell(8)});


function disableButton() {
    this.disabled = true;
    playerTurn.innerHTML = 'Player Xs Turn';
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

function disableCell(cell){
    let id = "cell-"+cell;
    document.getElementById(id).style.pointerEvents = 'none';
};


