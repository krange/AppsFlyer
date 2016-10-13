
    if (!window.CustomEvent) {
        window.CustomEvent = function (type, config) {
            var e = document.createEvent("CustomEvent");
            e.initCustomEvent(type, true, true, config.detail);
            return e;
        }
    }

    (function (global) {
        var AppsFlyer;
        AppsFlyer = function () {
        };

        AppsFlyer.prototype.initSdk = function (args) {
            cordova.exec(null, null, "AppsFlyerPlugin", "initSdk", args);
        };

        AppsFlyer.prototype.setCurrencyCode = function (currencyId) {
            cordova.exec(null, null, "AppsFlyerPlugin", "setCurrencyCode", [currencyId]);
        };

        AppsFlyer.prototype.setAppUserId = function (customerUserId) {
            cordova.exec(null, null, "AppsFlyerPlugin", "setAppUserId", [customerUserId]);
        };
        AppsFlyer.prototype.setGCMProjectID = function (GCMProjectID) {
            cordova.exec(null, null, "AppsFlyerPlugin", "setGCMProjectID", [GCMProjectID]);
        };
        AppsFlyer.prototype.registerUninstall = function (token) {
            cordova.exec(null, null, "AppsFlyerPlugin", "registerUninstall", [token]);
        };
        AppsFlyer.prototype.getAppsFlyerUID = function (callbackFn) {
            cordova.exec(function (result) {
                callbackFn(result);
            }, null,
                    "AppsFlyerPlugin",
                    "getAppsFlyerUID",
                    []);
        };

        AppsFlyer.prototype.trackEvent = function (eventName, eventValue) {
            cordova.exec(null, null, "AppsFlyerPlugin", "trackEvent", [eventName, eventValue]);
        };

        AppsFlyer.prototype.onInstallConversionDataLoaded = function (conversionData) {
            var data = conversionData,
                    event;
            if (typeof data === "string") {
                data = JSON.parse(conversionData);
            }
            event = new CustomEvent('onInstallConversionDataLoaded', {'detail': data});
            global.document.dispatchEvent(event);
        };

        global.cordova.addConstructor(function () {
            if (!global.Cordova) {
                global.Cordova = global.cordova;
            }
            ;

            if (!global.plugins) {
                global.plugins = {};
            }

            global.plugins.appsFlyer = new AppsFlyer();
        });
    }(window));
