import { SET_MENU_HEIGHT, SET_VIEW_HEIGHT } from "../constant/actionTypes";

const size = (state = {}, action) => {
    switch (action.type) {
        case SET_MENU_HEIGHT:
            state.menuHeight = action.payload
            break;
        case SET_VIEW_HEIGHT:
            state.viewHeight = action.payload
            break;
    }
    return state;
}


export default size