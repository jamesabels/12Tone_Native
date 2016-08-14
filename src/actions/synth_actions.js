// Import Constants
import { PLAY_NOTE } from '../constants.js'; 

// Import Libs
import teoria from 'teoria'; 

// Import Tools 
import SynthTools from '../libs/synth-tools.js';

export default SynthActions = {}; 

SynthActions.PLAY_NOTE = function (rootNote) {
    currentNote = teoria.note(rootNote);
    SynthTools.PLAY_NOTE(currentNote);

    return {
        type: PLAY_NOTE,
        activeNote: currentNote 
    }
}

