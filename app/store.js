import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'
import mainReducer from './reducers/mainReducer'
import { defaultSettings } from './constant/availableSettings'
import { routes } from './constant/availableRoutes'

const initialState = {
    settings: {...defaultSettings },
    chat: { list: [], count: 0 },
    routes
}

//configure the redux store using the combined reducers, the initial state,
//redux-thunk and redux-logger middlewares
const store = createStore(mainReducer, initialState,
    applyMiddleware(thunk, logger));


export default store