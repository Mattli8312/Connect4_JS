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

const RenderGameBoard = () => {
    for(const row of GB.GetBoard()){
        let new_row = New_Div([["id", "row"]]);
        for(const col of row){
            //Create Each cell
            let new_col = New_Div();
            new_col.style.width = new_col.style.height = "2vw";
            new_col.style.border = "10px solid black";
            new_col.style.background = "red";
            new_row.appendChild(new_col);
        }
        board.appendChild(new_row);
    }
}

RenderGameBoard()