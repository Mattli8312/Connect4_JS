/**
 * Used for generating the gameboard;
 */

class GameBoard{

    
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.array = [];
        this.column_heights = [];
    }

    Initialize(){

        for(let i = 0; i < this.height; i++){

            let temp_array = [];

            for(let j = 0; j < this.width; j++){

                this.column_heights[j] = this.height - 1;

                temp_array.push('*');

            }

            this.array.push(temp_array);

        }
        return;
    }

    Populate_Board(j, piece){

        if(this.Valid_Index(this.column_heights[j],j)){

            this.array[this.column_heights[j]][j] = piece;

            this.column_heights[j] --;

        }

        return false;
    }

    PrintBoard(){
        for(const a of this.array){

            console.log(a);

        }
        return;
    }

    GetWidth(){
        
        return this.width;
    }

    GetHeight(){

        return this.height;
    }

    AccessBoardElement(i, j){

        if(this.Valid_Index(i,j)){

            return this.array[i][j]; 

        }
        return -1;
    }

    Valid_Index(i, j){

        return i > - 1 && i < this.height && j >-1 && j < this.width;
    }

    GetBoard(){
        
        return this.array;
    }

}