import "babel-polyfill"
import { loadLanguage } from '../../actions/languageActions'
import axios from 'axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter';
import { getActionAsync } from '../../testHelper/getActionAsyncHelper'
import { SET_INTERFACE_LANGUAGE } from '../../constant/actionTypes';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
let store = null

//initiaize the store with empty test for each test
beforeEach(() => {
    store = mockStore()
})

it("loadLanguage should load a mocked object",async () => {
    var mock = new MockAdapter(axios, { delayResponse: 100 });
    mock.onGet().reply(200, { chat: 'chatear' })
    store.dispatch(loadLanguage("es"))

    const action = await getActionAsync(store, SET_INTERFACE_LANGUAGE)
    
    expect(action.payload).toBeDefined()
    expect(action.payload.chat).toBe('chatear')
})


