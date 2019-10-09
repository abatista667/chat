import {  HashRouter  } from 'react-router-dom'
import  Menu  from './Menu'
import  Views  from './Views'

const Container = () =>{
    return (
        <HashRouter>
            <Menu />
            <Views />
    </HashRouter>
    )
}


export default Container
