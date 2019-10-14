import React, {useState, useEffect} from 'react'

//display a controlled input[type=text]
const TextBox = ({defaultValue, name, onKeyUp, placeholder, onBlur, onChange, readOnly=false}) =>{
        /*
    defaultValue: the props with the value
    name: string the name and id of the html component
    onKeyUp: keyup event callback
    placeholder:html textarea attribute
    onBlur: blur event callback
    onchange: onchange event callback
    readonly:boolean 
    */ 
    const [value, setValue] = useState(defaultValue|| '')

    const handleKeyDown =(ev) =>{
        if(ev.keyCode ==13 && next){
            document.getElementById(next).focus()
        }
    }

    const handleChange = (e) => {
        setValue(e.target.value)
        onKeyUp(e)
        if(onChange)
        onChange(e)
    }
    //compoenent will receiveProps
    useEffect(() => {
        if(defaultValue) setValue(defaultValue)
    }, [defaultValue])

    return (
            <input placeholder={placeholder} id={name} name={name} 
                   onBlur={onBlur} onKeyDown={handleKeyDown}
                   type="text" onChange={handleChange} value={value} readOnly={readOnly} />
    );
}


export default TextBox