/**
 * Drop.js holds the logic for animating a dropping of a connect 4 piece
 * As of right now, I'm not sure if I want to implement anything using the canvas 
 * API or just use css and flex box :)
 */
const drop_fps = 200;

async function Drop(piece, i, j){
    console.log(i, j);
    let curr_cell = null;
    let prev_cell = null;
    for(let a = 0; a <= i; a++){
        prev_cell = curr_cell;
        curr_cell = Get_Element(a + ',' + j);
        if(prev_cell) prev_cell.setAttribute("filled", "grey");
        if(curr_cell) curr_cell.setAttribute("filled", piece);
        await delay();
    }
}

async function delay(){
    await new Promise(resolve =>
        setTimeout(() => {
            resolve();
        }, drop_fps)
    );
}