import {
    SET_ROUTE,
    SET_MENU_HEIGHT,
    SET_VIEW_HEIGHT,
    ADD_MESSAGE,
    SET_LANGUAGE,
    SET_USERNAME,
    INCREMENT_MESSAGE_COUNT,
    SET_THEME,
    SEND_CTRL_AND_ENTER,
    RESET_DEFAULT_SETTINGS,
    SET_CLOCK_FORMAT,
    SET_LAST_SENDER,
    ADD_USER_NOTIFICATION,
    SET_INTERFACE_LANGUAGE
} from "../constant/actionTypes"

const setRoute = (routes) => {
    return { type: SET_ROUTE, payload: routes }
}

const setMenuHeight = (clientHeight) => {
    return { type: SET_MENU_HEIGHT, payload: clientHeight }
}

const setViewHeight = (clientHeight) => {
    return { type: SET_VIEW_HEIGHT, payload: clientHeight }
}

const addMessage = (message) => {
    return { type: ADD_MESSAGE, payload: message }
}

const setLanguage = (language) => {
    return { type: SET_LANGUAGE, payload: language }
}
const setUsername = (username) => {
    return { type: SET_USERNAME, payload: username }
}
const incrementMessageCout = () => {
    return { type: INCREMENT_MESSAGE_COUNT }
}

const setTheme = (theme) => {
    return { type: SET_THEME, payload: theme }
}

const setDefaultSettings = () => {
    return { type: RESET_DEFAULT_SETTINGS }
}

const setSendCTRLandEnter = (val) => {
    return { type: SEND_CTRL_AND_ENTER, payload: val }
}

const setClock = (val) => {
    return { type: SET_CLOCK_FORMAT, payload: val }
}

const setLastSender = (val) => {
    return { type: SET_LAST_SENDER, payload: val }
}

const addUserNotification = (val) => {
    return { type: ADD_USER_NOTIFICATION, payload: val }
}

const setInterfaceLanguage = (language) => {
    return { type: SET_INTERFACE_LANGUAGE, payload: language }
}

export {
    setRoute,
    setMenuHeight,
    setViewHeight,
    addMessage,
    setLanguage,
    setUsername,
    incrementMessageCout,
    setTheme,
    setDefaultSettings,
    setSendCTRLandEnter,
    setClock,
    setLastSender,
    addUserNotification,
    setInterfaceLanguage
}