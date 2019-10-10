

const SettingsPage = () => {
    return <div className="setting-container">
        <div className="row">
            <div className="col s12">
                Username
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                <input />
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                Interface color
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                 <input type="radio" name="interface" value="light" /> Light
                 <input type="radio" name="interface" value="dark" /> Dark
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                Clock display
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                 <input type="radio" name="interface" value="light" /> 12 Hour
                 <input type="radio" name="interface" value="dark" /> 24 Hour
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                Send message on CTRL + ENTER
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                 <input type="radio" name="interface" value="light" /> On
                 <input type="radio" name="interface" value="dark" /> Off
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                Languaje
            </div>
        </div>
        <div className="row">
            <div className="col s12">
                <select></select>
            </div>
        </div>
    </div>
}

export default SettingsPage