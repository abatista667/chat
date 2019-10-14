import {
    setUsername,
    setTheme,
    setSendCTRLandEnter,
    setClock,
    setDefaultSettings,
    setLanguage
} from './actionCreators'
import {
    USERNAME,
    THEME,
    CLOCK,
    SEND_WITH_CTRL_AND_ENTER,
    LANGUAGE_TAG,
    defaultLanguageValue
} from "../constant/availableSettings"
import { themeLight } from "../constant/availableSettings"
import { notifyConnection } from './messageActions'
import { readFromLocalStorage, writeOnLocalStorage } from '../utils/storageUtils'
import { loadLanguage } from './languageActions'

//even handler for all different inputs in settings
const handleSettingsChange = (event) => {
    return (dispatch) => {
        switch (event.target.name) {
            case USERNAME:
                dispatch(setUsername(event.target.value))
                writeOnLocalStorage(USERNAME, event.target.value)
                break;
            case THEME:
                dispatch(setTheme(event.target.value))
                writeOnLocalStorage(THEME, event.target.value)
                break;
            case CLOCK:
                dispatch(setClock(parseInt(event.target.value)))
                writeOnLocalStorage(CLOCK, event.target.value)
                break;
            case SEND_WITH_CTRL_AND_ENTER:
                dispatch(setSendCTRLandEnter(event.target.value == "true"))
                writeOnLocalStorage(SEND_WITH_CTRL_AND_ENTER, event.target.value == "true")
                break;
            case LANGUAGE_TAG:
                dispatch(loadLanguage(event.target.value))
                writeOnLocalStorage(LANGUAGE_TAG, event.target.value)
                break;
        }
    }
}

//read the settings form the localStorage
//if key is missing return the defaut value
const loadSettings = () => {
    return {
        username: readFromLocalStorage(USERNAME, "anonymous" + new Date().getMilliseconds()),
        theme: readFromLocalStorage(THEME, themeLight),
        clock: readFromLocalStorage(CLOCK, 24),
        sendCTRLandEnter: readFromLocalStorage(SEND_WITH_CTRL_AND_ENTER, true),
        language: readFromLocalStorage(LANGUAGE_TAG, defaultLanguageValue)
    }
}

//load settins from localStorage
//set them in the redux store
const initializeSettings = () => {
    const settings = loadSettings()
    notifyConnection(settings.username)
    return (dispatch) => {
        dispatch(setUsername(settings.username))
        dispatch(setTheme(settings.theme))
        dispatch(setClock(parseInt(settings.clock)))
        dispatch(setSendCTRLandEnter(settings.sendCTRLandEnter == "true"))
        dispatch(setLanguage(settings.language))
        dispatch(loadLanguage(settings.language))
    }
}
//clear the localStorage
//clear the settings in redux store
const clearSettings = () => {
    if (localStorage)
        localStorage.clear()
    return (dispatch) => {
        dispatch(setDefaultSettings())
        dispatch(loadLanguage(defaultLanguageValue))
    }
}

export { handleSettingsChange, initializeSettings, clearSettings }