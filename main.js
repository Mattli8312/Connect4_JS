const board = document.getElementById('gameboard');
const width = 10;
const height = 7;
const GB = new GameBoard(width, height);
GB.Initialize();

const New_Div = (attributes = []) => {
    const result = document.createElement("div");
    for(const a of attributes){
        result.setAttribute(a[0], a[1]);
    }
    return result;
}

const Get_Element = (id = "") => {
    let result = document.getElementById(id);
    if(result !== undefined) return result;
    else return false;
}

const RenderGameBoard = () => {
    for(let i = 0; i < GB.GetHeight(); i++){
        let new_row = New_Div([["id", "row"]]);
        for(let j = 0; j < GB.GetWidth(); j++){
            let new_cell = New_Div([["id", i + ',' + j]]);
            new_cell.style.width = new_cell.style.height = "2vw";
            new_cell.style.background = "grey";
            new_cell.style.border = "10px solid black";
            new_row.appendChild(new_cell);
        }
        board.appendChild(new_row);
    }
}

RenderGameBoard()