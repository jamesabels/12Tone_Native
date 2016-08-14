//
//  AudioManager.swift
//  12 Tone
//
//  Created by James Abels on 8/14/2016.
//  Copyright © 2015 Minimally Exceptional LLC. All rights reserved.
//


// AudioManagerBridge.m
#import "RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(AudioManager, NSObject)

RCT_EXTERN_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)date)

@end