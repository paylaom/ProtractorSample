"use strict";
function rgb2hex(rgb) {
    var rgbHex = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return (rgbHex && rgbHex.length === 4) ? '#' +
        ('0' + parseInt(rgbHex[1], 10).toString(16)).slice(-2) +
        ('0' + parseInt(rgbHex[2], 10).toString(16)).slice(-2) +
        ('0' + parseInt(rgbHex[3], 10).toString(16)).slice(-2) : '';
}
exports.rgb2hex = rgb2hex;
//# sourceMappingURL=support.js.map