import { AddMessage } from '../actions/actionCreators'
import socketIOClient from "socket.io-client";
const socket = socketIOClient()

const sendMessage = (content, user) => {
    const date = new Date()
    socket.emit("chat message", { content, user, date})
    return (dispatch) => {
        dispatch(AddMessage({content, user, date, isCurrentUser:true}))
    }

}
const receiveMessage = () => {
    return (dispatch) => {
        socket.on('chat message', function (message) {
            dispatch(AddMessage({... message, isCurrentUser:false}))
        });
    }
}

export { sendMessage, receiveMessage }