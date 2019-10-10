const formatHour = (date = new Date()) => {
    return (date.getHours() + ":" + date.getMinutes())
}


const currentUserMessage = (content, time) => {
    return <div className="current-user-msg-container">
        <div className="current-user-msg">{content}</div>
        <div className="current-user-time">{formatHour(time)}</div>
    </div>

}

const otherUserMessage = (content, user, time) => {
    return <div className="other-user-msg-container">
        <div className="current-user-time">{formatHour(time)}</div>
        <div className="other-user-msg">{content}</div>
    </div>
}

const Message = ({ isCurrentUser, content, user, time }) => {
    return <div className="row">
        {
            isCurrentUser ?
                currentUserMessage(content, time)
                : otherUserMessage(content, user, time)
        }
    </div>
}

export default Message