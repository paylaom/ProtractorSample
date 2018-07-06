"use strict";
var cucumber_1 = require('cucumber');
cucumber_1.defineSupportCode(function (_a) {
    var Before = _a.Before, setDefaultTimeout = _a.setDefaultTimeout;
    var DEFAULT_PAGE_LOAD_TIMEOUT_SECONDS = 100 * 1000;
    var BEFORE_FEATURE_TIMEOUT = 5 * 1000;
    setDefaultTimeout(DEFAULT_PAGE_LOAD_TIMEOUT_SECONDS);
    Before(function (event, callback) {
        setTimeout(callback, BEFORE_FEATURE_TIMEOUT);
    });
});
//# sourceMappingURL=hooks.js.map