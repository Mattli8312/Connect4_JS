/**
 * Handles Player moves and Game logic
 */

const CheckRow = (i,j,board,count=4) => {

    for(let a = 1; a < count; a++){
        
        if(board[i][j] !== board[i][j+a]) return false;

    }

    return true;
}

const CheckColumn = (i,j,board,count=4) => {
    
    for(let a = 1; a < count; a++){

        if(board[i][j] !== board[i+a][j]) return false;
    }

    return true;
}

const CheckDiagonal_one = (i,j,board,count = 4) => {

    for(let a = 1; a < count; a++){

        if(board[i][j] !== board[i+a][j+a]) return false;
    }

    return true;
}

const CheckDiagonal_two = (i,j,board, count = 4) => {

    for(let a = 1; a < count; a++){

        if(board[i][j] !== board[i-a][j+a]) return false;
    }

    return true;
}

const HasWinner = (board) => {
    for(let i = 0; i < board.length; i++){

        for(let j = 0; j < board[0].length; j++){

            if(board[i][j] === '*') continue;

            if(j <= board[0].length - 4 && CheckRow(i, j, board)) return board[i][j];

            if(i <= board.length - 4 && CheckColumn(i, j, board)) return board[i][j];

            if(i <= board.length - 4 && j <= board[0].length - 4 && CheckDiagonal_one(i, j, board)) return board[i][j];

            if(i >= 3 && j <= board[0].length - 4 && CheckDiagonal_two(i,j,board)) return board[i][j];

        }
    }
    return '*';
}

const HandleMove = (GameBoard, turn, j) =>{
    
    if(!GameBoard.Populate_Board(j, turn ? 'r' : 'y')){
        return 'invalid';
    }

    if(HasWinner(GameBoard.GetBoard()) !== '*') return 'winner';

    return 'continue';
    
}