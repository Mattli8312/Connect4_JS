/**
 * Evaluation function used for testing purposes and improving the performance
 */

const del = [-1,0,1]
const evaluation_result = {
    two_count: 0,
    three_count: 0,
    four_count: 0
}

const evaluation = (GameBoard, piece) => {
    //Reset evaluation result;
    evaluation_result.two_count = 0;
    evaluation_result.three_count = 0;
    evaluation_result.four_count = 0;
    
    const board_ = GameBoard.GetBoard();
    const width = GameBoard.GetWidth();
    const height = GameBoard.GetHeight();
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            if(GameBoard.GetBoard()[i][j] === piece){
                //Start counting pieces
                //Check rows
                if(j <= width - 2 && CheckRow(i, j, board_, 2)) evaluation_result.two_count++;
                if(j <= width - 3 && CheckRow(i, j, board_, 3)) evaluation_result.three_count++;
                // if(j <= width - 4 && CheckRow(i, j, board_, 4)) evaluation_result.four_count++;
                //Check cols
                if(i <= height - 2 && CheckColumn(i,j,board_,2)) evaluation_result.two_count++;
                if(i <= height - 3 && CheckColumn(i,j,board_,3)) evaluation_result.three_count++;
                // if(i <= height - 4 && CheckColumn(i,j,board_,4)) evaluation_result.four_count++;
                //Check Diagonals   
                //Bottom-left to top-right diagonals
                if(j <= width - 2 && i <= height - 2 && CheckDiagonal_one(i,j,board_,2)) evaluation_result.two_count++;
                if(j <= width - 3 && i <= height - 3 && CheckDiagonal_one(i,j,board_,3)) evaluation_result.three_count++;
                // if(j <= width - 4 && i <= height - 4 && CheckDiagonal_one(i,j,board_,4)) evaluation_result.four_count++;
                //Bottom-right to top-left diagonals
                if(j <= width - 2 && i >= 1 && CheckDiagonal_two(i,j,board_,2)) evaluation_result.two_count++;
                if(j <= width - 3 && i >= 2 && CheckDiagonal_two(i,j,board_,3)) evaluation_result.three_count++;
                // if(j <= width - 4 && i >= 3 && CheckDiagonal_two(i,j,board_,4)) evaluation_result.four_count++;
            }
        }
    }
}