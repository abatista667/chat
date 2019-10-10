import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { useState, useEffect, useRef } from 'react'


let InputChat = ({ height }) => {
    return <div className="row"  style={{ height: height + 'px' }}>
        <div className="col s10">
            <textarea>

            </textarea>
        </div>
        <div className="col s2 fill-height middle-content">
            <img className="send-button" src="images/send-button.png" />
        </div>
    </div>

}

let ListChat = ({ height }) => {
    return (
        <div className="chat-msg-list" style={{ height: height + 'px' }}>
            {window.innerHeight}
        </div>
    )
}

const ChatPage = (props) => {
    const inputHeight = 40;
    return <div className="chatPage">
        <ListChat height={props.height - inputHeight -1} />
        <InputChat height={inputHeight} />
    </div>
}


export default ChatPage