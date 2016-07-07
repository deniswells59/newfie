angular.module('newfie.register', [])
  .config(function($stateProvider, $urlRouterProvider, $authProvider) {

    $stateProvider
      .state('main.registerNav', {
        url: '/register',
        templateUrl: '../../html/registerNav.html',
      })
      .state('main.registerNav.registerLang', {
        url: '/languages',
        templateUrl: '../../html/registerLang.html',
        controller: 'registerCtrl'
      })
      .state('main.registerNav.registerInterests', {
        url: '/interests',
        templateUrl: '../../html/registerInterests.html',
        controller: 'registerCtrl'
      })
      .state('main.registerNav.registerLocation', {
        url: '/location',
        templateUrl: '../../html/registerLocation.html',
        controller: 'registerCtrl'
      });


  })
  .controller('registerCtrl', registerCtrl);
