import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import mainReducer from './reducers/mainReducer'

const routes = [
    { key: 1, selected: true, path: '/', title: 'Settings' },
    { key: 2, selected: false, path: '/chat', title: 'Chat' }
]

const initialState = {
    chat: "prueba",
    routes: routes
}

const store = createStore(mainReducer, initialState,
    applyMiddleware(thunk, logger));


export default store