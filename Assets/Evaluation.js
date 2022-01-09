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
    
    for(let i = 0; i < GameBoard.GetHeight(); i++){
        for(let j = 0; j < GameBoard.GetWidth(); j++){
            if(GameBoard.GetBoard()[i][j] === piece){
                break;
            }
        }
    }
    console.log(evaluation_result);
}