import { combineReducers } from 'redux'
import chat from './chatReducer'
import routes from './routeReducer'
import size from './sizeReducer'

const mainReducer = combineReducers({
    chat,
    routes,
    size
})


export default mainReducer