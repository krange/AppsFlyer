cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.appsflyer.phonegap.plugins.appsflyer/www/appsflyer.js",
        "id": "com.appsflyer.phonegap.plugins.appsflyer.appsflyer",
        "clobbers": [
            "window.plugins.appsFlyer"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "com.appsflyer.phonegap.plugins.appsflyer": "2.0"
}
// BOTTOM OF METADATA
});