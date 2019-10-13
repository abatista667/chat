const languageList = [
    { name: "English", value: "en" },
    { name: "Español", value: "sp" },
]

const USERNAME = "username"
const THEME = "theme"
const CLOCK = "clock"
const SEND_WITH_CTRL_AND_ENTER = "sendCTRLandEnter"
const LANGUAGE_TAG = "language"
const defaultLanguageValue = "en"

const language = defaultLanguageValue

const themeDark = "dark"
const themeLight = "light"

const defaultSettings = {
    languageList,
    language,
    theme: themeLight,
    sendCTRLandEnter: true,
    clock: 24,
    interfaceLanguage: {}
}



export {
    defaultSettings,
    themeDark,
    themeLight,
    USERNAME,
    THEME,
    CLOCK,
    SEND_WITH_CTRL_AND_ENTER,
    LANGUAGE_TAG,
    defaultLanguageValue
}