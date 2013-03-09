(function (global) {
	var AppsFlyer;
	AppsFlyer = function () {
	};

	AppsFlyer.prototype.notifyAppID = function (appId, devKey, eventName, eventValue) {
		var options;
		options = {};
		options.appId = appId;
		options.devKey = devKey;
		options.eventName = eventName;
		options.eventValue = eventValue;
    	cordova.exec(null, null, "AppsFlyerPlugin", "notifyAppID", [options]);
	};

	global.cordova.addConstructor(function() {
		if (!global.Cordova) {
			global.Cordova = global.cordova;
		};

		if (!global.plugins) {
			global.plugins = {};
		}

		global.plugins.appsFlyer = new AppsFlyer();
	});
}(window));