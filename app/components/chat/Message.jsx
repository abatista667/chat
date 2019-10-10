
const Message = ({isCurrentUser, content, user, time}) =>{
    return isCurrentUser ?
            <div>{content}</div>
            :<div>{user} says: {content}</div>
}

export default Message