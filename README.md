# PhoneGap

AppsFlyer plugin for Phonegap. 

Built against Phonegap 2.4.0.

## Installation

### General

1. Add the appsflyer.js file to your www directory

### Android

1. Add the AppsFlyerPlugin.java file in the android directory and class path to your src directory.

2. Add the jar you received from AppsFlyer to your libs directory in your project

3. In the plugins section of your res/xml/config.xml file, add the following:
	
		<plugin name="AppsFlyerPlugin" value="org.apache.cordova.appsflyer.AppsFlyerPlugin"/>

### iOS

1. Drag the AppsFlyerPlugin.h and AppsFlyerPlugin.m files to your plugins directory. 

2. From the Build Phases tab, expand Link Binary With Libraries, then click on the + button and add the lib_AppsFlyerLib.a file you recieved from AppsFlyer.

3. From the Build Settings tab, find the Other Linker Flags and add -lAppsFlyerLib

4. In the plugins section of your Resources/config.xml file, add the following:

        <plugin name="AppsFlyerPlugin" value="AppsFlyerPlugin"/>
        
## API

The only method supported is:

		window.plugins.appsFlyer.notifyAppID(appId, devKey, eventName, eventValue);
		
- appId: (String)(Required) App ID provided from AppsFlyer

- devKey: (String)(Required) Dev key provided from AppsFlyer 

- eventName: (String)(Optional) The event name to define the event

- eventValue: (String)(Optional) The event sales value
