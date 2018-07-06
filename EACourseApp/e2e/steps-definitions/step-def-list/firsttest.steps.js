"use strict";
var protractor_1 = require('protractor');
var firsttest_po_1 = require('../../page-objects/page-object-list/firsttest.po');
var cucumber_1 = require('cucumber');
//const chai = require('chai').use(require('chai-as-promised'));
//const expect = chai.expect;
cucumber_1.defineSupportCode(function (_a) {
    var Given = _a.Given, When = _a.When, Then = _a.Then;
    var homepage = new firsttest_po_1.HomePage();
    Given('Open First Page of Application.', function () {
        homepage.open(protractor_1.browser.params.EAUrl);
    });
    Then('Get the heading', function () {
        homepage.heading.getText().then(function (text) {
            console.log("The heading is :" + text);
        });
    });
    Then('Click on the first heading', function () {
        return homepage.heading.click();
    });
});
//# sourceMappingURL=firsttest.steps.js.map