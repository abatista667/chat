import Select from "../common/Select"
import TextBox from '../common/TextBox'
import { useSelector, useDispatch } from 'react-redux'
import { handleSettingsChange, clearSettings } from '../../actions/settingActions'
import { themeDark, themeLight } from "../../constant/availableSettings"

const SettingsPage = () => {
    const dispatch = useDispatch();

    const languageList = useSelector(state => state.settings.languageList)
    const language = useSelector(state => state.settings.language)
    const username = useSelector(state => state.settings.username)
    const themelightSelected = useSelector(state => state.settings.theme == themeLight)
    const sendCTRLandEnter = useSelector(state => state.settings.sendCTRLandEnter)
    const _24Clock = useSelector(state => state.settings.clock == 24)
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
                    onKeyUp={(e) => dispatch(handleSettingsChange(e))}
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
                <input onChange={(e) => dispatch(handleSettingsChange(e))} type="radio" checked={themelightSelected}
                    name="theme" value={themeLight} /> Light
                 <input onChange={(e) => dispatch(handleSettingsChange(e))} type="radio" checked={!themelightSelected}
                    name="theme" value={themeDark} className="margin-left-10" /> Dark
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                Clock display
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                <input onChange={(e) => dispatch(handleSettingsChange(e))} type="radio" name="clock"
                    value={12} checked={!_24Clock} /> 12 Hour
                 <input onChange={(e) => dispatch(handleSettingsChange(e))} type="radio" name="clock"
                    value={24} checked={_24Clock} className="margin-left-10" /> 24 Hour
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                Send message on CTRL + ENTER
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                <input onChange={(e) => dispatch(handleSettingsChange(e))} type="radio" checked={sendCTRLandEnter}
                    name="sendCTRLandEnter" value={true} /> On
                 <input onChange={(e) => dispatch(handleSettingsChange(e))} type="radio" checked={!sendCTRLandEnter}
                    name="sendCTRLandEnter" value={false} className="margin-left-10"/> Off
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
                    onChange={(e) => dispatch(handleSettingsChange(e))}
                />
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                <button onClick={() => dispatch(clearSettings())} id="btn-reset"
                    className="btn">Reset to default</button>
            </div>
        </div>
    </div>
}

export default SettingsPage