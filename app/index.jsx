import * as ReactDOM from "react-dom";
import * as React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import Container from "./components/navigation/Container";
import {socketEventHandler} from './actions/messageActions'
import '../css/materialize.css'
import '../css/site.css'
import { initializeSettings } from "./actions/settingActions";

const App = () => <Provider store={store}><Container /></Provider>

store.dispatch(socketEventHandler())
store.dispatch(initializeSettings())

ReactDOM.render(<App />, 
            document.getElementById("app"))

