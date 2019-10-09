import { combineReducers } from 'redux'
import chat from './chatReducer'
import routes from './routeReducer'

const mainReducer = combineReducers({
    chat,
    routes
})


export default mainReducer