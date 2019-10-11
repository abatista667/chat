import { ADD_MESSAGE, INCREMENT_MESSAGE_COUNT } from '../constant/actionTypes'

const chat = (state = [], action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const message = { ...action.payload, key: state.count + 1 }
            state.list = state.list.concat([message])
            break;
        case INCREMENT_MESSAGE_COUNT:
            state.count += 1
            break;
    }
    return state;
}


export default chat