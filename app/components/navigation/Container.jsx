import { HashRouter } from 'react-router-dom'
import Menu from './Menu'
import Views from './Views'
import { useSelector, useDispatch } from 'react-redux'
import { useLayoutEffect } from 'react'
import { setViewHeight } from '../../actions/actionCreators'
import useWindowSize from '../../hooks/useWindowsSize';


const Container = () => {
    const menuHeight = useSelector(state => state.size.menuHeight)
    const dispatch = useDispatch()
    const oldViewHeight = useSelector(state => state.size.viewHeight)
    const [width, windowHeight] = useWindowSize()

    useLayoutEffect(() => {
        console.log(window.innerHeight)
        const viewHeight = windowHeight - menuHeight - 1

        if(oldViewHeight != viewHeight)
        dispatch(setViewHeight(viewHeight))
        ///synchronize with chat service
    })

    return (
        <HashRouter>
            <div className="container">
                <Menu />
                <Views />
            </div>

        </HashRouter>
    )
}


export default Container
