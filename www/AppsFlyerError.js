/**
 *  ContactError.
 *  An error code assigned by an implementation when an error has occurred
 * @constructor
 */
var AppsFlyerError = function(err) {
    this.code = (typeof err != 'undefined' ? err : null);
};

/**
 * Error codes
 */
AppsFlyerError.UNKNOWN_ERROR = 0;
AppsFlyerError.INVALID_ARGUMENT_ERROR = 1;
AppsFlyerError.TIMEOUT_ERROR = 2;
AppsFlyerError.NOT_SUPPORTED_ERROR = 5;
AppsFlyerError.PERMISSION_DENIED_ERROR = 20;

module.exports = AppsFlyerError;
