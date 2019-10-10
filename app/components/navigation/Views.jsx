import { Route, Switch } from 'react-router-dom'
import ChatPage from '../chat/ChatPage'
import SettingsPage from '../settings/SettingsPage'


const Views = () => {
    return (
        <Switch>
            <Route exact path="/" component={ChatPage}></Route>
            <Route exact path="/settings" component={SettingsPage}></Route>
            <Route exact path="/chat" component={ChatPage}></Route>
        </Switch>
    )
}


export default Views
