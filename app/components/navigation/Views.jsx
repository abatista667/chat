import { Route, Switch } from 'react-router-dom'
import ChatPage from '../chat/ChatPage'


const Views = () => {
    return (
        <Switch>
            <Route exact path="/" component={ChatPage}></Route>
            <Route exact path="/chat" component={ChatPage}></Route>
        </Switch>
    )
}


export default Views
