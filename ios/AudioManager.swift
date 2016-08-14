//
//  AudioManager.swift
//  12 Tone
//
//  Created by James Abels on 8/14/2016.
//  Copyright © 2015 Minimally Exceptional LLC. All rights reserved.
//

import Foundation
import AudioKit

// AudioManager.swift




@objc(AudioManager)
class AudioManager: NSObject {
  
  @objc func playNote(freq:Int) -> Void {
    let oscillator = AKOscillator()
    
    AudioKit.output = oscillator
    AudioKit.start()
    
    NSLog("%@", freq);
    
    let currentFreq = freq;
    let freqDouble : Double = Double(currentFreq);

    NSLog("%@", currentFreq);
    NSLog("%@", freqDouble);
    
    // Set oscillator params
    oscillator.frequency = Double(freqDouble);
    
    oscillator.start()
    
    sleep(1)
    
    oscillator.stop();
    AudioKit.stop();
  }
}