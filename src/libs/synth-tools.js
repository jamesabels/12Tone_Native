// Import React Native
import {NativeModules} from 'react-native';

// Import Libs
import teoria from 'teoria'; 

export default SynthTools = {}

SynthTools.PLAY_NOTE = function (note) {
    console.log(note.fq());
    // console.log("BRIDGED SWIFT FUNCTION ")
    // console.dir(NativeModules.CalendarManager);
    let noteFQ = Math.round(note.fq()) * 10; 
    console.log('noteFQ', noteFQ);

    NativeModules.AudioManager.playNote(noteFQ);
    
}