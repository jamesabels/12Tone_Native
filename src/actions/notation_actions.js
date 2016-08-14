// Import Constants
import { GET_SCALE, SET_ROOT, SET_MODE } from '../constants.js'; 

// Import Libs
import teoria from 'teoria'; 

// Import Tools 
import NotationTools from '../libs/notation-tools.js';

export default NotationActions = {}; 

NotationActions.SET_ROOT = function (rootNote) {
    return {
        type: SET_ROOT,
        rootNote
    }
}

NotationActions.SET_MODE = function (mode) {
    return {
        type: SET_MODE,
        mode
    }
}

NotationActions.GET_SCALE = function (rootNote, mode) {
    console.log(rootNote, mode); 
        
        let scale = NotationTools.GET_SCALE(rootNote, mode);

        return {
            type: GET_SCALE,
            scale: scale
        }
}
