//read from the local storage if disabe return the defaultValue
//if key is not there return the defaultValue
const readFromLocalStorage = (key, defaultValue = "") => {
    if (!localStorage) return defaultValue;
    return localStorage[key] || defaultValue
}

//write async on the local storage return a promise
const writeOnLocalStorage = (key, value) => {
    return new Promise((resolve, reject) => {
        if (!localStorage) {
            reject()
            return;
        }
        try {
            localStorage.setItem(key, value)
            resolve()
        } catch (err) {
            console.log("There was an error while saving in the local storage")
            console.log(err)
            reject(false)
        }
    })
}


export { readFromLocalStorage, writeOnLocalStorage }