import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import mainReducer from './reducers/mainReducer'

const store = createStore(mainReducer,{chat:{}},
    applyMiddleware(thunk, logger));


export default store