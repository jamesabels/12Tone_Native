//
//  AudioManager.swift
//  12 Tone
//
//  Created by James Abels on 8/14/2016.
//  Copyright © 2015 Minimally Exceptional LLC. All rights reserved.
//

import Foundation

// AudioManager.swift


@objc(AudioManager)
class AudioManager: NSObject {
  
  @objc func addEvent(name: String, location: String, date: NSNumber) -> Void {
    NSLog("%@ %@ %@", name, location, date);
  }
  
}