'use strict';

var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: '/html/login.html',
      controller: 'loginCtrl'
    })
    .state('registerNav', {
      url: '/register',
      templateUrl: '/html/registerNav.html',
    })
    .state('registerNav.register', {
      url: '/email',
      templateUrl: '/html/registerEmail.html',
      controller: 'registerCtrl'
    })
    .state('home', {
      url: '/',
      templateUrl: '/html/home.html',
      controller: 'homeCtrl',
      resolve:{
        user: function(User) {
          return User.isLoggedIn();
        }
      }
    });

    $urlRouterProvider.otherwise('/');
});
