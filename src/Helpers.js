/**
 * Utiilty Functions for DOM Manipulation
 */
const New_Div = (attributes = []) => {
    const result = document.createElement("div");
    for(const a of attributes){
        result.setAttribute(a[0], a[1]);
    }
    return result;
}

const Get_Element = (id = "") => {
    let result = document.getElementById(id.toString());
    if(result !== undefined) return result;
    else return false;
}