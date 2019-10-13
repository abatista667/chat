import * as ReactDOM from "react-dom";
import * as React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import Container from "./components/navigation/Container";
import {socketEventHandler} from './actions/messageActions'
import '../css/materialize.scss'
import '../css/site.scss'
import { initializeSettings } from "./actions/settingActions";

const App = () => <Provider store={store}><Container /></Provider>

//Initialize the socket connection to the chat server
store.dispatch(socketEventHandler())

//Read the settings from the localStorage and dispatch them to the redux store
store.dispatch(initializeSettings())

ReactDOM.render(<App />, 
            document.getElementById("app"))

