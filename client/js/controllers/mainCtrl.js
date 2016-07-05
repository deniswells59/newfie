'use strict';

var app = angular.module('myApp');

app.controller('mainCtrl', function($scope, $state, User) {
  $scope.logout = () => {
    User.logout()
      .then(() => {
        $scope.currentUser = null;
        return $state.go('login');
      });
  };
});

app.controller('homeCtrl', function($scope, user) {
  $scope.$parent.currentUser = user;
});

app.controller('registerCtrl', function($scope, $state, User) {
  $scope.registerUser = () => {
    User.register($scope.reg)
      .then(() => {
        return User.login($scope.reg);
      })
      .then(() => {
        $state.go('home');
      });
  };
});


app.controller('loginCtrl', function($scope, User, $state) {
  $scope.loginUser = () => {
    User.login($scope.log)
      .then(() => {
        $state.go('home');
      });
  };
});
