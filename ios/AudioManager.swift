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

let debug = true;

@objc(AudioManager)
class AudioManager: NSObject {
  
  @objc func playNote(freq:NSNumber) -> Void {
    
    // Convert Freq to Double
    let doubleFreq : Double = freq as Double;
    
//    if (debug) {
//      NSLog("%@ FROM JS", freq);
//      NSLog("%@ CONVERTED TO DOUBLE", doubleFreq);
//    }
    
    // Build Oscilator
    let oscillator = AKOscillator()
    
    // Connect to Output
    AudioKit.output = oscillator
    AudioKit.start()
    
    // Set oscillator params
    oscillator.frequency = doubleFreq;
    
    oscillator.start()
    
    sleep(1)
    
    oscillator.stop();
    AudioKit.stop();
  }
}