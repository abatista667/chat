import {
    SET_LANGUAGE,
    SET_USERNAME,
    SET_THEME,
    RESET_DEFAULT_SETTINGS
} from "../constant/actionTypes";
import { defaultSettings } from '../constant/availableSettings'

const settings = (state = {}, action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            state.language = action.payload
            break;
        case SET_USERNAME:
            state.Username = action.payload
            break;
        case SET_THEME:
            state.theme = action.payload
            break;
        case RESET_DEFAULT_SETTINGS:
            state = defaultSettings
            break;
    }
    return state;
}


export default settings