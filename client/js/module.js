'use strict';
$(document).ready(function() {
  $('.modal-trigger').leanModal();
});

var app = angular.module('newfie',
  ['ui.router', 'satellizer', 'ngMaterial', 'ngMap', 'newfie.register', 'newfie.landing'])
.config(function($stateProvider, $urlRouterProvider, $authProvider) {

  $stateProvider
    .state('main', {
      url: '/',
      template: '<div ui-view />',
      abstract: true,
    })

    $urlRouterProvider.otherwise('/landing');

    $authProvider.google({
      clientId: '50096600078-riejkgcrs9iqkhbdmbfg07neh3ksodvg.apps.googleusercontent.com'
    });
    $authProvider.facebook({
      clientId: '1255637804476855',
      responseType: 'token'
    });

})
  .service('User', userService)
  // .controller('mainCtrl', mainCtrl);
