var board = new Map([[1,''],[2,''],[3,''],[4,''],[5,''],[6,''],[7,''],[8,''],[9,'']]);


//two methods sets and gets




function buildBoard(){
    document.getElementById('cell-0').innerHTML = board.get(1);
    document.getElementById('cell-1').innerHTML = board.get(2);
    document.getElementById('cell-2').innerHTML = board.get(3);
    document.getElementById('cell-3').innerHTML = board.get(4);
    document.getElementById('cell-4').innerHTML = board.get(5);
    document.getElementById('cell-5').innerHTML = board.get(6);
    document.getElementById('cell-6').innerHTML = board.get(7);
    document.getElementById('cell-7').innerHTML = board.get(8);
    document.getElementById('cell-8').innerHTML = board.get(9);
}
buildBoard();

function setCell(key,value){
    board.set(ket,value)
    buildBoard();
};

board.addEventListener('ccell-0', () => { setCell(X) });

