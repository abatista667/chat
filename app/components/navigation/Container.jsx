import { HashRouter } from 'react-router-dom'
import Menu from './Menu'
import Views from './Views'
import { useSelector, useDispatch } from 'react-redux'
import { useLayoutEffect } from 'react'
import { setViewHeight } from '../../actions/actionCreators'
import useWindowSize from '../../hooks/useWindowsSize';
import Loading from './Loading'

//display the application, render the menu and the view parts
//handle resizing logic
//handle theme changes
//all visible area is inside the container div
const Container = () => {
    const menuHeight = useSelector(state => state.size.menuHeight)
    const dispatch = useDispatch()
    const oldViewHeight = useSelector(state => state.size.viewHeight)
    const [width, windowHeight] = useWindowSize()
    const theme = useSelector(state => state.settings.theme)
    const showLoading = useSelector(state => state.loading)

    useLayoutEffect(() => {
        console.log(window.innerHeight)
        const viewHeight = windowHeight - menuHeight

        if (oldViewHeight != viewHeight && !isNaN(viewHeight))
            dispatch(setViewHeight(viewHeight))

    })
    const css = "container " + theme
    return (
        <HashRouter>{
            showLoading ?
                <Loading />
                :
                <div className={css}>
                    <Menu />
                    <Views />
                </div>
        }


        </HashRouter>
    )
}


export default Container
