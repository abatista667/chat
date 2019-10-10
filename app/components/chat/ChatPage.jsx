import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import { useRef, useEffect } from 'react'
import Message from './Message'
import {sendMessage} from '../../actions/messageActions'

const InputChat = ({ height }) => {
    return <div className="row" style={{ height: height + 'px' }}>
        <div className="col s10">
            <textarea>

            </textarea>
        </div>
        <div className="col s2 fill-height middle-content">
            <img onClick={()=> sendMessage("hola", "fulano")} className="send-button" src="images/send-button.png" />
        </div>
    </div>

}

const MessageArea = ({ height }) => {
    const messageList = useSelector(state => state.chat)
    const chatlistRef = useRef()

    useEffect(() => {
         chatlistRef.current.scrollIntoView()
    })

    return (
        <div  className="chat-msg-list" style={{ height: height + 'px' }}>
            {window.innerHeight}
            {messageList.map(message => <Message {...message} />)}
            <div ref={chatlistRef}></div>
        </div>
    )
}

const ChatPage = () => {
    const height = useSelector(state => state.size.viewHeight)
    const inputHeight = 40;

    return <div className="chatPage">
        <MessageArea height={height - inputHeight - 1} />
        <InputChat height={inputHeight} />
    </div>
}


export default ChatPage