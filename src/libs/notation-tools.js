// Import Libs
import teoria from 'teoria'; 

export default NotationTools = {}

NotationTools.GET_SCALE = function (rootNote, mode) {
    switch (mode) {
        case 'Maj':
            let majScale = teoria.note(rootNote).scale('ionian').simple();
            console.log(majScale); 
            return majScale;
        case 'Min':
            let minScale = teoria.note(rootNote).scale('aeolian').simple();
            console.log(minScale); 
            return minScale;
    }
}