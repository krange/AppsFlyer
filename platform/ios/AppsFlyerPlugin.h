#import <Foundation/Foundation.h>
#import <Cordova/CDVPlugin.h>

@interface AppsFlyerPlugin : CDVPlugin
- (void)notifyAppID:(CDVInvokedUrlCommand*)command;
@end