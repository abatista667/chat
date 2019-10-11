import Select from "../common/Select"
import TextBox from '../common/TextBox'
import { useSelector, useDispatch } from 'react-redux'
import {
    setLanguage,
    setUsername,
    setTheme,
    setSendCTRLandEnter,
    setDefaultSettings
} from '../../actions/actionCreators'
import { themeDark, themeLight } from "../../constant/availableSettings"

const SettingsPage = () => {
    const dispatch = useDispatch();

    const languageList = useSelector(state => state.settings.languageList)
    const language = useSelector(state => state.settings.language)
    const username = useSelector(state => state.settings.username)
    const themelightSelected = useSelector(state => state.settings.theme == themeLight)
    const sendCTRLandEnter = useSelector(state => state.settings.sendCTRLandEnter)

    const handleLanguageChange = (event) => dispatch(setLanguage(event.target.value))
    const handleUsernameChange = (event) => dispatch(setUsername(event.target.value))
    const handleThemeChange = (event) => dispatch(setTheme(event.target.value))
    const handleSendCTRLandEnter = (event) => dispatch(setSendCTRLandEnter(event.target.value == "true"))


    const height = useSelector(state => state.size.viewHeight)

    return <div className="setting-container" style={{ height }}>
        <div className="row">
            <div className="col s12">
                Username
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                <TextBox name="username"
                    onKeyUp={handleUsernameChange}
                    defaultValue={username} />
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                Interface color
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                <input onChange={handleThemeChange} type="radio" checked={themelightSelected}
                    name="theme" value={themeLight} /> Light
                 <input onChange={handleThemeChange} type="radio" checked={!themelightSelected}
                    name="theme" value={themeDark} /> Dark
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                Clock display
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                <input type="radio" name="clock" value={12} /> 12 Hour
                 <input type="radio" name="clock" value={24} /> 24 Hour
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                Send message on CTRL + ENTER
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                <input onChange={handleSendCTRLandEnter} type="radio" checked={sendCTRLandEnter}
                    name="sendCTRLandEnter" value={true} /> On
                 <input onChange={handleSendCTRLandEnter} type="radio" checked={!sendCTRLandEnter}
                    name="sendCTRLandEnter" value={false} /> Off
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                Language
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                <Select name="language"
                    data={languageList}
                    labelColumn="name"
                    valueColumn="name"
                    selectedValue={language}
                    onChange={handleLanguageChange}
                />
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                <button onClick={() => dispatch(setDefaultSettings())} id="btn-reset"
                    className="btn">Reset to default</button>
            </div>
        </div>
    </div>
}

export default SettingsPage