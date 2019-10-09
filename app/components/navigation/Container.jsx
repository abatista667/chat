import { HashRouter } from 'react-router-dom'
import Menu from './Menu'
import Views from './Views'
import useWindowSize from '../../hooks/useWindowsSize';
import {useState} from 'react'

const Container = () => {
    const [width, height] = useWindowSize()
    const [viewHeight, setViewHeight] = useState(0)


    const menuResizeHandler = (menuHeight) =>{
        setViewHeight(height - menuHeight  )
    }

    return (
        <HashRouter>
            <div className="container">
                <Menu resizeCallBack={menuResizeHandler} />
                <Views height={viewHeight} />
            </div>

        </HashRouter>
    )
}


export default Container
