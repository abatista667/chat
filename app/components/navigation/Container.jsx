import { HashRouter } from 'react-router-dom'
import Menu from './Menu'
import Views from './Views'
import { useSelector, useDispatch } from 'react-redux'
import { useLayoutEffect } from 'react'
import { setViewHeight } from '../../actions/actionCreators'
import useWindowSize from '../../hooks/useWindowsSize';
import { themeLight } from '../../constant/availableSettings'


const Container = () => {
    const menuHeight = useSelector(state => state.size.menuHeight)
    const dispatch = useDispatch()
    const oldViewHeight = useSelector(state => state.size.viewHeight)
    const [width, windowHeight] = useWindowSize()
    const theme = useSelector(state => state.settings.theme)

    useLayoutEffect(() => {
        console.log(window.innerHeight)
        const viewHeight = windowHeight - menuHeight

        if(oldViewHeight != viewHeight)
        dispatch(setViewHeight(viewHeight))
        ///synchronize with chat service
    })
       const css = "container "+theme
    return (
        <HashRouter>
            <div className={css}>
                <Menu />
                <Views />
            </div>

        </HashRouter>
    )
}


export default Container
