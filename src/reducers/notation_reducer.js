// Import Constants
import {
GET_SCALE,
SET_ROOT,
SET_MODE
} from '../constants.js';

let initState = {
    rootNote: 'C',
    mode: 'Maj',
    scale: []
}

// Notation Reducer 
export default notationReducer = function(state = initState, action) { 
    switch (action.type) {
        case GET_SCALE: 
            return Object.assign({}, state, {
                scale: action.scale
            })
        case SET_ROOT: 
            return Object.assign({}, state, {
                rootNote: action.rootNote
            })
        case SET_MODE: 
            return Object.assign({}, state, {
                mode: action.mode
            })
        default:
            return state;
    }
}