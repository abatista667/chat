import {ADD_MESSAGE} from '../constant/actionTypes'
const chat = (state = [], action) => {
    switch(action.type){
        case ADD_MESSAGE:
                state = state.concat([action.payload])
            break;
    }
    return state;
}


export default chat