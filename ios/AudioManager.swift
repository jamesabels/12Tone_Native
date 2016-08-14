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
  
  @objc func playNote(freq:NSNumber) -> Void {
    let oscillator = AKOscillator()
    
    AudioKit.output = oscillator
    AudioKit.start()
    
    NSLog("%@ FROM JS", freq);
    
    let doubleFreq : Double = freq as Double;
    
    NSLog("%@ CONVERTED TO DOUBLE", doubleFreq);
  
    // Set oscillator params
    oscillator.frequency = doubleFreq;

    NSLog("%@ TEST", oscillator.frequency);
    
    oscillator.start()
    
    sleep(1)
    
    oscillator.stop();
    AudioKit.stop();
  }
}