import * as ReactDOM from "react-dom";
import * as React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import Container from "./components/navigation/Container";
import {receiveMessage} from './actions/messageActions'
import '../css/materialize.css'
import '../css/site.css'

const App = () => <Provider store={store}><Container /></Provider>

store.dispatch(receiveMessage())

ReactDOM.render(<App />, 
            document.getElementById("app"))

