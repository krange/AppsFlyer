#import "AppsFlyerPlugin.h"
#import "AppsFlyer.h"

@implementation AppsFlyerPlugin

- (CDVPlugin *)initWithWebView:(UIWebView *)theWebView
{
	self = (AppsFlyerPlugin *)[super initWithWebView:theWebView];
	return self;
}

- (void)notifyAppID:(CDVInvokedUrlCommand*)command
{
    if ([command.arguments count] < 2) {
		return;
	}
    
    NSString* appId = [command.arguments objectAtIndex:0];
    NSString* devKey = [command.arguments objectAtIndex:1];
    NSString* identifier = [appId stringByAppendingString:@";"];
    identifier = [identifier stringByAppendingString:devKey];
    
    //#ifdef CONFIGURATION_Release
    if ([command.arguments count] == 2) {
        [AppsFlyer notifyAppID:identifier];
    } else if ([command.arguments count] == 3) {
        [AppsFlyer notifyAppID:identifier event:[command.arguments objectAtIndex:2] eventValue:nil];
    } else if ([command.arguments count] == 4) {
        [AppsFlyer notifyAppID:identifier event:[command.arguments objectAtIndex:2] eventValue:[command.arguments objectAtIndex:3]];
    }
    //#endif
}

@end
