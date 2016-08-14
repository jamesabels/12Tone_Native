// Import Constants
import {
PLAY_NOTE
} from '../constants.js';

let initState = {
}

// Notation Reducer 
export default synthReducer = function(state = initState, action) { 
    switch (action.type) {
        case PLAY_NOTE: 
            return Object.assign({}, state, {
                
            })
        default:
            return state;
    }
}