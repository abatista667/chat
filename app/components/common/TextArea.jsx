import React, {useState, useEffect} from 'react'

const TextArea = ({defaultValue, name, onChange, placeholder, style, className, handleKeyDown}) =>{
    const [value, setValue] = useState(defaultValue)

    const handleChange = (e) => {
        setValue(e.target.value)
        if(onChange)onChange(e)
    }

    useEffect(() => {
        setValue(defaultValue)
    }, [defaultValue])

    const localHandleKeyDown = (e)=>{
        if(handleKeyDown)handleKeyDown(e)
    }

    return (
            <textarea className={className} id={name} style={style} 
                      placeholder={placeholder} name={name} onChange={handleChange} 
                      value={value} onKeyDown={localHandleKeyDown}/>
    );
}


export default TextArea