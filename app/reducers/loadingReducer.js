import { SET_LOADING } from "../constant/actionTypes";

//this reducer toggle the loading spinner
//is trigger during async operations
const loading = (state = {}, action) => {
    switch(action.type){
        case SET_LOADING:
                state = action.payload
            break;
    }
    return state;
}


export default loading