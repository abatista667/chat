import React, {useState, useEffect} from 'react'

//display a select - option html component
const Select = ({name, data=[], labelColumn, valueColumn, selectedValue, onChange, readOnly}) =>{
    /*
    name: string the name and id of the html component
    data: array of objects only, each object will be an option element
    labelColumn: string the property name to display as text
    valueColum: string the property name to be the option value
    selectedValue: the selected value, it has to match with an availible valueLabel
    onchange: onchange call back
    readonly: boolean, set select not editable
    */ 
    let index = 0

    const [svalue, setValue] = useState(selectedValue)

    const handleChange = (e) => {
        setValue(e.target.value)
        onChange(e)
    }
    //selectedValue prop changed
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