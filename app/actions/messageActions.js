import { addMessage, incrementMessageCout } from '../actions/actionCreators'
import socketIOClient from "socket.io-client";
const socket = socketIOClient()

const sendMessage = (content, user) => {
    const date = new Date()
    socket.emit("chat message", { content, user, date})
    return (dispatch) => {
        dispatch(addMessage({content, user, date, isCurrentUser:true}))
        dispatch(incrementMessageCout())
    }

}
const receiveMessage = () => {
    return (dispatch) => {
        socket.on('chat message', function (message) {
            dispatch(addMessage({... message, isCurrentUser:false}))
            dispatch(incrementMessageCout())
        });
    }
}


export { sendMessage, receiveMessage }