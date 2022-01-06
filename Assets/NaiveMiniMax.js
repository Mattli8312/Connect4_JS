/**
 * Naive MiniMax algorithm without any optimizations.
 * The runtime of this algorithm will be exponential as with every move we generate, there will be x times more moves per move 
 * that we have generated, specifically, the run time will be O(column size ^ n) where n is the tree height and column size is the number of columsn
 * in the game
 */

const MiniMaxGameBoard = new GameBoard();
let option_length = 0;
let combinations = 0;
let iterative_depth = 2;

const Execute_NaiveMiniMax = (GameBoard, turn) => {
    //Initialize Parameters
    MiniMaxGameBoard.Copy(GameBoard);
    option_length = MiniMaxGameBoard.column_heights.length;

    let piece = turn ? 'r' : 'y'
    let new_elements = new Array(option_length).fill(0, 0, option_length);
    for(let i = 0; i < option_length; i++){
        if(MiniMaxGameBoard.Populate_Board(i, piece)){
            if(HasWinner(MiniMaxGameBoard.GetBoard()) !== '*'){
                new_elements[i] = turn ? 10 : -10;
            }
            else{
                new_elements[i] = Naive_MiniMax(turn ^ true, 6);
            }
            MiniMaxGameBoard.Remove_Piece(i);
        }
    }
    console.log(new_elements);
}

const Naive_MiniMax = (turn, level) => {
    //iterative deepening, to prevent stack overflow
    if(level <= 0){
        combinations++;
        return 0;
    }
    else{
        let piece = turn ? 'r' : 'y';
        let new_elements = new Array(option_length).fill(0, 0, option_length);
        for(let i = 0; i < option_length; i++){
            if(MiniMaxGameBoard.Populate_Board(i, piece)){
                if(HasWinner(MiniMaxGameBoard.GetBoard()) !== '*'){
                    if(combinations < 3000){
                        console.log("board:", combinations);
                        MiniMaxGameBoard.PrintBoard();
                    }
                    new_elements[i] = turn ? 10 : -10;
                }
                else{
                    new_elements[i] = Naive_MiniMax(turn ^ true, level - 1);
                }
                MiniMaxGameBoard.Remove_Piece(i);
            }
        }
        return turn ? Math.max(...new_elements) : Math.min(...new_elements);
    }
}