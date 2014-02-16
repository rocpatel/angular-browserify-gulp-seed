require('angular/angular');
require('angular-resource/angular-resource');
require('angular-route/angular-route');

var config = require('./config')
  , _ = require('lodash');

angular.module(config.appName + '.config', [])
  .factory('AppConfig', function () {
    return config;
  });

var appDeps = [
  'ngResource',
  'ngRoute',
  config.appName + '.config'
]

var appModules = {
  'controllers': require('./controllers/controllers'),
  'services': require('./services/services'),
  'filters': require('./filters/filters'),
  'directives': require('./directives/directives')
}

_.forIn(appModules, function (requireVal, module) {
  var moduleName = config.appName + '.' + module;
  requireVal(angular.module(moduleName, []));
  appDeps.push(moduleName);
});

var app = angular.module(config.appName, appDeps);
require('./routes')(app, config);

require('./init')(angular, app, config.appName);

