import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { selectRoute } from '../../actions/routeActions'

const mapStateToProps = (state) => {
    return {
        routes: state.routes
    }
}

const Menu = ({ routes, dispatch, history }) => {

    const handleSelect = (item) => {
        history.push(item.path)
        dispatch(selectRoute(item, routes))
    }

    return (
        <nav>
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

const ConnectedMenu = withRouter(connect(mapStateToProps)(Menu))

export default ConnectedMenu
export { Menu }