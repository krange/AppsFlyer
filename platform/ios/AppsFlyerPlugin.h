#import <Foundation/Foundation.h>
#import <Cordova/CDVPlugin.h>

@interface AppsFlyerPlugin : CDVPlugin
- (void)notifyAppID:(CDVInvokedUrlCommand*)command;
- (void)setCurrencyId:(CDVInvokedUrlCommand*)command;
- (void)setCustomeUserId:(CDVInvokedUrlCommand*)command;
@end