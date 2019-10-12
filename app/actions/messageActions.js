import {
    addMessage,
    incrementMessageCout,
    addUserNotification,
    setLastSender
} from '../actions/actionCreators'
import { USERNAME } from '../constant/availableSettings'
import socketIOClient from "socket.io-client";
import { ME } from '../constant/messageConst';

const socket = socketIOClient()

const sendMessage = (content) => {
    const date = new Date()
    const user = localStorage[USERNAME]
    socket.emit("chat message", { content, user, date })
    return (dispatch) => {
        dispatch(setLastSender(ME))
        dispatch(incrementMessageCout())
        dispatch(addMessage({ content, user, date, isCurrentUser: true }))
        dispatch(incrementMessageCout())
    }

}
const receiveMessage = () => {
    return (dispatch) => {
        socket.on('chat message', function (message) {
            dispatch(setLastSender(message.user))
            dispatch(incrementMessageCout())
            dispatch(addMessage({ ...message, isCurrentUser: false }))
            dispatch(incrementMessageCout())
        });
    }
}

const receiveLoginNotification = () => {
    return (dispatch) => {
        socket.on('login', function (user) {
            dispatch(addUserNotification(user))
            dispatch(incrementMessageCout())
        });
    }

}

const socketEventHandler = () => {
    return (dispatch) => {
        dispatch(receiveMessage())
        dispatch(receiveLoginNotification())
    }

}

const notifyConnection = (username) => {
    socket.emit("login", { username })
}


export { sendMessage, socketEventHandler, notifyConnection }