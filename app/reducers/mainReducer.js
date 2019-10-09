import { combineReducers } from 'redux'
import chat from './chatReducer'

const mainReducer = combineReducers({
    chat
})


export default mainReducer