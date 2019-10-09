import { SET_ROUTE } from "../constant/actionTypes";

const routes = (state = {}, action) => {
    switch(action.type){
        case SET_ROUTE:
                state = action.payload
            break;
    }
    return state;
}


export default routes