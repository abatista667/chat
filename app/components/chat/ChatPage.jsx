import { useSelector, useDispatch } from 'react-redux'
import { useRef, useEffect, useState } from 'react'
import Message, {UserLoginNotification, UserLabel} from './Message'
import {sendMessage} from '../../actions/messageActions'
import Textarea from '../common/TextArea'
import { ADD_MESSAGE, ADD_USER_NOTIFICATION, SET_LAST_SENDER } from '../../constant/actionTypes'

//display the input message area
const InputChat = ({ height }) => {
    const [message, setMessage] = useState("")
    const dispatch = useDispatch()
    const sendCTRLandEnter = useSelector(state => state.settings.sendCTRLandEnter)
    const interfaceLanguage = useSelector(state => state.settings.interfaceLanguage)
    
    const handleMessageChange = (event) =>{
        setMessage(event.target.value)
    }

    const handleSendMessage =()=>{
        if(message)
        dispatch(sendMessage(message))
        setMessage("")
    }

    const handleKeyDown = (e) => {
        if(sendCTRLandEnter && e.ctrlKey && e.keyCode == 13){
            e.preventDefault()
            handleSendMessage()
        }
    }

    return <div className="row row-no-margin-bottom" style={{ height: height + 'px' }}>
        <div className="col s10">
            <Textarea name="chat-input"
                      placeholder={interfaceLanguage.enterMessage}
                      onChange={handleMessageChange} 
                      defaultValue={message} 
                      handleKeyDown={handleKeyDown} />
        </div>
        <div className="col s2 fill-height middle-content">
            <img onClick={handleSendMessage} title={interfaceLanguage.send}
                 className="send-button" src="images/send-button.png" />
        </div>
    </div>

}

//display the message and notifications area
const MessageArea = ({ height }) => {
    const itemList = useSelector(state => state.chat.list)
    const chatlistRef = useRef()

    useEffect(() => {
         chatlistRef.current.scrollIntoView({behavior:"smooth"})
    })

    return (
        <div  className="chat-msg-list" style={{ height: height + 'px' }}>
            {itemList.map(renderItem)}
            <div ref={chatlistRef}></div>
        </div>
    )
}
//switch between the different item type for rendering
const renderItem =(item) =>{
    switch(item.type){
        case ADD_MESSAGE:
            return <Message {...item} />;
        case ADD_USER_NOTIFICATION:
            return <UserLoginNotification {...item}/>
        case SET_LAST_SENDER:
            return <UserLabel {...item} />
    }
}
//render the message area
//and the input chat as a single page
const ChatPage = () => {
    const height = useSelector(state => state.size.viewHeight)
    const inputHeight = 40;

    return <div className="chatPage">
        <MessageArea height={height - inputHeight} />
        <InputChat height={inputHeight} />
    </div>
}


export default ChatPage