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
             if(turn && alpha < new_elements[i]) 
         }
         return turn ? Math.max(...new_elements) : Math.min(...new_elements);
     }
 }