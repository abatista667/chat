import  size  from '../../reducers/sizeReducer'
import { setViewHeight, setMenuHeight } from '../../actions/actionCreators'

it("size reducer should update store with ViewHeight or menuHeight", () => {
    const action1 = setViewHeight(19)
    expect(size({}, action1).viewHeight).toBe(19)

    const action2 = setMenuHeight(19)
    expect(size({}, action2).menuHeight).toBe(19)
})


it("size reducer should update store with ViewHeight and menuHeight", () => {
    let state = {}
    const action1 = setViewHeight(19)
    const action2 = setMenuHeight(8)

    state = size(state, action1)
    state = size(state, action2)

    expect(state.viewHeight).toBe(19)
    expect(state.menuHeight).toBe(8)
})