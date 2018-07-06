"use strict";
var protractor_1 = require('protractor');
var HomePage = (function () {
    function HomePage() {
        this.heading = protractor_1.element(protractor_1.by.xpath('//*[@class=\'well hoverwell thumbnail\']/h2[contains(text(),\'Selenium Framework development\')]'));
    }
    HomePage.prototype.open = function (page) {
        return protractor_1.browser.get(page);
    };
    return HomePage;
}());
exports.HomePage = HomePage;
//# sourceMappingURL=firsttest.po.js.map