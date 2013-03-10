//
//  AppsFlyer.h
//
//  Copyright 2012 AppsFlyer. All rights reserved.
//  Version 2.5.1.9.3

#import <Foundation/Foundation.h>


@interface AppsFlyer : NSObject{
    
}

+(void)notifyAppID: (NSString*) strdata;
+(void)notifyAppID: (NSString*) strdata event:(NSString*)eventName eventValue:(NSString*)eventValue;

// Set custom device ID. 
+(void) setAppUID:(NSString*)appUID;

// Get AppsFlyer device ID
+(NSString *) getAppsFlyerUID;

// set the device UDID by the developer
+(void) setDeviceUDID:(NSString*)udid;

// Set currency 
+(void) setCurrencyCode:(NSString*)code;
@end
