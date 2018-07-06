exports.config = {

  framework: 'custom',

  frameworkPath: require.resolve('protractor-cucumber-framework'),

  params: {
    EAUrl: 'http://localhost:8808',
  },

  seleniumAddress: 'http://localhost:4444/wd/hub/',

  ignoreUncaughtExceptions: true,


  specs: ["./e2e/features/*/*.feature"],
  
  useAllAngular2AppRoots: true,
  cucumberOpts: {
    require: ['./e2e/page-objects/*/*.ts',
      './e2e/steps-definitions/*/*.ts',
      './e2e/support/*.ts'],
    format: ['progress', 'json:e2e-test-results.json']
  },

  rootElement: 'body',
  capabilities: {
    browserName: 'chrome',
  },

  beforeLaunch: function () {
    require('ts-node').register({
      project: 'e2e'
    });
  },

  onPrepare: function () {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().pageLoadTimeout(60000);
    browser.manage().timeouts().implicitlyWait(90000);
    browser.manage().window().maximize();
    global.debugPortNumber = 5000;
    global.initiateDebug = function () {
      browser.pause(debugPortNumber);
      debugPortNumber++;
    };

  },
  keepAlive: false
};
