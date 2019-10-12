import {
    ADD_MESSAGE,
    INCREMENT_MESSAGE_COUNT,
    SET_LAST_SENDER,
    ADD_USER_NOTIFICATION
} from '../constant/actionTypes'

const chat = (state = [], action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const message = { ...action.payload, key: state.count + 1, type: ADD_MESSAGE }
            state.list = [...state.list ,message ]
            break;
        case INCREMENT_MESSAGE_COUNT:
            state.count += 1
            break;
        case SET_LAST_SENDER:
            state.lastSender = action.payload
        case ADD_USER_NOTIFICATION:
            const notification = {...action.payload,key: state.count +1, type: ADD_USER_NOTIFICATION}
            state.list = [...state.list, notification]
    }
    return state;
}


export default chat