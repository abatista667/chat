import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import mainReducer from './reducers/mainReducer'

const routes = [
    { key: 2, selected: true, path: '/chat', title: 'Chat' },
    { key: 1, selected: false, path: '/', title: 'Settings' },
]

const chatList = [
    {isCurrentUser:false, content:"hola como estas", user:"Fulano", time:""},
    {isCurrentUser:true, content:"bien", user:"", time:""},
]

const initialState = {
    chat: chatList,
    routes: routes
}

const store = createStore(mainReducer, initialState,
    applyMiddleware(thunk, logger));


export default store