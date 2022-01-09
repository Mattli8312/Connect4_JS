/**
 * State Machine of application
 */

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