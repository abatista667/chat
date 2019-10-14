import {
    SET_LANGUAGE,
    SET_USERNAME,
    SET_THEME,
    RESET_DEFAULT_SETTINGS,
    SEND_CTRL_AND_ENTER,
    SET_CLOCK_FORMAT,
    SET_INTERFACE_LANGUAGE
} from "../constant/actionTypes";
import { defaultSettings } from '../constant/availableSettings'

//the settings reducer, app settings in the redux store
const settings = (state = {}, action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            state.language = action.payload
            break;
        case SET_USERNAME:
            state.username = action.payload
            break;
        case SET_THEME:
            state.theme = action.payload
            break;
        case RESET_DEFAULT_SETTINGS:
            state = {...defaultSettings }
            break;
        case SEND_CTRL_AND_ENTER:
            state.sendCTRLandEnter = action.payload
            break;
        case SET_CLOCK_FORMAT:
            state.clock = action.payload
            break;
        case SET_INTERFACE_LANGUAGE:
            state.interfaceLanguage = action.payload
            break;
    }
    return state;
}


export default settings