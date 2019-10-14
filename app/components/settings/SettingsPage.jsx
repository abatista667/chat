import Select from "../common/Select"
import TextBox from '../common/TextBox'
import { useSelector, useDispatch } from 'react-redux'
import { handleSettingsChange, clearSettings } from '../../actions/settingActions'
import { themeDark, themeLight } from "../../constant/availableSettings"

//display the settings page
const SettingsPage = () => {
    const dispatch = useDispatch();

    const languageList = useSelector(state => state.settings.languageList)
    const language = useSelector(state => state.settings.language)
    const username = useSelector(state => state.settings.username)
    const themelightSelected = useSelector(state => state.settings.theme == themeLight)
    const sendCTRLandEnter = useSelector(state => state.settings.sendCTRLandEnter)
    const _24Clock = useSelector(state => state.settings.clock == 24)
    const height = useSelector(state => state.size.viewHeight)
    const interfaceLanguage = useSelector(state => state.settings.interfaceLanguage)

    return <div className="setting-page"  style={{ height }}>
        <div className="setting-container" style={{ height }}>
            <div className="row">
                <div className="col s12">
                    {interfaceLanguage.username}
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
                    {interfaceLanguage.interface}
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <input onChange={(e) => dispatch(handleSettingsChange(e))} type="radio" checked={themelightSelected}
                        name="theme" value={themeLight} /> {interfaceLanguage.light}

                    <input onChange={(e) => dispatch(handleSettingsChange(e))} type="radio" checked={!themelightSelected}
                        name="theme" value={themeDark} className="margin-left-10" /> {interfaceLanguage.dark}
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    {interfaceLanguage.clock}
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <input onChange={(e) => dispatch(handleSettingsChange(e))} type="radio" name="clock"
                        value={12} checked={!_24Clock} /> {interfaceLanguage._12}
                    <input onChange={(e) => dispatch(handleSettingsChange(e))} type="radio" name="clock"
                        value={24} checked={_24Clock} className="margin-left-10" /> {interfaceLanguage._24}
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    {interfaceLanguage.ctrlEnter}
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <input onChange={(e) => dispatch(handleSettingsChange(e))} type="radio" checked={sendCTRLandEnter}
                        name="sendCTRLandEnter" value={true} /> {interfaceLanguage.on}
                    <input onChange={(e) => dispatch(handleSettingsChange(e))} type="radio" checked={!sendCTRLandEnter}
                        name="sendCTRLandEnter" value={false} className="margin-left-10" /> {interfaceLanguage.off}
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    {interfaceLanguage.language}
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <Select name="language"
                        data={languageList}
                        labelColumn="name"
                        valueColumn="value"
                        selectedValue={language}
                        onChange={(e) => dispatch(handleSettingsChange(e))}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <button onClick={() => dispatch(clearSettings())} id="btn-reset"
                        className="btn"> {interfaceLanguage.btnReset}</button>
                </div>
            </div>
        </div>
    </div>

}

export default SettingsPage