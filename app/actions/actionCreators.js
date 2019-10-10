import { 
    SET_ROUTE,
    SET_MENU_HEIGHT, 
    SET_VIEW_HEIGHT,
    ADD_MESSAGE
} from "../constant/actionTypes"

const setRoute = (routes) => {
    return { type: SET_ROUTE, payload: routes }
}

const setMenuHeight = (clientHeight) =>{
    return {type :SET_MENU_HEIGHT, payload: clientHeight}
}

const setViewHeight = (clientHeight) =>{
    return {type :SET_VIEW_HEIGHT, payload: clientHeight}
}

const AddMessage = (message) =>{
    return {type :ADD_MESSAGE, payload: message}
}
export { 
    setRoute, 
    setMenuHeight,
    setViewHeight,
    AddMessage
 }