'use strict';
exports.config = {
    baseUrl: 'http://tia.tia365.com/',
    apiUrl: 'http://tia365api.azurewebsites.net/',
    directConnect: true,
    capabilities: {
        browserName: 'chrome',
        specs: 'specs/*.js',
    },
    framework: 'jasmine',
    jasmineNodeOpts: {defaultTimeoutInterval: 1000000},
    useAllAngular2AppRoots: true,
    allScriptsTimeout: 40000,
    getPageTimeout: 60000,
    restartBrowserBetweenTests: false,
    onPrepare: function () {
        browser.driver.manage().timeouts().implicitlyWait(10000);
        browser.driver.manage().window().maximize();
        global.baseUrl = browser.baseUrl;
        global.apiUrl = browser.apiUrl;
    }
};