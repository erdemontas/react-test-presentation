
//import todoReducer from '../todoReducer';
import todoReducer from './todoReducer'

describe('todo reducer', () => {
    const initialState = {
        items: [],
        title: "",
        item: "",
        edit: false,
        error: ""
    }

    it('returns the initial state when an action type is not passed', () => {
        const reducer = todoReducer(undefined, {})
        expect(reducer).toEqual(initialState)
    })
})
