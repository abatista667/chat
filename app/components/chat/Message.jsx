import { ME } from "../../constant/messageConst"
import {useSelector} from 'react-redux'
import { format24Hour, format12Hour } from "../../utils/dateUtils"

const currentUserMessage = (content, time) => {
    const use24DateFormat = useSelector(state => state.settings.clock == 24)

    return <div className="current-user-msg-container">
        <div className="current-user-msg">{content}</div>
        <div className="current-user-time">{ use24DateFormat ?
            format24Hour(time) : format12Hour(time)} </div>
    </div>

}

const otherUserMessage = (content, time) => {
    const use24DateFormat = useSelector(state => state.settings.clock == 24)

    return <div className="other-user-msg-container">
        <div className="current-user-time">{ use24DateFormat ?
            format24Hour(time) : format12Hour(time)}</div>
        <div className="other-user-msg">{content}</div>
    </div>
}

const Message = ({ isCurrentUser, content, date }) => {
    return <div className="row row-no-margin-bottom">
        {
            isCurrentUser ?
                currentUserMessage(content, date)
                : otherUserMessage(content, date)
        }
    </div>
}

const UserLoginNotification = ({ username }) => {
    return <div className="user-login-notification">{username} has joined</div>
}

const UserLabel = ({ user }) => {
    return <div className="row row-no-margin-bottom label">
        {user == ME
            ? <div className="current-user-label">{user}</div>
            : <div className="other-user-label">{user}</div>}
    </div>
}

export default Message
export { UserLoginNotification, UserLabel }