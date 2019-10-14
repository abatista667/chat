import axios from 'axios';
import { setInterfaceLanguage } from '../actions/actionCreators'

//load from server all the labels in the specified language
const loadLanguage = (lan) => {
    return (dispatch) => {
        axios.get(`language/${lan}`)
            .then(response => dispatch(setInterfaceLanguage(response.data)))
    }
}

export { loadLanguage }