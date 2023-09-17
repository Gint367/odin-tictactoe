const gameBoard = (() => {
    const board = [['x','x','x'], ['o','o','o'], ['x','x','x']];
    
    const displayController = {};
    function createBoard () {
        let html = '<div id="board">';
        for (let i = 0;i < board.length; i++){
            let row = '';
            for (let j = 0; j < board[i].length; j++) {
                row += '<div class="cell">' + board[i][j] + '</div>';
                
            }
            html += '<div class="row">' + row + '</div>';
        }
        html += '</div>';
        //console.log(html);
        document.getElementById('board').innerHTML = html;
    }
    return {
        board,
        displayController,
        createBoard
    }
})();

function playerFactory(name) {
    console.log("Player " + name + " created");
    return { name };
}

gameBoard.createBoard();