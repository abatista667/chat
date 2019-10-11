import {
    setUsername,
    setTheme,
    setSendCTRLandEnter,
    setClock,
    setDefaultSettings
} from './actionCreators'
import {
    USERNAME,
    THEME,
    CLOCK,
    SEND_WITH_CTRL_AND_ENTER
} from "../constant/availableSettings"
import {  themeLight } from "../constant/availableSettings"
import {notifyConnection} from './messageActions'

const handleSettingsChange = (event) => {
    return (dispatch) => {
        switch (event.target.name) {
            case USERNAME:
                dispatch(setUsername(event.target.value))
                localStorage.setItem(USERNAME, event.target.value)
                break;
            case THEME:
                dispatch(setTheme(event.target.value))
                localStorage.setItem(THEME, event.target.value)
                break;
            case CLOCK:
                dispatch(setClock(parseInt(event.target.value)))
                localStorage.setItem(CLOCK, event.target.value)
                break;
            case SEND_WITH_CTRL_AND_ENTER:
                dispatch(setSendCTRLandEnter(event.target.value == "true"))
                localStorage.setItem(SEND_WITH_CTRL_AND_ENTER, event.target.value == "true")
                break;
        }
    }
}

const loadSettings = () => {
    if (!localStorage[USERNAME])
        localStorage.setItem(USERNAME, "anonymous" + new Date().getMilliseconds())
    if (!localStorage[THEME])
        localStorage.setItem(THEME, themeLight)
    if (!localStorage[CLOCK])
        localStorage.setItem(CLOCK, 24)
    if (!localStorage[SEND_WITH_CTRL_AND_ENTER])
        localStorage.setItem(SEND_WITH_CTRL_AND_ENTER, true)
    return {
        username: localStorage[USERNAME],
        theme: localStorage[THEME],
        clock: localStorage[CLOCK],
        sendCTRLandEnter: localStorage[SEND_WITH_CTRL_AND_ENTER]
    }
}


const initializeSettings = () => {
    const settings = loadSettings()
    notifyConnection(settings.username)
    return (dispatch) => {
        dispatch(setUsername(settings.username))
        dispatch(setTheme(settings.theme))
        dispatch(setClock(parseInt(settings.clock)))
        dispatch(setSendCTRLandEnter(settings.sendCTRLandEnter == "true"))
    }
}

const clearSettings = () => {
    localStorage.clear()
    return (dispatch) => {
        dispatch(setDefaultSettings())
    }
}

export { handleSettingsChange, initializeSettings, clearSettings }