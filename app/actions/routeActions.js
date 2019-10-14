import { setRoute } from "./actionCreators"

//change the selected route in the store
const selectRoute = (selectedRoute, routes = []) => {
    const newroutes = [...routes]
    newroutes.forEach(route => route.selected = selectedRoute.path == route.path)

    return (dispatch) => {
        dispatch(setRoute(newroutes))
    }
}

export { selectRoute }