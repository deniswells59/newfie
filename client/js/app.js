define([], function() {
  const app = angular.module('newfie', ['newfie.landing', 'newfie.register', 'ui.router'])
    .config(function($stateProvider, $urlRouterProvider, $authProvider) {
    $stateProvider
    .state('newfie', {
      url: '',
      views: {
        root: {
          templateUrl: '../html/app.html'
        }
      }
    })
    .state('newfie.index', {
      url: '',
      views: {
        content: {
          templateUrl: '../html/home.html'
        }
      }
    });
  });
  return app;
});
