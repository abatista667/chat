import { setRoute } from "./actionCreators"


const selectRoute = (selectedRoute, routes = []) => {
    const newroutes = [...routes]
    newroutes.forEach(route => route.selected = selectedRoute.path == route.path)

    return (dispatch) => {
        dispatch(setRoute(newroutes))
    }
}

export { selectRoute }