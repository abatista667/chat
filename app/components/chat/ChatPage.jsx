import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { useState, useEffect, useRef } from 'react'


let InputChat = () => {
    return <div>
        <textarea>

        </textarea>
        <button>Send</button>
    </div>
}

let ListChat = ({height}) => {
    return (
        <div className="chat-msg-list" style={{ height:height +'px' }}>
            {window.innerHeight}
        </div>
    )
}

const ChatPage = (props) => {
    const [height, setHeight] = useState(100)

    useEffect(() => {
        setHeight(props.height)
    }, [props.height])

    return <div className="chatPage">
        <ListChat height={height} />
        <InputChat  />
    </div>
}


export default ChatPage