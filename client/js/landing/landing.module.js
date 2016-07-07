angular.module('newfie.landing', [])
  .config(function($stateProvider, $urlRouterProvider, $authProvider) {

    $stateProvider
      .state('main.landing', {
        template: '<div ui-view />',
        abstract: true
      })
      .state('main.landing.home', {
        url: '/landing',
        templateUrl: '../../html/home.html',
        abstract: true
      })


  })
  .controller('landingCtrl', landingCtrl);
