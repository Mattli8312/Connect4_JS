const board = document.getElementById('gameboard');
const width = 7;
const height = 6;
const GB = new GameBoard(width, height);
let red_turn = true;
let winner = null;

GB.Initialize();

const Winner_State = () => {
    console.log(winner)
    const list = document.getElementsByClassName('Cell');
    for(const li of list){
        const new_element = li.cloneNode(true);
        li.parentNode.replaceChild(new_element, li);
    }
}

const InitializeGameBoard = () => {

    for(let i = 0; i < GB.GetHeight(); i++){

        let new_row = New_Div([["id", "row"]]);

        for(let j = 0; j < GB.GetWidth(); j++){

            let new_cell = New_Div([["id", i + ',' + j], ["class", "Cell"]]);

            new_cell.addEventListener('mousedown', ()=>{

                switch(HandleMove(GB, red_turn, j)){

                    case 'invalid': return;
                    case 'winner': winner = red_turn ? 'red' : 'yellow'; break;
                    case 'continue': break;
                    default: break;
                }
            
                red_turn ^= true;
            
                RenderGameBoard();

                if(winner !== null) Winner_State();

                console.log(Execute_NaiveMiniMax(GB, red_turn));

            })
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
RenderGameBoard();