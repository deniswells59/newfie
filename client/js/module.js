'use strict';
$(document).ready(function() {
  $('.modal-trigger').leanModal();
});

var app = angular.module('myApp', ['ui.router', 'satellizer', 'ngMaterial', 'ngMap']);

app.config(function($stateProvider, $urlRouterProvider, $authProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: '/html/login.html',
      controller: 'loginCtrl'
    })
    .state('registerNav', {
      url: '/register',
      templateUrl: '/register/registerNav.html',
    })
    .state('registerNav.registerLang', {
      url: '/languages',
      templateUrl: '/register/registerLang.html',
      controller: 'registerCtrl'
    })
    .state('registerNav.registerInterests', {
      url: '/interests',
      templateUrl: '/register/registerInterests.html',
      controller: 'registerCtrl'
    })
    .state('registerNav.registerLocation', {
      url: '/location',
      templateUrl: '/register/registerLocation.html',
      controller: 'registerCtrl'
    })
    .state('registerNav.confirm', {
      url: '/confirm',
      templateUrl: '/register/regConfirm.html',
      controller: 'registerCtrl'
    })
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
      controller: 'homeCtrl',
    })
    .state('dashboard', {
      url: '/dash',
      templateUrl: '/html/dash.html',
      controller: 'dashCtrl',
      resolve: {
        user: function(User) {
          return User.isLoggedIn();
        }
      }
    })
    $urlRouterProvider.otherwise('/');

    $authProvider.google({
      clientId: '50096600078-riejkgcrs9iqkhbdmbfg07neh3ksodvg.apps.googleusercontent.com'
    });
    $authProvider.facebook({
      clientId: '1255637804476855',
      responseType: 'token'
    });


});
