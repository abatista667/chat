import {AddMessage} from '../actions/actionCreators'
import socketIOClient from "socket.io-client";
const socket = socketIOClient()

const sendMessage = (content, user) => {
    socket.emit("chat message", { content, user, date: new Date() })
}
const receiveMessage = () => {
    return (dispatch) =>{
        socket.on('chat message', function(message){
            dispatch(AddMessage(message))
          });
    }
}

export {sendMessage, receiveMessage}