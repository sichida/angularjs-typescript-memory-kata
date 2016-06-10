module.exports = function(config) {
  config.set({
    basePath: '',
    proxies: {
      '/src/': '/base/src/',
      '/jspm_packages/': '/base/jspm_packages/'
    },
    frameworks: ['jspm', 'jasmine'],

    jspm: {
      loadFiles: ['src/**/*.*'],
      serveFiles: ['src/**/*{!.spec}.{js,ts}'],
      browser: "jspm.browser.js",
      config: "jspm.config.js",
      stripExtension: true
    },

    files: [],
    exclude: [],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};