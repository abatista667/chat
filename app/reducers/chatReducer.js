import {ADD_MESSAGE} from '../constant/actionTypes'
import {processMessage} from '../actions/messageActions'

const chat = (state = [], action) => {
    switch(action.type){
        case ADD_MESSAGE:
                state = processMessage(state, action.payload)
            break;
    }
    return state;
}


export default chat