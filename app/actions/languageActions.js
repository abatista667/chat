import axios from 'axios';
import { setInterfaceLanguage } from '../actions/actionCreators'

const loadLanguage = (lan) => {
    return (dispatch) => {
        axios.get(`language/${lan}`)
            .then(response => dispatch(setInterfaceLanguage(response.data)))
    }
}

export { loadLanguage }