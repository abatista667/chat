import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { useState, useEffect, useRef } from 'react'


let InputChat = ({ height }) => {
    return <div className="row">
        <div className="col s10" style={{ height: height + 'px' }}>
            <textarea>

            </textarea>
        </div>
        <div className="col s2">
            <button>Send</button>
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
    return <div className="chatPage">
        <ListChat height={props.height * 0.8} />
        <InputChat height={props.height * 0.2} />
    </div>
}


export default ChatPage