import * as ReactDOM from "react-dom";
import * as React from 'react'
import store from './store'
import { Provider } from 'react-redux'

const App = () => <Provider store={store}><div>hola</div></Provider>

ReactDOM.render(<App />, 
            document.getElementById("app"))

