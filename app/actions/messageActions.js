import {
    addMessage,
    incrementMessageCout,
    addUserNotification,
    setLastSender
} from '../actions/actionCreators'
import { USERNAME } from '../constant/availableSettings'
import socketIOClient from "socket.io-client";
import { ME } from '../constant/messageConst';

//initialize the socket connection to the app url
const socket = socketIOClient()

//send a message using the connected socket
//dispatch the current user as the last message sender
//add the message to the chat item list
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

//receive the message from the server
//dispatch the identity of the last message sender
//add the message to the chat item list
const receiveMessage = () => {
    return (dispatch) => {
        socket.on('chat message', function(message) {
            dispatch(setLastSender(message.user))
            dispatch(incrementMessageCout())
            dispatch(addMessage({...message, isCurrentUser: false }))
            dispatch(incrementMessageCout())
        });
    }
}

//receive the user login notification from the server
//dispatch the identity of the new user
const receiveLoginNotification = () => {
    return (dispatch) => {
        socket.on('login', function(user) {
            dispatch(addUserNotification(user))
            dispatch(incrementMessageCout())
        });
    }

}

//group the socket event listener
const socketEventHandler = () => {
    return (dispatch) => {
        dispatch(receiveMessage())
        dispatch(receiveLoginNotification())
    }

}

//emit the identity to the current user when first load
const notifyConnection = (username) => {
    socket.emit("login", { username })
}


export { sendMessage, socketEventHandler, notifyConnection }