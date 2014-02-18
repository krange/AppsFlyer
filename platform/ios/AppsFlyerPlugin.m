#import "AppsFlyerPlugin.h"
#import "AppsFlyerTracker.h"

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
    NSString* eventName = [command.arguments objectAtIndex:2];
    
   [AppsFlyerTracker sharedTracker].appleAppID = appId;

   [AppsFlyerTracker sharedTracker].appsFlyerDevKey = devKey;
    
    //#ifdef CONFIGURATION_Release
    if ([command.arguments count] == 2 || [eventName isEqual:[NSNull null]) {
    	[[AppsFlyerTracker sharedTracker] trackAppLaunch];
    } else if ([command.arguments count] == 3) {
    	[[AppsFlyerTracker sharedTracker] trackEvent:[command.arguments objectAtIndex:2] withValue:nil];
    } else if ([command.arguments count] == 4) {
    	[[AppsFlyerTracker sharedTracker] trackEvent:[command.arguments objectAtIndex:2] withValue:[command.arguments objectAtIndex:3]];
    }
    //#endif
}



- (void)setCurrencyId:(CDVInvokedUrlCommand*)command
{
    if ([command.arguments count] == 0) {
		return;
	}
    
    NSString* currencyId = [command.arguments objectAtIndex:0];

    //#ifdef CONFIGURATION_Release
    
    [AppsFlyerTracker sharedTracker].currencyCode = currencyId; 
    
    //#endif
}


- (void)setCustomeUserId:(CDVInvokedUrlCommand*)command
{
    if ([command.arguments count] == 0) {
		return;
	}
    
    NSString* customeId = [command.arguments objectAtIndex:0];

    //#ifdef CONFIGURATION_Release
    
	[AppsFlyerTracker sharedTracker].customerUserID = customeId;
    
    //#endif
}







@end
