import React, {useState, useEffect} from 'react'

//display a controlled TextArea component
const TextArea = ({defaultValue, name, onChange, placeholder, style, className, handleKeyDown}) =>{
    /*
    defaultValue: the props with the value
    name: string the name and id of the html component
    onchange: onchange event callback
    placeholder:html textarea attribute
    style: object jsx atribute
    classname:classname
    handleKeyDown: keydown event callback
    */ 
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