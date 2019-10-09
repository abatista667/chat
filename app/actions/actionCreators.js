import { SET_ROUTE } from "../constant/actionTypes"

const setRoute = (routes) => {
    return { type: SET_ROUTE, payload: routes }
}


export { setRoute }