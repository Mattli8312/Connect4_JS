/**
 * Naive MiniMax algorithm without any optimizations.
 * The runtime of this algorithm will be exponential as with every move we generate, there will be x times more moves per move 
 * that we have generated, specifically, the run time will be O(column size ^ n) where n is the tree height and column size is the number of columsn
 * in the game
 */

const MiniMaxGameBoard = new GameBoard();
let option_length = 0;
let combinations = 0;
let iterative_depth = 7;

const Execute_MiniMax = (GameBoard, turn) => {
    //Initialize Parameters
    MiniMaxGameBoard.Copy(GameBoard);
    option_length = MiniMaxGameBoard.column_heights.length;

    let piece = turn ? 'r' : 'y'
    let new_elements = new Array(option_length).fill(0, 0, option_length);
    for(let i = 0; i < option_length; i++){
        if(MiniMaxGameBoard.Populate_Board(i, piece)){
            if(HasWinner(MiniMaxGameBoard.GetBoard()) !== '*'){
                new_elements[i] = (10 + iterative_depth) * (turn ? 1 : -1);
            }
            else{
                // new_elements[i] = Naive_MiniMax(turn ^ true, iterative_depth);
                new_elements[i] = MiniMax_Optimized(turn, 6, -Infinity, Infinity);
            }
            MiniMaxGameBoard.Remove_Piece(i);
        }
        else{
            new_elements[i] = turn ? -10000: 10000;
        }
    }
    console.log(new_elements)
    return new_elements.indexOf(turn ? Math.max(...new_elements) : Math.min(...new_elements));
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
                    new_elements[i] = (10 + level) * (turn ? 1 : -1)
                }
                else{
                    new_elements[i] = Naive_MiniMax(turn ^ true, level - 1);
                }
                MiniMaxGameBoard.Remove_Piece(i);
            }
            else{
                new_elements[i] = turn ? -100: 100;
            }
        }
        return turn ? Math.max(...new_elements) : Math.min(...new_elements);
    }
}