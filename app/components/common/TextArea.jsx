import React, {useState, useEffect} from 'react'

const TextArea = ({defaultValue, name, onChange, placeholder, style, className, onEnterPress}) =>{
    const [value, setValue] = useState(defaultValue)

    const handleChange = (e) => {
        setValue(e.target.value)
        if(onChange)onChange(e)
    }

    const handleKeyDown = (e) => {
        if(e.keyCode == 13){
            e.preventDefault()
            onEnterPress()
        }
    }

    useEffect(() => {
        setValue(defaultValue)
    }, [defaultValue])

    return (
            <textarea className={className} id={name} style={style} 
                      placeholder={placeholder} name={name} onChange={handleChange} 
                      value={value} onKeyDown={handleKeyDown}/>
    );
}


export default TextArea