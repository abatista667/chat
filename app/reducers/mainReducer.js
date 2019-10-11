import { combineReducers } from 'redux'
import chat from './chatReducer'
import routes from './routeReducer'
import size from './sizeReducer'
import settings from './settingReducer'

const mainReducer = combineReducers({
    chat,
    routes,
    size,
    settings
})


export default mainReducer