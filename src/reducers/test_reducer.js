// Import consts
import { DATA } from '../actions/test_actions'

initState = {
    image: 'http://placehold.it/600/f01e5d'
}

// Counter Reducer 
export default testReducer = function(state = initState, action) { 
    switch (action.type) {
        case DATA: 
            return Object.assign({}, state, {
                image: action.image
            })
        default:
            return state;
    }
}