/**
 * Handles Player moves and Game logic
 */

const CheckRow = (i,j,board) => {

    return board[i][j] == board[i][j+1] && board[i][j] == board[i][j+2] && board[i][j] == board[i][j+3];
}

const CheckColumn = (i,j,board) => {
    
    return board[i][j] == board[i+1][j] && board[i][j] == board[i+2][j] && board[i][j] == board[i+3][j];
}

const CheckDiagonal_one = (i,j,board) => {

    return board[i][j] == board[i+1][j+1] && board[i][j] == board[i+2][j+2] && board[i][j] == board[i+3][j+3];
}

const CheckDiagonal_two = (i,j,board) => {

    return board[i][j] == board[i-1][j+1] && board[i][j] == board[i-2][j+2] && board[i][j] == board[i-3][j+3];
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