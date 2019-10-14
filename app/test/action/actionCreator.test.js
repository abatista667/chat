import {setRoute} from '../../actions/actionCreators'
import { SET_ROUTE } from '../../constant/actionTypes'

it("setRoute action creator should return a valid action", () => {
    expect(setRoute("home").type).toBe(SET_ROUTE)
    expect(setRoute("home").payload).toBe("home")
})
