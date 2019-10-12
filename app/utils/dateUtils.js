

const format12Hour = (d) => {
    if(!d) return;
    let date = d; 
    if(typeof(date) =="string") 
    date = new Date(date)

    let hour = date.getHours();
    const minute = date.getMinutes();
    const timePart = hour < 12 ? " AM" :" PM"
    hour = hour >= 13? hour-12 : hour 
    return zeroFill(hour)+":"+zeroFill(minute) + timePart
}

const format24Hour = (d) => {
    if(!d) return;
    let date = d; 
    if(typeof(date) =="string") 
    date = new Date(date)

    return (zeroFill(date.getHours()) + ":" + zeroFill(date.getMinutes()))
}

const zeroFill = (value) => {
    const number = parseInt(value)
    return number < 10 ? "0" + number : number.toString()
}

export {zeroFill, format12Hour, format24Hour }