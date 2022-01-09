/**
 * Entry Point of the application
 */

const Execute_Move = async (j) => {

    switch(HandleMove(GB, red_turn, j)){

        case 'invalid': return;
        case 'winner': winner = red_turn ? 'red' : 'yellow'; break;
        case 'continue': break;
        default: break;
    }

    
    await Drop(red_turn ? 'red' : 'yellow', GB.column_heights[j] + 1, j);

    red_turn ^= true;

    //RenderGameBoard();

    if(winner !== null){
        Winner_State();
        return true;
    } 
    return false;
}

const Winner_State = () => {
    console.log(winner)
    const list = document.getElementsByClassName('Cell');
    for(const li of list){
        const new_element = li.cloneNode(true);
        li.parentNode.replaceChild(new_element, li);
    }
}

const InitializeGameBoard = async() => {

    for(let i = 0; i < GB.GetHeight(); i++){

        let new_row = New_Div([["id", "row"]]);

        for(let j = 0; j < GB.GetWidth(); j++){

            let new_cell = New_Div([["id", i + ',' + j], ["class", "Cell"]]);

            new_row.appendChild(new_cell);
        }
        board.appendChild(new_row);
    }
}


const RenderGameBoard = () => {
    for(let i = 0; i < GB.GetHeight(); i++){
        for(let j = 0; j < GB.GetWidth(); j++){
            switch(GB.AccessBoardElement(i,j)){
                case 'r':
                    Get_Element(i+','+j).setAttribute('filled', 'red'); break;
                case 'y':
                    Get_Element(i + ',' + j).setAttribute('filled', 'yellow'); break;
                default:
                    Get_Element(i+','+j).setAttribute('filled', 'grey'); 
            }
        }
    }
}

InitializeGameBoard();
/**
 * Different Game Modes: 1vCPU, 1v1, and multiplayer hopefully :)
 */
// Initialize_CPU_Mode();
Initialize_Two_Person_Mode();
/**
 * Updated with animations
 */
RenderGameBoard();