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
    	cordova.exec(null, null, "AppsFlyerPlugin", "notifyAppID", [options.appId,options.devKey,options.eventName,options.eventValue]);
	};
	
	AppsFlyer.prototype.setCurrencyId = function (currencyId) {
		var options;
		options = {};
		options.currencyId = currencyId;
    	cordova.exec(null, null, "AppsFlyerPlugin", "setCurrencyId", [options.currencyId]);
	};
	
	AppsFlyer.prototype.setCustomeUserId = function (customeUserId) {
		var options;
		options = {};
		options.customeUserId = customeUserId;
    	cordova.exec(null, null, "AppsFlyerPlugin", "setCustomeUserId", [options.customeUserId]);
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
