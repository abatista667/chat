import * as ReactDOM from "react-dom";
import * as React from 'react'
import store from './store'
import { Provider } from 'react-redux'
import Container from "./components/navigation/Container";

const App = () => <Provider store={store}><Container /></Provider>


ReactDOM.render(<App />, 
            document.getElementById("app"))

