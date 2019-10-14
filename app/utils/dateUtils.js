//receive a date or string with a valid date
//return a string with the date in format 12hh:mm tt
const format12Hour = (d) => {
    if (!d) return;
    let date = d;
    if (typeof (date) == "string") //autoconvert strings in valid format
        date = new Date(date)

    if (date == "Invalid Date") return ""

    let hour = date.getHours();
    const minute = date.getMinutes();
    const timePart = hour < 12 ? " AM" : " PM"
    hour = hour >= 13 ? hour - 12 : hour
    return zeroFill(hour) + ":" + zeroFill(minute) + timePart
}
//receive a date or string with a valid date
//return a string with the date in format 24hh:mm
const format24Hour = (d) => {
    if (!d) return;
    let date = d;
    if (typeof (date) == "string")
        date = new Date(date)

    if (date == "Invalid Date") return ""

    return (zeroFill(date.getHours()) + ":" + zeroFill(date.getMinutes()))
}

//add one 0 to the left when the number is one digit
const zeroFill = (value) => {
    const number = parseInt(value)
    return number < 10 ? "0" + number : number.toString()
}

export { zeroFill, format12Hour, format24Hour }