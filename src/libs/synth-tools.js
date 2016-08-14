// Import React Native
import {NativeModules} from 'react-native';

// Import Libs
import teoria from 'teoria'; 

export default SynthTools = {}

SynthTools.PLAY_NOTE = function (note) {
    console.log(note.fq());
    // console.log("BRIDGED SWIFT FUNCTION ")
    // console.dir(NativeModules.CalendarManager);
    NativeModules.CalendarManager.addEvent('One', 'Two', 3);
}