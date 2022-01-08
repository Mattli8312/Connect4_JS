/**
 * This Implementation is based on the Naive MiniMax Approach with an optimization: alpha beta pruning
 * You can find out more about alpha beta pruning in the documentation found in the github repository :)
 */
 
 const MiniMax_Optimized = (turn, level, alpha, beta) => {
     //iterative deepening, to prevent stack overflow
     if(level <= 0){
         combinations++;
         return 0;
     }
     else if(HasWinner(MiniMaxGameBoard.GetBoard()) !== '*'){
        return (100 + level * 10) * (turn ? 1 : -1);
     }
     else{
         let piece = turn ? 'r' : 'y';
         if(turn){
            let max_eval = -Infinity;
            for(let i = 0; i < option_length; i++){
                if(MiniMaxGameBoard.Populate_Board(i, piece)){
                    let eval = Naive_MiniMax(turn ^ true, level - 1, alpha, beta);
                    MiniMaxGameBoard.Remove_Piece(i);

                    max_eval = Math.max(max_eval, eval);
                    alpha = Math.max(alpha, eval);
                    if(beta <= alpha) break;
                }
            }
            return max_eval;
         }
         else{
            let min_eval = Infinity;
            for(let i = 0; i < option_length; i++){
                if(MiniMaxGameBoard.Populate_Board(i, piece)){
                    let eval = Naive_MiniMax(turn ^ true, level - 1, alpha, beta);
                    MiniMaxGameBoard.Remove_Piece(i);

                    min_eval = Math.max(min_eval, eval);
                    beta = Math.max(alpha, eval);
                    if(beta <= alpha) break;
                }
            }
            return min_eval;
         }
     }
 }