import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { selectRoute } from '../../actions/routeActions'
import { setMenuHeight } from '../../actions/actionCreators'
import { useRef, useLayoutEffect } from 'react'

//display the menu, receive the history object as prop
const Menu = ({ history }) => {
    const dispatch = useDispatch();
    const routes = useSelector(state => state.routes)
    const interfaceLanguage = useSelector(state => state.settings.interfaceLanguage)

    //push the route to the history
    //dispatch the selected route to update the routes redux store
    const handleSelect = (item) => {
        history.push(item.path)
        dispatch(selectRoute(item, routes))
    }
    const navRef = useRef()
    //update menu height when changed
    useLayoutEffect(() => {
        return () => {
            dispatch(setMenuHeight(navRef.current.clientHeight))
        }
    })
    return (
        <nav ref={navRef}>
            <div className="nav-wrapper">
                <ul>
                    {routes.map(item => {
                        const title = interfaceLanguage[item.title]
                        return <MenuItem {...item} title={title} onSelect={handleSelect} />
                    })}
                </ul>
            </div>
        </nav>
    )
}

//display the menu item
const MenuItem = (prop) => {
    const { selected, path, title, onSelect } = prop

    return selected ? <li className="active">
        <a onClick={() => onSelect(prop)} to={path}>{title}</a>
    </li>
        : <li>
            <a onClick={() => onSelect(prop)} to={path}>{title}</a>
        </li>
}


export default withRouter(Menu)
export {Menu} 