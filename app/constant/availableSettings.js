const ENGLISH = "English"

const languageList = [
    {name:ENGLISH}
]

const language = ENGLISH

const themeDark ="dark"
const themeLight ="light"

const defaultSettings = {
    languageList,
    language,
    theme:themeLight,
    sendCTRLandEnter:true,
    clock:24
}

const USERNAME = "username"
const THEME ="theme"
const CLOCK="clock"
const SEND_WITH_CTRL_AND_ENTER="sendCTRLandEnter"

export {
    defaultSettings,
    themeDark,
    themeLight,
    USERNAME,
    THEME,
    CLOCK,
    SEND_WITH_CTRL_AND_ENTER
}