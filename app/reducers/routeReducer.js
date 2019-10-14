import { SET_ROUTE } from "../constant/actionTypes";

//this reducer change the route state object
//is trigger when changin the route
const routes = (state = {}, action) => {
    switch(action.type){
        case SET_ROUTE:
                state = action.payload
            break;
    }
    return state;
}


export default routes