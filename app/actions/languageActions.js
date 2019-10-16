import axios from 'axios';
import { setInterfaceLanguage, setLoading } from '../actions/actionCreators'

//load from server all the labels in the specified language
const loadLanguage = (lan) => {
    return (dispatch) => {
        dispatch(setLoading(true))
        axios.get(`language/${lan}`)
            .then(response => {
                dispatch(setInterfaceLanguage(response.data))
                dispatch(setLoading(false))
            })
            .catch(()=> dispatch(setLoading(false)))
    }
}

export { loadLanguage }