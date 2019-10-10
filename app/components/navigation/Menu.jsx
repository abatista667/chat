import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { selectRoute } from '../../actions/routeActions'
import { setMenuHeight } from '../../actions/actionCreators'
import { useRef, useLayoutEffect } from 'react'


const Menu = ({ history }) => {
    const dispatch = useDispatch();
    const routes = useSelector(state => state.routes)

    const handleSelect = (item) => {
        history.push(item.path)
        dispatch(selectRoute(item, routes))
    }
    const navRef = useRef()
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
                        return <MenuItem {...item} onSelect={handleSelect} />
                    })}
                </ul>
            </div>
        </nav>
    )
}

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