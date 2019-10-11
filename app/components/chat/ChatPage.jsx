import { useSelector, useDispatch } from 'react-redux'
import { useRef, useEffect, useState } from 'react'
import Message from './Message'
import {sendMessage} from '../../actions/messageActions'
import Textarea from '../common/TextArea'


const InputChat = ({ height }) => {
    const [message, setMessage] = useState("")
    const dispatch = useDispatch()

    const handleMessageChange = (event) =>{
        setMessage(event.target.value)
    }

    const handleSendMessage =()=>{
        if(message)
        dispatch(sendMessage(message, "fulano"))
        setMessage("")
    }

    const handleKeyDown = (e) => {
        if(e.ctrlKey && e.keyCode == 13){
            e.preventDefault()
            handleSendMessage()
        }
    }

    return <div className="row row-no-margin-bottom" style={{ height: height + 'px' }}>
        <div className="col s10">
            <Textarea name="chat-input"
                      onChange={handleMessageChange} 
                      defaultValue={message} 
                      handleKeyDown={handleKeyDown} />
        </div>
        <div className="col s2 fill-height middle-content">
            <img onClick={handleSendMessage} title="Send message"
                 className="send-button" src="images/send-button.png" />
        </div>
    </div>

}

const MessageArea = ({ height }) => {
    const messageList = useSelector(state => state.chat.list)
    const chatlistRef = useRef()

    useEffect(() => {
         chatlistRef.current.scrollIntoView({behavior:"smooth"})
    })

    return (
        <div  className="chat-msg-list" style={{ height: height + 'px' }}>
            {messageList.map(message => <Message {...message} />)}
            <div ref={chatlistRef}></div>
        </div>
    )
}

const ChatPage = () => {
    const height = useSelector(state => state.size.viewHeight)
    const inputHeight = 40;

    return <div className="chatPage">
        <MessageArea height={height - inputHeight} />
        <InputChat height={inputHeight} />
    </div>
}


export default ChatPage