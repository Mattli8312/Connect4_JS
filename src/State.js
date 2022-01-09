/**
 * State Machine of application
 */

const Initialize_Main_Page = () => {

    board.setAttribute("enabled", "false");
}

/** 1vCPU */
const Initialize_CPU_Mode = () => {

    let list_ = document.getElementsByClassName('Cell');

    for(const li of list_) {

        li.addEventListener('mousedown', async()=>{

            let value = await Execute_Move(parseInt(li.getAttribute('id')[2]));
            
            if(value) return;

            let CPU_turn = Execute_MiniMax(GB, red_turn);

            value = await Execute_Move(CPU_turn);

            if(value) return;

        })
    }

}

/** 1v1 */
const Initialize_Two_Person_Mode = () => {
    let list = document.getElementsByClassName('Cell');

    for(const li of list){

        li.addEventListener('mousedown', async() => {

            let value = await Execute_Move(parseInt(li.getAttribute('id')[2]));

            if(value) return;

        })
    }
}