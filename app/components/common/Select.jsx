import React, {useState, useEffect} from 'react'

const Select = ({name, data=[], labelColumn, valueColumn, selectedValue, onChange, readOnly}) =>{
    let index = 0

    const [svalue, setValue] = useState(selectedValue)

    const handleChange = (e) => {
        setValue(e.target.value)
        onChange(e)
    }
    //compoenent will receiveProps
    useEffect(() => {
        setValue(selectedValue)
    }, [selectedValue])

    return(
        <select name={name} onChange={handleChange} value={svalue} disabled={readOnly} className="select">
            {data.map(item =>{
                return <option key={index++} value={item[valueColumn]}>{item[labelColumn]}</option>
            })}
        </select>
    )
}


export default Select