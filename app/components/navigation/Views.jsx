import { Route, Switch } from 'react-router-dom'
import ChatPage from '../chat/ChatPage'



const Views = ({height}) => {
    const ChatWithHeight = () => {
        return <ChatPage height={height} />
    }

    return (
        <Switch>
            <Route exact path="/" component={ChatWithHeight}></Route>
            <Route exact path="/chat" component={ChatPage}></Route>
        </Switch>
    )
}


export default Views
