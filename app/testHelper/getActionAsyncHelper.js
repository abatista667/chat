async function getActionAsync(store, type, delay=200) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let actions = store.getActions()
            resolve(actions.find((x => x.type == type)))
        }, delay);
    })

    return promise
}


export { getActionAsync }